import Image from "next/image";

const docsBase = "https://github.com/raym33/pymeclaw/blob/main";
const contactMail = "pymeclaw@gmail.com";

const nav = {
  features: "Features",
  sectors: "Sectors",
  flow: "Flow",
  docs: "Guides",
  contact: "Contact",
};

const heroBadge = "Private installation for real businesses";
const heroTitle = "Less admin. More business.";
const heroCopy =
  "Pymeclaw helps sole traders and small offices organize quotes, invoices, appointments, customer follow-up, and repetitive admin work without turning the business into another stack of tools.";
const heroPrimary = "View installation";
const heroSecondary = "Request private installation";

const trustSignals = [
  "Stays on your Mac",
  "No mandatory cloud",
  "No monthly API fee",
  "Built for sole traders and small offices",
];

const officeTitle = "More order. Less mental drag.";

const metrics = [
  { value: "Local", label: "Runs on the business Mac" },
  { value: "1 routine", label: "Installation, use, and daily flow connected" },
  { value: "0 cloud", label: "No dependency on a cloud platform" },
];

const miniFlowTitle = "A typical day with Pymeclaw";
const miniFlowChip = "Practical local workflow";
const miniFlow = [
  "08:30 — You review appointments, follow-ups, and unpaid items.",
  "10:15 — You prepare a new quote without losing customer context.",
  "13:40 — You leave the invoice ready after finishing the job.",
  "18:10 — You close the day with a clear view of tomorrow.",
];

const featuresIntro = {
  eyebrow: "Features",
  title: "Built for small businesses that lose time to repetitive admin.",
  copy: "Pymeclaw is not positioned as another platform your team has to learn. It is positioned as a local assistant for businesses already working under time pressure and carrying too many small administrative tasks.",
};

const features = [
  {
    title: "Quotes and invoices without context switching",
    copy: "You describe the work and Pymeclaw helps leave the document ready without bouncing between Word, Excel, email, and WhatsApp.",
    tone: "amber",
  },
  {
    title: "Appointments and reminders with less chaos",
    copy: "Daily schedules, reminders, and follow-up tasks stop depending on memory or scattered messages.",
    tone: "teal",
  },
  {
    title: "Customer history that does not get lost",
    copy: "It keeps the business context on the same machine where you work: customers, notes, jobs, and next steps.",
    tone: "slate",
  },
  {
    title: "Outstanding payments that stay visible",
    copy: "It helps you see what is still pending and move collections forward without rewriting every reminder from scratch.",
    tone: "amber",
  },
  {
    title: "A cleaner daily routine",
    copy: "It summarizes the day, orders repetitive tasks, and reduces the mental load of the admin side of the business.",
    tone: "teal",
  },
  {
    title: "Privacy and control",
    copy: "Pymeclaw is designed for businesses that want a local tool, more control, and less dependence on external services.",
    tone: "slate",
  },
];

const sectorsIntro = {
  eyebrow: "Sectors",
  title: "A better fit for businesses where time, follow-up, and memory matter.",
};

const sectors = [
  {
    name: "Trades and technical services",
    copy: "Plumbers, electricians, maintenance, reform work, and professionals living between callouts, quotes, job notes, and collections.",
  },
  {
    name: "Clinics and appointment-led businesses",
    copy: "Physio, beauty, and other businesses where schedule discipline and customer follow-up make the difference.",
  },
  {
    name: "Small offices and desk-side teams",
    copy: "Small teams that need customer memory, administrative order, and less friction in daily operations.",
  },
  {
    name: "Sole traders with too many small tasks",
    copy: "Businesses where the owner does everything and needs time back without setting up a complex system or another subscription.",
  },
];

const flowIntro = {
  eyebrow: "Typical flow",
  title: "What Pymeclaw does for a sole trader across the day.",
  copy: "The point is not to make the owner learn a complex tool. The point is to let Pymeclaw support the normal rhythm of the business and remove friction where time is usually lost.",
};

const dayFlow = [
  {
    time: "08:30",
    title: "You start the day with context",
    copy: "Pymeclaw helps you review appointments, follow-ups, and what is still unpaid before the day gets noisy.",
  },
  {
    time: "10:15",
    title: "A new client or incident comes in",
    copy: "You ask it to prepare a quote, capture the customer details, or log the work so nothing gets lost.",
  },
  {
    time: "13:40",
    title: "You finish a job",
    copy: "Based on the work just completed, Pymeclaw leaves the invoice, customer record, and next step ready to move.",
  },
  {
    time: "18:10",
    title: "You close the day without starting from zero again",
    copy: "You can review what is still unpaid, what is happening tomorrow, and which customers need a reply or reminder.",
  },
];

const setupIntro = {
  eyebrow: "Deployment",
  title: "One installation. One Mac. One calmer office routine.",
};

const setupFlow = [
  {
    step: "01",
    title: "Installed on the business Mac",
    copy: "Pymeclaw is prepared for the specific business and left running on the main machine used for work.",
  },
  {
    step: "02",
    title: "Used in plain language",
    copy: "The owner asks for what is needed naturally: quote, invoice, follow-up, appointment, or daily summary.",
  },
  {
    step: "03",
    title: "The office runs with less friction",
    copy: "The goal is not to impress. The goal is to save real time every week and remove admin drag from the business.",
  },
];

const docsIntro = {
  eyebrow: "Guides",
  title: "Public documentation to make installation and daily use easy to understand.",
  copy: "The website explains the product promise. The public repository explains the practical side: installation, daily use, and real examples.",
};

const docs = [
  {
    title: "Installation guide",
    href: `${docsBase}/docs/INSTALLATION.md`,
    copy: "What needs to happen to install Pymeclaw correctly on a Mac and leave it ready for work.",
  },
  {
    title: "User guide",
    href: `${docsBase}/docs/USER-GUIDE.md`,
    copy: "The practical explanation of how Pymeclaw is used day to day once it is installed.",
  },
  {
    title: "Quick reference",
    href: `${docsBase}/docs/QUICK-REFERENCE.md`,
    copy: "A short reference for common tasks when you want to move straight to what matters.",
  },
  {
    title: "Real examples",
    href: `${docsBase}/examples/README.md`,
    copy: "Use cases to understand how the product fits real small-business situations.",
  },
];

const cta = {
  eyebrow: "Contact",
  title: "If you want Pymeclaw in a real business, start with the guide or request a private installation.",
  copy: "The public documentation shows the product clearly. The installation itself is prepared privately for each business.",
  primary: "Open public documentation",
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[var(--page)] text-[var(--ink)]">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-5 pb-16 pt-5 sm:px-8 lg:px-12">
        {/* ── Nav ── */}
        <header className="sticky top-4 z-20">
          <div className="surface-card flex items-center justify-between gap-4 rounded-full px-5 py-3 backdrop-blur-xl">
            <a className="flex items-center gap-3" href="#top">
              <Image
                src="/pymeclaw-logo.jpeg"
                alt="Pymeclaw logo"
                width={44}
                height={44}
                className="h-11 w-11 rounded-2xl border border-white/70 object-cover shadow-[0_10px_30px_rgba(13,24,45,.12)]"
                priority
              />
              <div>
                <div className="text-sm font-semibold tracking-[0.24em] text-[var(--muted)] uppercase">
                  Pymeclaw
                </div>
                <div className="text-xs text-[var(--soft)]">Local assistant for small offices</div>
              </div>
            </a>

            <nav className="hidden items-center gap-6 text-sm text-[var(--soft)] md:flex">
              <a className="transition hover:text-[var(--ink)]" href="#features">{nav.features}</a>
              <a className="transition hover:text-[var(--ink)]" href="#sectors">{nav.sectors}</a>
              <a className="transition hover:text-[var(--ink)]" href="#flow">{nav.flow}</a>
              <a className="transition hover:text-[var(--ink)]" href="#guides">{nav.docs}</a>
              <a className="transition hover:text-[var(--ink)]" href="#contact">{nav.contact}</a>
            </nav>
          </div>
        </header>

        {/* ── Hero ── */}
        <section
          id="top"
          className="grid items-start gap-10 pt-6 lg:grid-cols-[1.18fr_.82fr] lg:pt-10"
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--line)] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)] shadow-[0_16px_40px_rgba(13,24,45,.06)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_0_8px_rgba(49,181,152,.12)]" />
              {heroBadge}
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-5xl leading-[0.9] font-semibold tracking-[-0.06em] text-[var(--ink)] sm:text-6xl lg:text-7xl">
                {heroTitle.split(". ").map((part, index, all) => (
                  <span key={part}>
                    {part}
                    {index < all.length - 1 ? ". " : ""}
                    {index < all.length - 1 ? <br /> : null}
                  </span>
                ))}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--soft)] sm:text-xl">
                {heroCopy}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                className="cta-button"
                href={`${docsBase}/docs/INSTALLATION.md`}
                target="_blank"
                rel="noreferrer"
              >
                {heroPrimary}
              </a>
              <a
                className="ghost-button"
                href={`mailto:${contactMail}?subject=Pymeclaw`}
              >
                {heroSecondary}
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {trustSignals.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--line)] bg-white/72 px-4 py-3 text-sm text-[var(--soft)] shadow-[0_16px_30px_rgba(13,24,45,.05)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="hero-board">
            <div className="surface-card relative overflow-hidden rounded-[2rem] p-6">
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />
              <div className="flex items-center gap-4">
                <Image
                  src="/pymeclaw-logo.jpeg"
                  alt="Pymeclaw"
                  width={76}
                  height={76}
                  className="h-19 w-19 rounded-[1.5rem] border border-white/80 object-cover shadow-[0_18px_40px_rgba(13,24,45,.14)]"
                />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
                    Daily office
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                    {officeTitle}
                  </h2>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div key={metric.label} className="metric-card">
                    <div className="text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                      {metric.value}
                    </div>
                    <div className="mt-2 text-sm leading-6 text-[var(--soft)]">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.75rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,.9),rgba(247,243,236,.95))] p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                    {miniFlowTitle}
                  </p>
                  <span className="rounded-full bg-[var(--chip)] px-3 py-1 text-xs font-medium text-[var(--ink)]">
                    {miniFlowChip}
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  {miniFlow.map((line) => (
                    <div
                      key={line}
                      className="flex items-start gap-3 rounded-2xl bg-white/82 px-4 py-3 shadow-[0_12px_24px_rgba(13,24,45,.05)]"
                    >
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      <p className="text-sm leading-6 text-[var(--soft)]">{line}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section id="features" className="section-shell">
          <div className="section-intro">
            <span className="section-eyebrow">{featuresIntro.eyebrow}</span>
            <h2 className="section-title">{featuresIntro.title}</h2>
            <p className="section-copy">{featuresIntro.copy}</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className={`feature-card feature-${feature.tone}`}
              >
                <span className="feature-index">Feature</span>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-copy">{feature.copy}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Sectors ── */}
        <section id="sectors" className="section-shell">
          <div className="section-intro">
            <span className="section-eyebrow">{sectorsIntro.eyebrow}</span>
            <h2 className="section-title">{sectorsIntro.title}</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {sectors.map((sector) => (
              <article
                key={sector.name}
                className="surface-card rounded-[1.75rem] p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                  Sector
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                  {sector.name}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-7 text-[var(--soft)]">
                  {sector.copy}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Day flow ── */}
        <section id="flow" className="section-shell">
          <div className="section-intro">
            <span className="section-eyebrow">{flowIntro.eyebrow}</span>
            <h2 className="section-title">{flowIntro.title}</h2>
            <p className="section-copy">{flowIntro.copy}</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {dayFlow.map((item) => (
              <article key={`${item.time}-${item.title}`} className="flow-card">
                <div className="flow-time">{item.time}</div>
                <div className="flow-content">
                  <h3 className="flow-title">{item.title}</h3>
                  <p className="flow-copy">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Setup ── */}
        <section className="section-shell workflow-shell">
          <div className="section-intro">
            <span className="section-eyebrow">{setupIntro.eyebrow}</span>
            <h2 className="section-title">{setupIntro.title}</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {setupFlow.map((item) => (
              <article key={item.step} className="workflow-card">
                <div className="workflow-step">{item.step}</div>
                <h3 className="workflow-title">{item.title}</h3>
                <p className="workflow-copy">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Docs ── */}
        <section id="guides" className="section-shell">
          <div className="section-intro">
            <span className="section-eyebrow">{docsIntro.eyebrow}</span>
            <h2 className="section-title">{docsIntro.title}</h2>
            <p className="section-copy">{docsIntro.copy}</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {docs.map((doc) => (
              <a
                key={doc.title}
                href={doc.href}
                target="_blank"
                rel="noreferrer"
                className="doc-card"
              >
                <div>
                  <span className="section-eyebrow">Open guide</span>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                    {doc.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-7 text-[var(--soft)]">
                    {doc.copy}
                  </p>
                </div>
                <span className="doc-arrow">View</span>
              </a>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="contact" className="cta-shell">
          <div className="max-w-3xl">
            <span className="section-eyebrow">{cta.eyebrow}</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              {cta.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
              {cta.copy}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              className="cta-button cta-button-light"
              href="https://github.com/raym33/pymeclaw"
              target="_blank"
              rel="noreferrer"
            >
              {cta.primary}
            </a>
            <a
              className="ghost-button ghost-button-dark"
              href={`mailto:${contactMail}?subject=Pymeclaw`}
            >
              {contactMail}
            </a>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="border-t border-[var(--line)] pt-8 text-sm text-[var(--soft)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/pymeclaw-logo.jpeg"
                alt="Pymeclaw"
                width={34}
                height={34}
                className="h-8 w-8 rounded-xl object-cover"
              />
              <span>Pymeclaw product website</span>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a href={`${docsBase}/docs/INSTALLATION.md`} target="_blank" rel="noreferrer">
                Installation
              </a>
              <a href={`${docsBase}/docs/USER-GUIDE.md`} target="_blank" rel="noreferrer">
                Daily use
              </a>
              <a href={`mailto:${contactMail}`}>{contactMail}</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
