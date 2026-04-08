import Image from "next/image";

const docsBase = "https://github.com/raym33/pymeclaw/blob/main";

const trustSignals = [
  "Runs on your own Mac",
  "No cloud dependency",
  "No monthly API fee",
  "Built for small Spanish businesses",
];

const features = [
  {
    title: "Invoices and quotes without context switching",
    copy:
      "Turn plain-language requests into ready-to-send business documents without bouncing between Word, Excel, and WhatsApp.",
    tone: "amber",
  },
  {
    title: "Appointments and reminders",
    copy:
      "Keep daily schedules moving with appointment tracking, reminder flows, and less last-minute admin.",
    tone: "teal",
  },
  {
    title: "Customer memory that stays local",
    copy:
      "Track customer history, follow-up tasks, and routine requests on the same Mac where the business already works.",
    tone: "slate",
  },
  {
    title: "Payment follow-up with less friction",
    copy:
      "See what is still unpaid and keep collections moving without writing the same reminder messages again and again.",
    tone: "amber",
  },
  {
    title: "A calmer front desk",
    copy:
      "Daily office routines, summary views, and reminders are easier to run when the assistant is built around the business day.",
    tone: "teal",
  },
  {
    title: "Private by default",
    copy:
      "Pymeclaw is positioned for businesses that want control, local execution, and fewer external services touching daily operations.",
    tone: "slate",
  },
];

const sectors = [
  {
    name: "Trades and repair work",
    copy:
      "Plumbers, electricians, maintenance and reform work that need fast quoting, invoicing, and payment chasing.",
  },
  {
    name: "Clinics and appointments",
    copy:
      "Physio, beauty, and other appointment-led businesses that need customer flow and reminder discipline.",
  },
  {
    name: "Small offices",
    copy:
      "Small teams handling customer history, daily admin, and repetitive back-office work from one main Mac.",
  },
  {
    name: "Solo professionals",
    copy:
      "Independent operators who need an extra pair of hands without adding another cloud subscription.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Install it on the business Mac",
    copy:
      "Pymeclaw is installed privately on the Mac used by the business. The public documentation explains the setup and the day-to-day flow.",
  },
  {
    step: "02",
    title: "Use natural language for routine work",
    copy:
      "The operator asks for help in plain language: create an invoice, prepare a quote, check a follow-up, review the day.",
  },
  {
    step: "03",
    title: "Save time every week",
    copy:
      "The goal is simple: reduce admin time, reduce friction, and keep more attention on customers and paid work.",
  },
];

const docs = [
  {
    title: "Installation Guide",
    href: `${docsBase}/docs/INSTALLATION.md`,
    copy:
      "What has to happen on the Mac so Pymeclaw is installed correctly and starts from a clean setup.",
  },
  {
    title: "User Guide",
    href: `${docsBase}/docs/USER-GUIDE.md`,
    copy:
      "The main operational guide for using Pymeclaw properly once it is already installed.",
  },
  {
    title: "Quick Reference",
    href: `${docsBase}/docs/QUICK-REFERENCE.md`,
    copy:
      "A short daily reference for business owners who want the fastest path to common tasks.",
  },
  {
    title: "Usage Examples",
    href: `${docsBase}/examples/README.md`,
    copy:
      "See how the product fits real small-business situations before deployment.",
  },
];

const metrics = [
  { value: "Local", label: "Runs on the business Mac" },
  { value: "1 flow", label: "Installation, use, and daily routine" },
  { value: "0 cloud", label: "No cloud-first product dependency" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[var(--page)] text-[var(--ink)]">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-5 pb-16 pt-5 sm:px-8 lg:px-12">
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
                <div className="text-xs text-[var(--soft)]">
                  Local office assistant for small business
                </div>
              </div>
            </a>

            <nav className="hidden items-center gap-6 text-sm text-[var(--soft)] md:flex">
              <a className="transition hover:text-[var(--ink)]" href="#features">
                Features
              </a>
              <a className="transition hover:text-[var(--ink)]" href="#sectors">
                Sectors
              </a>
              <a className="transition hover:text-[var(--ink)]" href="#docs">
                Docs
              </a>
              <a className="transition hover:text-[var(--ink)]" href="#contact">
                Contact
              </a>
            </nav>
          </div>
        </header>

        <section
          id="top"
          className="grid items-start gap-10 pt-6 lg:grid-cols-[1.2fr_.8fr] lg:pt-10"
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--line)] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)] shadow-[0_16px_40px_rgba(13,24,45,.06)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_0_8px_rgba(49,181,152,.12)]" />
              Private installation for real businesses
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-5xl leading-[0.93] font-semibold tracking-[-0.05em] text-[var(--ink)] sm:text-6xl lg:text-7xl">
                The office assistant that stays on your Mac.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--soft)] sm:text-xl">
                Pymeclaw helps small Spanish businesses handle invoices,
                appointments, customer follow-up, and routine admin without
                turning the office into another cloud stack.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                className="cta-button"
                href={`${docsBase}/docs/INSTALLATION.md`}
                target="_blank"
                rel="noreferrer"
              >
                Read the installation guide
              </a>
              <a
                className="ghost-button"
                href="mailto:learntouseai@gmail.com?subject=Pymeclaw%20installation"
              >
                Request a private installation
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
                    Daily office flow
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                    Less admin drag. More working time.
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

              <div className="mt-6 rounded-[1.75rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,.88),rgba(244,247,253,.9))] p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                    Typical morning
                  </p>
                  <span className="rounded-full bg-[var(--chip)] px-3 py-1 text-xs font-medium text-[var(--ink)]">
                    Quiet, local workflow
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    "08:45 Create a quote for a new customer request.",
                    "09:20 Check today’s appointments and reminders.",
                    "11:00 Review unpaid invoices and next follow-up.",
                    "13:30 Keep a clean customer history on one machine.",
                  ].map((line) => (
                    <div
                      key={line}
                      className="flex items-start gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-[0_12px_24px_rgba(13,24,45,.05)]"
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

        <section className="section-shell">
          <div className="section-intro">
            <span className="section-eyebrow">Why it matters</span>
            <h2 className="section-title">
              Built for small offices that lose time to repetitive admin.
            </h2>
            <p className="section-copy">
              Pymeclaw is not positioned as another dashboard for teams to
              learn. It is positioned as a local office assistant for businesses
              that already work from one main Mac and need routine work to flow
              with less friction.
            </p>
          </div>

          <div id="features" className="grid gap-5 lg:grid-cols-3">
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

        <section id="sectors" className="section-shell">
          <div className="section-intro">
            <span className="section-eyebrow">Sectors</span>
            <h2 className="section-title">
              A better fit for businesses that run on speed, memory, and follow-up.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {sectors.map((sector) => (
              <article key={sector.name} className="surface-card rounded-[1.75rem] p-6">
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

        <section className="section-shell workflow-shell">
          <div className="section-intro">
            <span className="section-eyebrow">How it works</span>
            <h2 className="section-title">
              One installation, one Mac, one calmer routine.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {workflow.map((item) => (
              <article key={item.step} className="workflow-card">
                <div className="workflow-step">{item.step}</div>
                <h3 className="workflow-title">{item.title}</h3>
                <p className="workflow-copy">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="docs" className="section-shell">
          <div className="section-intro">
            <span className="section-eyebrow">Documentation</span>
            <h2 className="section-title">
              The public repo is there to make installation and daily use clear.
            </h2>
            <p className="section-copy">
              The product website explains the promise. The public repository
              explains the practical side: installation, use, and examples.
            </p>
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
                  <span className="section-eyebrow">Open document</span>
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

        <section id="contact" className="cta-shell">
          <div className="max-w-3xl">
            <span className="section-eyebrow">Get started</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              If you want Pymeclaw in a real business, start with the docs or ask
              for a private installation.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
              The public repository explains the product clearly. The actual
              installation is prepared privately for each business.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              className="cta-button cta-button-light"
              href="https://github.com/raym33/pymeclaw"
              target="_blank"
              rel="noreferrer"
            >
              Open the public repo
            </a>
            <a
              className="ghost-button ghost-button-dark"
              href="mailto:learntouseai@gmail.com?subject=Pymeclaw%20product%20website"
            >
              Contact Ramon Guillamon
            </a>
          </div>
        </section>

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
              <span>Pymeclaw product site for Vercel</span>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a href={`${docsBase}/docs/INSTALLATION.md`} target="_blank" rel="noreferrer">
                Installation
              </a>
              <a href={`${docsBase}/docs/USER-GUIDE.md`} target="_blank" rel="noreferrer">
                User Guide
              </a>
              <a href="mailto:learntouseai@gmail.com">learntouseai@gmail.com</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
