import { site } from "@/content/site";

const nav = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line py-16 md:grid md:grid-cols-[180px_1fr] md:gap-10">
      <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-muted md:mb-0 md:pt-1">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6">
      <header className="sticky top-0 z-10 -mx-4 flex items-center justify-between bg-background/80 px-4 py-4 backdrop-blur sm:-mx-6 sm:px-6">
        <a href="#" className="font-semibold tracking-tight">
          {site.name}
        </a>
        <nav className="flex gap-4 text-sm text-muted sm:gap-6">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="py-20 md:py-28">
          <p className="mb-4 font-mono text-sm text-accent">
            {site.role} · {site.location}
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Hi, I&apos;m {site.name}.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">{site.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90"
            >
              See my work
            </a>
            <a
              href={`mailto:${site.email}`}
              className="rounded-full border border-line px-5 py-2.5 text-sm font-medium hover:border-foreground"
            >
              Get in touch
            </a>
          </div>
        </section>

        <Section id="about" title="About">
          <div className="space-y-4 text-lg leading-relaxed">
            {site.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {site.skills.map((s) => (
              <li key={s} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                {s}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-4 sm:grid-cols-2">
            {site.projects.map((p) => (
              <a
                key={p.title}
                href={p.href}
                className="group rounded-2xl border border-line bg-card p-6 transition hover:-translate-y-0.5 hover:border-accent"
              >
                <h3 className="font-semibold">
                  {p.title}
                  <span className="ml-1 inline-block text-accent transition group-hover:translate-x-1">→</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="font-mono text-xs text-accent">
                      #{t}
                    </li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="space-y-8">
            {site.experience.map((e) => (
              <li key={e.period + e.org} className="sm:grid sm:grid-cols-[140px_1fr] sm:gap-6">
                <p className="font-mono text-sm text-muted">{e.period}</p>
                <div>
                  <h3 className="font-semibold">
                    {e.title} <span className="font-normal text-muted">· {e.org}</span>
                  </h3>
                  <p className="mt-1 text-muted">{e.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="contact" title="Contact">
          <p className="text-2xl font-semibold tracking-tight sm:text-3xl">Let&apos;s work together.</p>
          <a href={`mailto:${site.email}`} className="mt-4 inline-block text-lg text-accent underline-offset-4 hover:underline">
            {site.email}
          </a>
          <ul className="mt-8 flex gap-6 text-sm text-muted">
            {site.links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-foreground" target="_blank" rel="noreferrer">
                  {l.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </main>

      <footer className="border-t border-line py-8 text-sm text-muted">
        © {new Date().getFullYear()} {site.name}
      </footer>
    </div>
  );
}
