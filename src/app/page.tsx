import { site, type Color } from "@/content/site";
import { Icon } from "@/components/Icon";
import { HeroArt } from "@/components/HeroArt";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const photo = site.photo.startsWith("/") ? base + site.photo : site.photo;

const palette: Record<Color, { tile: string; soft: string; text: string }> = {
  violet: { tile: "bg-violet-500", soft: "bg-violet-100", text: "text-violet-700" },
  pink: { tile: "bg-pink-500", soft: "bg-pink-100", text: "text-pink-700" },
  sky: { tile: "bg-sky-500", soft: "bg-sky-100", text: "text-sky-700" },
  amber: { tile: "bg-amber-400", soft: "bg-amber-100", text: "text-amber-800" },
  emerald: { tile: "bg-emerald-500", soft: "bg-emerald-100", text: "text-emerald-700" },
  orange: { tile: "bg-orange-500", soft: "bg-orange-100", text: "text-orange-700" },
};

const nav = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

function Heading({ icon, kicker, title }: { icon: string; kicker: string; title: string }) {
  return (
    <div className="mb-10 text-center">
      <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-bold text-violet-700 shadow-sm ring-1 ring-violet-100">
        <Icon name={icon} className="h-4 w-4" /> {kicker}
      </span>
      <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <header className="sticky top-0 z-20 border-b border-violet-100 bg-[#fffaf3]/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#" className="flex items-center gap-2 font-display text-xl font-semibold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-500 text-white">
              <Icon name="GraduationCap" className="h-5 w-5" />
            </span>
            {site.name}
          </a>
          <nav className="hidden gap-6 font-semibold text-indigo-900/70 sm:flex">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="hover:text-violet-600">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-pink-500 px-4 py-2 text-sm font-bold text-white shadow-md shadow-pink-500/30 hover:bg-pink-600"
          >
            Say hi 👋
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative">
          <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 top-40 h-72 w-72 rounded-full bg-pink-200/60 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-bold text-amber-800">
                <Icon name="Sparkles" className="h-4 w-4" /> {site.role} · {site.location}
              </span>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Hi, I&apos;m <span className="text-violet-600">{site.name}</span>.{" "}
                <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                  {site.headline}
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-indigo-900/70">{site.tagline}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 font-bold text-white shadow-lg shadow-violet-600/30 transition hover:-translate-y-0.5 hover:bg-violet-700"
                >
                  <Icon name="Rocket" className="h-5 w-5" /> See my projects
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-violet-700 ring-2 ring-violet-200 transition hover:ring-violet-400"
                >
                  <Icon name="Mail" className="h-5 w-5" /> Get in touch
                </a>
              </div>
            </div>
            <HeroArt photo={photo} />
          </div>

          <div className="relative mx-auto grid max-w-4xl gap-4 px-4 pb-16 sm:grid-cols-3 sm:px-6">
            {site.stats.map((s, i) => {
              const c = palette[(["sky", "pink", "emerald"] as Color[])[i % 3]];
              return (
                <div key={s.label} className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${c.soft} ${c.text}`}>
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-display text-2xl font-semibold">{s.value}</p>
                    <p className="text-sm font-semibold text-indigo-900/60">{s.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-20 bg-violet-600 py-20 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-bold">
                  <Icon name="Heart" className="h-4 w-4" /> About me
                </span>
                <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">Where teaching meets tech</h2>
                <div className="mt-6 space-y-4 text-lg text-violet-100">
                  {site.about.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {site.skills.map((s) => {
                  const c = palette[s.color as Color];
                  return (
                    <li key={s.name} className="flex items-center gap-3 rounded-2xl bg-white p-4 text-indigo-950 shadow-lg">
                      <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white ${c.tile}`}>
                        <Icon name={s.icon} className="h-5 w-5" />
                      </span>
                      <span className="font-bold">{s.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
          <Heading icon="Lightbulb" kicker="Featured work" title="Projects that make learning fun" />
          <div className="grid gap-6 sm:grid-cols-2">
            {site.projects.map((p) => {
              const c = palette[p.color as Color];
              return (
                <a
                  key={p.title}
                  href={p.href}
                  className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className={`relative flex h-40 items-center justify-center ${c.soft}`}>
                    <div className={`absolute -right-6 -top-6 h-24 w-24 rounded-full ${c.tile} opacity-20`} />
                    <div className={`absolute -bottom-8 left-8 h-20 w-20 rounded-full ${c.tile} opacity-20`} />
                    <span className={`grid h-20 w-20 place-items-center rounded-3xl text-white shadow-lg ${c.tile} transition group-hover:rotate-6 group-hover:scale-110`}>
                      <Icon name={p.icon} className="h-10 w-10" />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="flex items-center gap-2 font-display text-xl font-semibold">
                      {p.title}
                      <Icon name="ArrowUpRight" className={`h-5 w-5 ${c.text} transition group-hover:translate-x-1`} />
                    </h3>
                    <p className="mt-2 text-indigo-900/70">{p.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <li key={t} className={`rounded-full px-3 py-1 text-xs font-bold ${c.soft} ${c.text}`}>
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Journey */}
        <section id="journey" className="scroll-mt-20 bg-sky-50 py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <Heading icon="Map" kicker="My journey" title="From the classroom to code" />
            <ol className="relative space-y-6 border-l-4 border-dashed border-sky-200 pl-8">
              {site.experience.map((e, i) => {
                const c = palette[(["violet", "pink", "amber"] as Color[])[i % 3]];
                return (
                  <li key={e.period + e.org} className="relative">
                    <span className={`absolute -left-[3.25rem] grid h-10 w-10 place-items-center rounded-full text-white ring-4 ring-sky-50 ${c.tile}`}>
                      <Icon name={e.icon} className="h-5 w-5" />
                    </span>
                    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                      <p className={`text-sm font-bold ${c.text}`}>{e.period}</p>
                      <h3 className="mt-1 font-display text-lg font-semibold">
                        {e.title} <span className="font-sans font-semibold text-indigo-900/50">· {e.org}</span>
                      </h3>
                      <p className="mt-1 text-indigo-900/70">{e.note}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-pink-500 via-orange-400 to-amber-400 px-6 py-14 text-center text-white sm:px-12">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/15" />
            <div className="absolute -bottom-16 -right-10 h-56 w-56 rounded-full bg-white/15" />
            <Icon name="MessageCircleHeart" className="relative mx-auto h-12 w-12" />
            <h2 className="relative mt-4 font-display text-3xl font-semibold sm:text-4xl">Let&apos;s build something kids will love</h2>
            <p className="relative mx-auto mt-3 max-w-lg text-lg text-white/90">
              Have a learning idea, a school project or a role in mind? I&apos;d love to hear about it.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-pink-600 shadow-lg transition hover:-translate-y-0.5"
            >
              <Icon name="Mail" className="h-5 w-5" /> {site.email}
            </a>
            <ul className="relative mt-6 flex justify-center gap-3">
              {site.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={l.label}
                    className="grid h-11 w-11 place-items-center rounded-full bg-white/20 transition hover:bg-white/35"
                  >
                    <Icon name={l.icon} className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="pb-10 text-center text-sm font-semibold text-indigo-900/50">
        Made with <span className="text-pink-500">♥</span> for learners everywhere · © {new Date().getFullYear()} {site.name}
      </footer>
    </div>
  );
}
