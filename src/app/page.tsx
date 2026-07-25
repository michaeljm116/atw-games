import Image from "next/image";

const screenshots = [
  { src: "/screenshots/ss.png", alt: "Bee Killings Inn screenshot" },
  { src: "/screenshots/ss1.png", alt: "Bee Killings Inn screenshot 1" },
  { src: "/screenshots/ss2.png", alt: "Bee Killings Inn screenshot 2" },
  { src: "/screenshots/ss3.png", alt: "Bee Killings Inn screenshot 3" },
  { src: "/screenshots/ss4.png", alt: "Bee Killings Inn screenshot 4" },
  { src: "/screenshots/ss5.png", alt: "Bee Killings Inn screenshot 5" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-24 text-center bg-gradient-to-b from-zinc-900 via-zinc-950 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Image
            src="/SteamMainCapsule-01.png"
            alt="Bee Killings Inn"
            width={460}
            height={215}
            className="mx-auto mb-8 rounded-lg shadow-2xl shadow-amber-900/30"
            priority
          />
          <p className="text-lg sm:text-xl text-zinc-400 mb-3 font-mono tracking-wide uppercase">
            Custom Vulkan Raytraced Engine
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 tracking-tight">
            Bee Killings Inn
          </h1>
          <p className="text-lg sm:text-xl text-zinc-300 mb-10 max-w-xl mx-auto leading-relaxed">
            A top-down 3D turn-based grid strategy RPG. Fight demon-possessed
            bees in an old church turned inn. Custom raytraced visuals. Tactical
            combat. QTE action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://store.steampowered.com/app/4642030/Bee_Killings_Inn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold text-lg rounded-lg transition-all duration-200 shadow-lg shadow-amber-900/40 hover:shadow-amber-700/50 hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              Wishlist on Steam
            </a>
            <form
              action="https://buttondown.com/api/emails/embed-subscribe/agnst_th_wrld"
              method="post"
              className="flex flex-col sm:flex-row items-center gap-3"
            >
              <input
                type="email"
                name="email"
                id="bd-email"
                placeholder="Enter your email"
                required
                className="px-4 py-4 rounded-lg bg-zinc-900 border border-zinc-700 focus:border-amber-500 focus:outline-none text-zinc-100 placeholder-zinc-500 w-full sm:w-64 text-base"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-4 border border-zinc-600 hover:border-amber-500 text-zinc-200 hover:text-amber-400 font-semibold rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <svg className="w-6 h-6 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Screenshots
          </h2>
          <p className="text-zinc-400 text-center mb-12 max-w-lg mx-auto">
            Raytraced visuals, tactical grid combat, and atmospheric environments.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {screenshots.map((ss, i) => (
              <div
                key={i}
                className="relative aspect-video rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900"
              >
                <Image
                  src={ss.src}
                  alt={ss.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Tactical Grid Combat",
                desc: "Turn-based battles on a 4-direction grid. Position, attack, and outmaneuver your enemies. Every move matters.",
              },
              {
                title: "QTE Attack System",
                desc: "Precision timing attacks and dodges. Weapons have different stats for flying vs crawling bees. Master your arsenal.",
              },
              {
                title: "Bee AI & Personalities",
                desc: "Bees use a deck-of-cards system with unique personalities — passive, normal, aggressive. Each fight is different.",
              },
              {
                title: "Vulkan Raytraced Engine",
                desc: "Custom-built engine 'Axiomo' in Odin. Compute shader raytraced rendering. High-performance, data-oriented design.",
              },
              {
                title: "Atmospheric Setting",
                desc: "An old church turned inn, infested with demon-possessed bees. Uncover the mystery as you fight through rooms.",
              },
              {
                title: "Weapon System",
                desc: "Random weapons placed on the grid. Different stats for flying vs crawling bees. Status effects: stun, slow, poison.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-amber-800/50 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3 text-amber-400">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">The Story</h2>
          <div className="prose prose-invert prose-zinc mx-auto">
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              Long ago, a thriving church fell to corruption and sin. After the
              minister's murder and the congregation's decay, the building sat
              empty — until investors converted it into an inn.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              But construction halted after strange deaths involving bees. An
              exorcism gone wrong had bound evil spirits into the hive hidden in
              the basement.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed">
              You are an investigator sent to uncover the mystery. Fight through
              rooms of possessed bees, discover what lurks below, and destroy
              the hive before it spreads.
            </p>
          </div>
        </div>
      </section>

      {/* Engine */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-mono text-amber-600 mb-2 tracking-widest uppercase">
            Built With
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Custom Engine: Axiomo
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            Entirely custom game engine written in Odin. Compute shader raytraced
            Vulkan rendering. ECS-based architecture with arena memory allocation.
            No off-the-shelf engines — every pixel is ours.
          </p>
          <div className="flex flex-wrap gap-3 justify-center text-sm font-mono">
            {["Odin", "Vulkan", "Raytracing", "ECS", "GLFW", "SDL3"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full border border-zinc-700 text-zinc-300 bg-zinc-900"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-gradient-to-b from-zinc-950 to-black text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Fight Some Bees?
          </h2>
          <p className="text-zinc-400 mb-10 text-lg">
            Wishlist on Steam to get notified at launch. Join the email list for
            dev updates, demos, and behind-the-scenes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://store.steampowered.com/app/4642030/Bee_Killings_Inn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold text-lg rounded-lg transition-all duration-200 shadow-lg shadow-amber-900/40 hover:shadow-amber-700/50 hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              Wishlist on Steam
            </a>
            <form
              action="https://buttondown.com/api/emails/embed-subscribe/agnst_th_wrld"
              method="post"
              className="flex flex-col sm:flex-row items-center gap-3"
            >
              <input
                type="email"
                name="email"
                id="bd-email"
                placeholder="Enter your email"
                required
                className="px-4 py-4 rounded-lg bg-zinc-900 border border-zinc-700 focus:border-amber-500 focus:outline-none text-zinc-100 placeholder-zinc-500 w-full sm:w-64 text-base"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-4 border border-zinc-600 hover:border-amber-500 text-zinc-200 hover:text-amber-400 font-semibold rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-zinc-800 bg-black">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/SmallCapsule-01.png"
              alt="Bee Killings Inn"
              width={64}
              height={36}
              className="rounded"
            />
            <div>
              <p className="font-semibold text-sm">Bee Killings Inn</p>
              <p className="text-xs text-zinc-500">
                Built with Axiomo Engine — Odin + Vulkan
              </p>
            </div>
          </div>
          <div className="flex gap-6 text-sm text-zinc-500">
            <a
              href="https://store.steampowered.com/app/4642030/Bee_Killings_Inn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              Steam
            </a>
            <a
              href="https://buttondown.com/agnst_th_wrld"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              Subscribe
            </a>
            <a
              href="https://x.com/agnst_th_wrld"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              X / Twitter
            </a>
          </div>
        </div>
        <p className="text-center text-xs text-zinc-700 mt-8">
          &copy; {new Date().getFullYear()} Michael J. M. All rights reserved.
        </p>
      </footer>
    </>
  );
}
