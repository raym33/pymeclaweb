"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const docsBase = "https://github.com/raym33/pymeclaw/blob/main";
const contactMail = "pymeclaw@gmail.com";

const content = {
  es: {
    brandLine: "Asistente local para la oficina pequeña",
    nav: {
      features: "Ventajas",
      sectors: "Sectores",
      flow: "Flujo",
      docs: "Guías",
      contact: "Contacto",
    },
    heroBadge: "Instalación privada para negocios reales",
    heroTitle: "Menos administración. Más negocio.",
    heroCopy:
      "Pymeclaw ayuda al autónomo y a la pequeña oficina a ordenar presupuestos, facturas, citas, seguimiento de clientes y tareas repetitivas sin convertir el negocio en otra pila de herramientas.",
    heroPrimary: "Ver instalación",
    heroSecondary: "Pedir instalación privada",
    trustSignals: [
      "Se queda en tu Mac",
      "Sin nube obligatoria",
      "Sin cuota mensual de API",
      "Pensado para autónomos y pequeñas oficinas",
    ],
    officeLabel: "Oficina diaria",
    officeTitle: "Más orden. Menos desgaste mental.",
    metrics: [
      { value: "Local", label: "Funciona en el Mac del negocio" },
      { value: "1 rutina", label: "Instalación, uso y operativa conectados" },
      { value: "0 nube", label: "Sin depender de una plataforma cloud" },
    ],
    miniFlowTitle: "Un día típico con Pymeclaw",
    miniFlowChip: "Flujo local y práctico",
    miniFlow: [
      "08:30 Revisas agenda, seguimientos y cobros pendientes.",
      "10:15 Preparas un presupuesto nuevo sin perder el contexto del cliente.",
      "13:40 Dejas encaminada la factura al terminar el trabajo.",
      "18:10 Cierras el día con una visión clara de mañana.",
    ],
    featuresIntro: {
      eyebrow: "Ventajas",
      title:
        "Pensado para negocios pequeños que pierden tiempo en lo repetitivo.",
      copy:
        "Pymeclaw no está planteado como otra plataforma que hay que aprender. Está planteado como un asistente local para negocios que ya trabajan con presión, con poco tiempo y con demasiadas tareas administrativas pequeñas.",
    },
    features: [
      {
        title: "Presupuestos y facturas sin cambiar de contexto",
        copy:
          "Le dices lo que has hecho y Pymeclaw te ayuda a dejar listo el documento sin ir saltando entre Word, Excel, correo y WhatsApp.",
        tone: "amber",
      },
      {
        title: "Citas y recordatorios con menos caos",
        copy:
          "La agenda diaria, los recordatorios y las tareas de seguimiento dejan de depender de la memoria o de mensajes sueltos.",
        tone: "teal",
      },
      {
        title: "Historial de clientes que no se pierde",
        copy:
          "Mantiene el contexto del negocio en la misma máquina donde trabajas: clientes, notas, trabajos y próximos pasos.",
        tone: "slate",
      },
      {
        title: "Cobros pendientes más visibles",
        copy:
          "Te ayuda a ver qué sigue pendiente y a mover el seguimiento sin tener que redactar cada mensaje desde cero.",
        tone: "amber",
      },
      {
        title: "Rutina diaria más limpia",
        copy:
          "Resume lo importante del día, ordena tareas repetitivas y reduce el desgaste mental de la parte administrativa.",
        tone: "teal",
      },
      {
        title: "Privacidad y control",
        copy:
          "Pymeclaw está planteado para negocios que quieren una herramienta local, más control y menos dependencia de servicios externos.",
        tone: "slate",
      },
    ],
    featureLabel: "Ventaja",
    sectorsIntro: {
      eyebrow: "Sectores",
      title:
        "Encaja mejor en negocios donde el tiempo, el seguimiento y la memoria importan.",
    },
    sectorLabel: "Sector",
    sectors: [
      {
        name: "Oficios y servicios técnicos",
        copy:
          "Fontaneros, electricistas, mantenimiento, reformas y profesionales que viven entre avisos, presupuestos, partes y cobros.",
      },
      {
        name: "Clínicas y negocios con cita",
        copy:
          "Fisioterapia, estética y otros negocios donde la organización de la agenda y el seguimiento del cliente marcan la diferencia.",
      },
      {
        name: "Despachos y oficinas pequeñas",
        copy:
          "Equipos reducidos que necesitan memoria de cliente, orden administrativo y menos fricción en el trabajo diario.",
      },
      {
        name: "Autónomos con muchas tareas pequeñas",
        copy:
          "Negocios donde el propietario hace de todo y necesita recuperar tiempo sin montar un sistema complejo ni otra suscripción.",
      },
    ],
    flowIntro: {
      eyebrow: "Flujo típico",
      title:
        "Qué hace Pymeclaw por un autónomo a lo largo del día.",
      copy:
        "La idea no es que el autónomo aprenda una herramienta compleja. La idea es que Pymeclaw acompañe el ritmo normal del negocio y quite carga en los puntos donde más se pierde tiempo.",
    },
    dayFlow: [
      {
        time: "08:30",
        title: "Empiezas el día con contexto",
        copy:
          "Pymeclaw te ayuda a revisar qué citas tienes, qué seguimientos tocan y qué cobros siguen pendientes.",
      },
      {
        time: "10:15",
        title: "Entra un cliente o una incidencia nueva",
        copy:
          "Le pides que te prepare un presupuesto, que recoja los datos del cliente o que deje anotado el trabajo para no perderlo.",
      },
      {
        time: "13:40",
        title: "Terminas un trabajo",
        copy:
          "A partir de lo que acabas de hacer, Pymeclaw te deja encaminada la factura, el registro del cliente y el siguiente paso.",
      },
      {
        time: "18:10",
        title: "Cierras el día sin volver a empezar de cero",
        copy:
          "Puedes revisar qué queda sin cobrar, qué hay mañana y qué clientes necesitan una respuesta o recordatorio.",
      },
    ],
    setupIntro: {
      eyebrow: "Cómo se implanta",
      title:
        "Una instalación. Un Mac. Una rutina de oficina más tranquila.",
    },
    setupFlow: [
      {
        step: "01",
        title: "Se instala en el Mac del negocio",
        copy:
          "Pymeclaw se prepara para el negocio concreto y se deja funcionando en la máquina principal de trabajo.",
      },
      {
        step: "02",
        title: "Se usa hablando claro",
        copy:
          "El autónomo pide lo que necesita en lenguaje natural: presupuesto, factura, seguimiento, cita o resumen del día.",
      },
      {
        step: "03",
        title: "La oficina corre con menos fricción",
        copy:
          "El objetivo no es impresionar. Es ahorrar tiempo real cada semana y quitar carga administrativa del negocio.",
      },
    ],
    docsIntro: {
      eyebrow: "Guías",
      title:
        "La documentación pública está para que la instalación y el uso se entiendan rápido.",
      copy:
        "La web explica la propuesta. El repositorio público explica la parte práctica: instalación, uso diario y ejemplos reales.",
    },
    docsCta: "Abrir guía",
    docsArrow: "Ver",
    docs: [
      {
        title: "Guía de instalación",
        href: `${docsBase}/docs/INSTALLATION.md`,
        copy:
          "Qué hay que hacer para instalar Pymeclaw correctamente en un Mac y dejarlo listo para trabajar.",
      },
      {
        title: "Guía de uso",
        href: `${docsBase}/docs/USER-GUIDE.md`,
        copy:
          "La explicación práctica de cómo se usa Pymeclaw en el día a día una vez está instalado.",
      },
      {
        title: "Hoja rápida",
        href: `${docsBase}/docs/QUICK-REFERENCE.md`,
        copy:
          "Una referencia breve para tareas habituales cuando quieres ir directo a lo importante.",
      },
      {
        title: "Ejemplos reales",
        href: `${docsBase}/examples/README.md`,
        copy:
          "Casos de uso para entender cómo encaja el producto en negocios pequeños de verdad.",
      },
    ],
    cta: {
      eyebrow: "Contacto",
      title:
        "Si quieres Pymeclaw en un negocio real, empieza por la guía o pide una instalación privada.",
      copy:
        "La documentación pública te enseña el producto con claridad. La instalación se prepara de forma privada para cada negocio.",
      primary: "Abrir documentación pública",
      secondary: contactMail,
    },
    footer: {
      label: "Web de producto de Pymeclaw",
      install: "Instalación",
      use: "Uso diario",
    },
  },
  en: {
    brandLine: "Local assistant for small offices",
    nav: {
      features: "Features",
      sectors: "Sectors",
      flow: "Flow",
      docs: "Guides",
      contact: "Contact",
    },
    heroBadge: "Private installation for real businesses",
    heroTitle: "Less admin. More business.",
    heroCopy:
      "Pymeclaw helps sole traders and small offices organize quotes, invoices, appointments, customer follow-up, and repetitive admin work without turning the business into another stack of tools.",
    heroPrimary: "View installation",
    heroSecondary: "Request private installation",
    trustSignals: [
      "Stays on your Mac",
      "No mandatory cloud",
      "No monthly API fee",
      "Built for sole traders and small offices",
    ],
    officeLabel: "Daily office",
    officeTitle: "More order. Less mental drag.",
    metrics: [
      { value: "Local", label: "Runs on the business Mac" },
      { value: "1 routine", label: "Installation, use, and daily flow connected" },
      { value: "0 cloud", label: "No dependency on a cloud platform" },
    ],
    miniFlowTitle: "A typical day with Pymeclaw",
    miniFlowChip: "Practical local workflow",
    miniFlow: [
      "08:30 You review appointments, follow-ups, and unpaid items.",
      "10:15 You prepare a new quote without losing customer context.",
      "13:40 You leave the invoice ready after finishing the job.",
      "18:10 You close the day with a clear view of tomorrow.",
    ],
    featuresIntro: {
      eyebrow: "Features",
      title: "Built for small businesses that lose time to repetitive admin.",
      copy:
        "Pymeclaw is not positioned as another platform your team has to learn. It is positioned as a local assistant for businesses already working under time pressure and carrying too many small administrative tasks.",
    },
    features: [
      {
        title: "Quotes and invoices without context switching",
        copy:
          "You describe the work and Pymeclaw helps leave the document ready without bouncing between Word, Excel, email, and WhatsApp.",
        tone: "amber",
      },
      {
        title: "Appointments and reminders with less chaos",
        copy:
          "Daily schedules, reminders, and follow-up tasks stop depending on memory or scattered messages.",
        tone: "teal",
      },
      {
        title: "Customer history that does not get lost",
        copy:
          "It keeps the business context on the same machine where you work: customers, notes, jobs, and next steps.",
        tone: "slate",
      },
      {
        title: "Outstanding payments that stay visible",
        copy:
          "It helps you see what is still pending and move collections forward without rewriting every reminder from scratch.",
        tone: "amber",
      },
      {
        title: "A cleaner daily routine",
        copy:
          "It summarizes the day, orders repetitive tasks, and reduces the mental load of the admin side of the business.",
        tone: "teal",
      },
      {
        title: "Privacy and control",
        copy:
          "Pymeclaw is designed for businesses that want a local tool, more control, and less dependence on external services.",
        tone: "slate",
      },
    ],
    featureLabel: "Feature",
    sectorsIntro: {
      eyebrow: "Sectors",
      title:
        "A better fit for businesses where time, follow-up, and memory matter.",
    },
    sectorLabel: "Sector",
    sectors: [
      {
        name: "Trades and technical services",
        copy:
          "Plumbers, electricians, maintenance, reform work, and professionals living between callouts, quotes, job notes, and collections.",
      },
      {
        name: "Clinics and appointment-led businesses",
        copy:
          "Physio, beauty, and other businesses where schedule discipline and customer follow-up make the difference.",
      },
      {
        name: "Small offices and deskside teams",
        copy:
          "Small teams that need customer memory, administrative order, and less friction in daily operations.",
      },
      {
        name: "Sole traders with too many small tasks",
        copy:
          "Businesses where the owner does everything and needs time back without setting up a complex system or another subscription.",
      },
    ],
    flowIntro: {
      eyebrow: "Typical flow",
      title: "What Pymeclaw does for a sole trader across the day.",
      copy:
        "The point is not to make the owner learn a complex tool. The point is to let Pymeclaw support the normal rhythm of the business and remove friction where time is usually lost.",
    },
    dayFlow: [
      {
        time: "08:30",
        title: "You start the day with context",
        copy:
          "Pymeclaw helps you review appointments, follow-ups, and what is still unpaid before the day gets noisy.",
      },
      {
        time: "10:15",
        title: "A new client or incident comes in",
        copy:
          "You ask it to prepare a quote, capture the customer details, or log the work so nothing gets lost.",
      },
      {
        time: "13:40",
        title: "You finish a job",
        copy:
          "Based on the work just completed, Pymeclaw leaves the invoice, customer record, and next step ready to move.",
      },
      {
        time: "18:10",
        title: "You close the day without starting from zero again",
        copy:
          "You can review what is still unpaid, what is happening tomorrow, and which customers need a reply or reminder.",
      },
    ],
    setupIntro: {
      eyebrow: "Deployment",
      title: "One installation. One Mac. One calmer office routine.",
    },
    setupFlow: [
      {
        step: "01",
        title: "It is installed on the business Mac",
        copy:
          "Pymeclaw is prepared for the specific business and left running on the main machine used for work.",
      },
      {
        step: "02",
        title: "It is used in plain language",
        copy:
          "The owner asks for what is needed in natural language: quote, invoice, follow-up, appointment, or daily summary.",
      },
      {
        step: "03",
        title: "The office runs with less friction",
        copy:
          "The goal is not to impress. The goal is to save real time every week and remove admin drag from the business.",
      },
    ],
    docsIntro: {
      eyebrow: "Guides",
      title:
        "The public documentation is there to make installation and daily use easy to understand.",
      copy:
        "The website explains the product promise. The public repository explains the practical side: installation, daily use, and real examples.",
    },
    docsCta: "Open guide",
    docsArrow: "View",
    docs: [
      {
        title: "Installation guide",
        href: `${docsBase}/docs/INSTALLATION.md`,
        copy:
          "What needs to happen to install Pymeclaw correctly on a Mac and leave it ready for work.",
      },
      {
        title: "User guide",
        href: `${docsBase}/docs/USER-GUIDE.md`,
        copy:
          "The practical explanation of how Pymeclaw is used day to day once it is installed.",
      },
      {
        title: "Quick reference",
        href: `${docsBase}/docs/QUICK-REFERENCE.md`,
        copy:
          "A short reference for common tasks when you want to move straight to what matters.",
      },
      {
        title: "Real examples",
        href: `${docsBase}/examples/README.md`,
        copy:
          "Use cases to understand how the product fits real small-business situations.",
      },
    ],
    cta: {
      eyebrow: "Contact",
      title:
        "If you want Pymeclaw in a real business, start with the guide or request a private installation.",
      copy:
        "The public documentation shows the product clearly. The installation itself is prepared privately for each business.",
      primary: "Open public documentation",
      secondary: contactMail,
    },
    footer: {
      label: "Pymeclaw product website",
      install: "Installation",
      use: "Daily use",
    },
  },
} as const;

type Locale = keyof typeof content;

export default function Home() {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return "es";
    }

    const stored = window.localStorage.getItem("pymeclaweb-locale");
    if (stored === "es" || stored === "en") {
      return stored;
    }

    if (window.navigator.language.toLowerCase().startsWith("en")) {
      return "en";
    }

    return "es";
  });

  useEffect(() => {
    window.localStorage.setItem("pymeclaweb-locale", locale);
  }, [locale]);

  const t = content[locale];

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
                alt="Logo de Pymeclaw"
                width={44}
                height={44}
                className="h-11 w-11 rounded-2xl border border-white/70 object-cover shadow-[0_10px_30px_rgba(13,24,45,.12)]"
                priority
              />
              <div>
                <div className="text-sm font-semibold tracking-[0.24em] text-[var(--muted)] uppercase">
                  Pymeclaw
                </div>
                <div className="text-xs text-[var(--soft)]">{t.brandLine}</div>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <nav className="hidden items-center gap-6 text-sm text-[var(--soft)] md:flex">
                <a className="transition hover:text-[var(--ink)]" href="#ventajas">
                  {t.nav.features}
                </a>
                <a className="transition hover:text-[var(--ink)]" href="#sectores">
                  {t.nav.sectors}
                </a>
                <a className="transition hover:text-[var(--ink)]" href="#flujo">
                  {t.nav.flow}
                </a>
                <a className="transition hover:text-[var(--ink)]" href="#guias">
                  {t.nav.docs}
                </a>
                <a className="transition hover:text-[var(--ink)]" href="#contacto">
                  {t.nav.contact}
                </a>
              </nav>

              <div className="language-toggle" aria-label="Language selector">
                <button
                  type="button"
                  className={`language-button ${locale === "es" ? "is-active" : ""}`}
                  onClick={() => setLocale("es")}
                >
                  ES
                </button>
                <button
                  type="button"
                  className={`language-button ${locale === "en" ? "is-active" : ""}`}
                  onClick={() => setLocale("en")}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </header>

        <section
          id="top"
          className="grid items-start gap-10 pt-6 lg:grid-cols-[1.18fr_.82fr] lg:pt-10"
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--line)] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)] shadow-[0_16px_40px_rgba(13,24,45,.06)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_0_8px_rgba(49,181,152,.12)]" />
              {t.heroBadge}
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-5xl leading-[0.9] font-semibold tracking-[-0.06em] text-[var(--ink)] sm:text-6xl lg:text-7xl">
                {t.heroTitle.split(". ").map((part, index, all) => (
                  <span key={part}>
                    {part}
                    {index < all.length - 1 ? ". " : ""}
                    {index < all.length - 1 ? <br /> : null}
                  </span>
                ))}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--soft)] sm:text-xl">
                {t.heroCopy}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                className="cta-button"
                href={`${docsBase}/docs/INSTALLATION.md`}
                target="_blank"
                rel="noreferrer"
              >
                {t.heroPrimary}
              </a>
              <a
                className="ghost-button"
                href={`mailto:${contactMail}?subject=Pymeclaw`}
              >
                {t.heroSecondary}
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {t.trustSignals.map((item) => (
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
                    {t.officeLabel}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                    {t.officeTitle}
                  </h2>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {t.metrics.map((metric) => (
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
                    {t.miniFlowTitle}
                  </p>
                  <span className="rounded-full bg-[var(--chip)] px-3 py-1 text-xs font-medium text-[var(--ink)]">
                    {t.miniFlowChip}
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  {t.miniFlow.map((line) => (
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

        <section id="ventajas" className="section-shell">
          <div className="section-intro">
            <span className="section-eyebrow">{t.featuresIntro.eyebrow}</span>
            <h2 className="section-title">{t.featuresIntro.title}</h2>
            <p className="section-copy">{t.featuresIntro.copy}</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {t.features.map((feature) => (
              <article
                key={feature.title}
                className={`feature-card feature-${feature.tone}`}
              >
                <span className="feature-index">{t.featureLabel}</span>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-copy">{feature.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="sectores" className="section-shell">
          <div className="section-intro">
            <span className="section-eyebrow">{t.sectorsIntro.eyebrow}</span>
            <h2 className="section-title">{t.sectorsIntro.title}</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {t.sectors.map((sector) => (
              <article
                key={sector.name}
                className="surface-card rounded-[1.75rem] p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                  {t.sectorLabel}
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

        <section id="flujo" className="section-shell">
          <div className="section-intro">
            <span className="section-eyebrow">{t.flowIntro.eyebrow}</span>
            <h2 className="section-title">{t.flowIntro.title}</h2>
            <p className="section-copy">{t.flowIntro.copy}</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {t.dayFlow.map((item) => (
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

        <section className="section-shell workflow-shell">
          <div className="section-intro">
            <span className="section-eyebrow">{t.setupIntro.eyebrow}</span>
            <h2 className="section-title">{t.setupIntro.title}</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {t.setupFlow.map((item) => (
              <article key={item.step} className="workflow-card">
                <div className="workflow-step">{item.step}</div>
                <h3 className="workflow-title">{item.title}</h3>
                <p className="workflow-copy">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="guias" className="section-shell">
          <div className="section-intro">
            <span className="section-eyebrow">{t.docsIntro.eyebrow}</span>
            <h2 className="section-title">{t.docsIntro.title}</h2>
            <p className="section-copy">{t.docsIntro.copy}</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {t.docs.map((doc) => (
              <a
                key={doc.title}
                href={doc.href}
                target="_blank"
                rel="noreferrer"
                className="doc-card"
              >
                <div>
                  <span className="section-eyebrow">{t.docsCta}</span>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                    {doc.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-7 text-[var(--soft)]">
                    {doc.copy}
                  </p>
                </div>
                <span className="doc-arrow">{t.docsArrow}</span>
              </a>
            ))}
          </div>
        </section>

        <section id="contacto" className="cta-shell">
          <div className="max-w-3xl">
            <span className="section-eyebrow">{t.cta.eyebrow}</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              {t.cta.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
              {t.cta.copy}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              className="cta-button cta-button-light"
              href="https://github.com/raym33/pymeclaw"
              target="_blank"
              rel="noreferrer"
            >
              {t.cta.primary}
            </a>
            <a
              className="ghost-button ghost-button-dark"
              href={`mailto:${contactMail}?subject=Pymeclaw`}
            >
              {t.cta.secondary}
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
              <span>{t.footer.label}</span>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a href={`${docsBase}/docs/INSTALLATION.md`} target="_blank" rel="noreferrer">
                {t.footer.install}
              </a>
              <a href={`${docsBase}/docs/USER-GUIDE.md`} target="_blank" rel="noreferrer">
                {t.footer.use}
              </a>
              <a href={`mailto:${contactMail}`}>{contactMail}</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
