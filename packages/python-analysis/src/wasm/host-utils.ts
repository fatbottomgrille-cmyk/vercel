/**
 * Host-side implementation of the `vercel:python-analysis/host-utils` WIT interface.
 * Provides IDNA domain-to-ASCII conversion and Unicode normalization (NFC, NFD, NFKC, NFKD),
 * eliminating ~450 KB of ICU/Unicode lookup tables from the WASM binary.
 */
import { domainToUnicode as nodeDomainToUnicode } from 'url';

export function createHostUtils() {
  return {
    domainToAscii(domain: string): string {
      try {
        // Use the WHATWG URL parser for IDNA2008 conversion.
        // We must validate the input to avoid URL-level parsing artifacts:
        // colons would be interpreted as port separators, brackets as IPv6,
        // @ as userinfo separator, # as fragment, ? as query, / as path,
        // \ as path separator (equivalent to / in special schemes),
        // % as percent-encoding, tab/LF/CR are silently stripped by the URL parser.
        if (/[:#?/@[\]%\\\t\n\r]/.test(domain)) {
          throw new Error('domain contains invalid characters');
        }
        const url = new URL(`http://${domain}/`);
        // Verify the hostname wasn't mangled by URL parsing (e.g. empty after normalization)
        if (url.hostname === '' && domain !== '') {
          throw new Error('domain resolved to empty hostname');
        }
        return url.hostname;
      } catch {
        // jco expects { payload: string } for WIT result<_, string> errors
        throw { payload: `Invalid domain: ${domain}` };
      }
    },

    domainToUnicode(domain: string): [string, boolean] {
      // Node.js url.domainToUnicode provides full UTS #46 domain-to-unicode:
      // punycode decoding, case folding, and NFC normalization.
      // Node returns '' on failure; we return the input as best-effort in that
      // case (matching upstream idna which returns a string even on error).
      const result = nodeDomainToUnicode(domain);
      if (result !== '' || domain === '') {
        return [result, true];
      }
      return [domain, false];
    },

    nfcNormalize(s: string): string {
      return s.normalize('NFC');
    },

    nfdNormalize(s: string): string {
      return s.normalize('NFD');
    },

    nfkcNormalize(s: string): string {
      return s.normalize('NFKC');
    },

    nfkdNormalize(s: string): string {
      return s.normalize('NFKD');
    },
  };
}
