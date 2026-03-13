export default function FatBottomGrilleHomepage() { return ( <div className="min-h-screen bg-black text-white"> <header className="sticky top-0 z-50 border-b border-fuchsia-500/30 bg-black/80 backdrop-blur"> <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6"> <div className="flex items-center gap-3"> <div className="rounded-2xl border border-cyan-400/40 bg-gradient-to-r from-fuchsia-500/20 via-orange-400/20 to-cyan-400/20 px-4 py-2 shadow-[0_0_30px_rgba(236,72,153,0.25)]"> <div className="text-2xl font-black uppercase tracking-tight md:text-4xl"> <span className="text-fuchsia-400">Fat Bottom</span>{" "} <span className="text-cyan-400">Grille</span> </div> </div> </div>

<nav className="hidden items-center gap-6 text-sm font-semibold uppercase tracking-wider md:flex">
        <a href="#home" className="text-fuchsia-300 transition hover:text-white">Home</a>
        <a href="#menu" className="text-white/80 transition hover:text-white">Menu</a>
        <a href="#events" className="text-white/80 transition hover:text-white">Events</a>
        <a href="#merch" className="text-white/80 transition hover:text-white">Merch</a>
        <a href="#contact" className="text-white/80 transition hover:text-white">Contact</a>
        <a
          href="#order"
          className="rounded-xl border border-orange-400 bg-orange-500/20 px-4 py-2 text-orange-200 shadow-[0_0_20px_rgba(251,146,60,0.3)] transition hover:bg-orange-500/30"
        >
          Order Online
        </a>
      </nav>
    </div>
  </header>

  <main id="home">
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,70,239,0.22),transparent_30%),radial-gradient(circle_at_right,rgba(34,211,238,0.18),transparent_25%),radial-gradient(circle_at_left,rgba(249,115,22,0.16),transparent_20%)]" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-20">
        <div className="relative z-10">
          <div className="mb-4 inline-flex rounded-full border border-green-400/40 bg-green-500/15 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-green-300 shadow-[0_0_20px_rgba(74,222,128,0.2)]">
            All Species Welcome
          </div>

          <h1 className="max-w-4xl text-5xl font-black uppercase leading-none tracking-tight sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-fuchsia-500 bg-clip-text text-transparent">
              Beer & Burger
            </span>
            <br />
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Paradise
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-white/75 md:text-xl">
            A neon-soaked burger bar with cold beer, tacos, wings, merch, and a whole lot of weird in the best way possible.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#menu"
              className="rounded-2xl border border-fuchsia-400 bg-fuchsia-500/20 px-6 py-3 text-base font-bold uppercase tracking-wide text-white shadow-[0_0_24px_rgba(217,70,239,0.35)] transition hover:scale-[1.02] hover:bg-fuchsia-500/30"
            >
              View Menu
            </a>
            <a
              href="#order"
              className="rounded-2xl border border-cyan-400 bg-cyan-500/15 px-6 py-3 text-base font-bold uppercase tracking-wide text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.28)] transition hover:scale-[1.02] hover:bg-cyan-500/25"
            >
              Order Online
            </a>
          </div>
        </div>

        <div className="relative z-10">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_0_50px_rgba(59,130,246,0.15)] backdrop-blur">
            <div className="overflow-hidden rounded-[1.5rem] border border-fuchsia-400/30 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs uppercase tracking-[0.25em] text-white/50">
                <span>Fat Bottom Grille</span>
                <span>Cryptid Bar Energy</span>
              </div>

              <div className="relative px-5 py-6 sm:px-8 sm:py-8">
                <div className="absolute right-4 top-4 h-24 w-24 rounded-full bg-cyan-400/20 blur-3xl" />
                <div className="absolute bottom-4 left-4 h-24 w-24 rounded-full bg-fuchsia-500/20 blur-3xl" />

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-3xl border border-orange-400/30 bg-orange-500/10 p-4 text-center shadow-[0_0_25px_rgba(251,146,60,0.14)]">
                    <div className="text-5xl">🍔</div>
                    <div className="mt-2 text-sm font-bold uppercase tracking-wide text-orange-200">Big Burgers</div>
                  </div>
                  <div className="rounded-3xl border border-cyan-400/30 bg-cyan-500/10 p-4 text-center shadow-[0_0_25px_rgba(34,211,238,0.14)]">
                    <div className="text-5xl">👽</div>
                    <div className="mt-2 text-sm font-bold uppercase tracking-wide text-cyan-100">Alien Approved</div>
                  </div>
                  <div className="rounded-3xl border border-fuchsia-400/30 bg-fuchsia-500/10 p-4 text-center shadow-[0_0_25px_rgba(217,70,239,0.14)]">
                    <div className="text-5xl">🛸</div>
                    <div className="mt-2 text-sm font-bold uppercase tracking-wide text-fuchsia-100">UFO Delivery</div>
                  </div>
                </div>

                <div className="mt-5 rounded-3xl border border-white/10 bg-black/35 p-5">
                  <div className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-green-300">Featured Vibe</div>
                  <div className="text-2xl font-black uppercase text-white sm:text-3xl">Bigfoot + Burgers + Beer</div>
                  <div className="mt-2 text-sm text-white/70">
                    Bright neon color, cryptid mascots, music nights, and a homepage that feels like your merch came to life.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="menu" className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
      <div className="grid gap-5 md:grid-cols-3">
        <FeatureCard
          title="Burgers, Tacos, & Wings Heaven"
          emoji="🍔"
          accent="from-fuchsia-500/20 to-orange-400/20"
          border="border-fuchsia-400/30"
          buttonLabel="See Menu"
        >
          Stacked burgers, loaded tacos, saucy wings, and late-craving comfort food done loud.
        </FeatureCard>

        <FeatureCard
          title="Fat Bottom Grille Merch"
          emoji="👕"
          accent="from-cyan-500/20 to-lime-400/20"
          border="border-cyan-400/30"
          buttonLabel="Shop Merch"
          id="merch"
        >
          Shirts, stickers, and weirdly awesome cryptid-inspired gear that feels like your walls and your menu had a baby.
        </FeatureCard>

        <FeatureCard
          title="Online Ordering"
          emoji="📱"
          accent="from-orange-500/20 to-yellow-400/20"
          border="border-orange-400/30"
          buttonLabel="Order Now"
          id="order"
        >
          Pickup links, food photos, and a super-fast way for people to get from craving to checkout.
        </FeatureCard>
      </div>
    </section>

    <section id="events" className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_0_35px_rgba(217,70,239,0.1)] backdrop-blur">
        <div className="mb-5 flex items-center gap-3">
          <div className="text-3xl">🎤</div>
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-fuchsia-300">Upcoming Events</div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white">Bring the weird. Sing anyway.</h2>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-3xl border border-fuchsia-400/25 bg-black/35 p-6">
            <div className="text-4xl font-black uppercase text-yellow-300">Karaoke Night</div>
            <div className="mt-2 text-lg text-white/80">Thursday | 8:00 PM</div>
            <p className="mt-4 max-w-2xl text-white/70">
              Rotate this section with karaoke, trivia, live music, specials, birthdays, and whatever event you want people to see first.
            </p>
            <button className="mt-6 rounded-2xl border border-yellow-400 bg-yellow-500/10 px-5 py-3 font-bold uppercase tracking-wide text-yellow-200 transition hover:bg-yellow-500/20">
              Full Events Calendar
            </button>
          </div>

          <div className="rounded-3xl border border-cyan-400/25 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 p-6">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">Promo Block</div>
            <div className="mt-3 text-2xl font-black uppercase">All Species Welcome</div>
            <p className="mt-3 text-white/70">
              Use this area for a featured special, a weekly promo, or a standout piece of merch.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center text-3xl">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-3">👻</div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-3">🦶</div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-3">👽</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer id="contact" className="border-t border-white/10 bg-black/80">
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-3 md:px-6">
      <div>
        <div className="text-2xl font-black uppercase tracking-tight">
          <span className="text-fuchsia-400">Fat Bottom</span>{" "}
          <span className="text-cyan-400">Grille</span>
        </div>
        <p className="mt-3 max-w-sm text-white/65">
          Replace this with your real address, hours, phone number, and order link when you’re ready to launch.
        </p>
      </div>

      <div>
        <div className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">Visit</div>
        <div className="mt-3 space-y-2 text-white/75">
          <div>410 W. Piedmont Street</div>
          <div>Keyser, WV</div>
          <div>(304) 790-7669</div>
        </div>
      </div>

      <div>
        <div className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Hours</div>
        <div className="mt-3 space-y-2 text-white/75">
          <div>Mon–Thu: 11 AM – 8 PM</div>
          <div>Fri–Sat: 11 AM – 9 PM</div>
          <div>Sun: Closed</div>
        </div>
      </div>
    </div>
  </footer>
</div>

); }

function FeatureCard({ title, children, emoji, accent, border, buttonLabel, id }) { return ( <div id={id} className={rounded-[2rem] border ${border} bg-gradient-to-br ${accent} p-[1px] shadow-[0_0_30px_rgba(255,255,255,0.06)]} > <div className="flex h-full flex-col rounded-[calc(2rem-1px)] bg-black/80 p-6 backdrop-blur"> <div className="text-5xl">{emoji}</div> <h3 className="mt-4 text-3xl font-black uppercase leading-tight tracking-tight text-white"> {title} </h3> <p className="mt-3 flex-1 text-white/70">{children}</p> <button className="mt-6 rounded-2xl border border-white/15 bg-white/8 px-5 py-3 font-bold uppercase tracking-wide text-white transition hover:bg-white/15"> {buttonLabel} </button> </div> </div> ); }
