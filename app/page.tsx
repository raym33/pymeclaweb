import Image from "next/image";

const docsBase = "https://github.com/raym33/pymeclaw/blob/main";
const contactMail = "pymeclaw@gmail.com";

const trustSignals = [
  "Se queda en tu Mac",
  "Sin nube obligatoria",
  "Sin cuota mensual de API",
  "Pensado para autónomos y pequeñas oficinas",
];

const features = [
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
];

const sectors = [
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
];

const setupFlow = [
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
];

const dailyFlow = [
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
];

const docs = [
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
];

const metrics = [
  { value: "Local", label: "Funciona en el Mac del negocio" },
  { value: "1 rutina", label: "Instalación, uso y operativa conectados" },
  { value: "0 nube", label: "Sin depender de una plataforma cloud" },
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
                <div className="text-xs text-[var(--soft)]">
                  Asistente local para la oficina pequeña
                </div>
              </div>
            </a>

            <nav className="hidden items-center gap-6 text-sm text-[var(--soft)] md:flex">
              <a className="transition hover:text-[var(--ink)]" href="#ventajas">
                Ventajas
              </a>
              <a className="transition hover:text-[var(--ink)]" href="#sectores">
                Sectores
              </a>
              <a className="transition hover:text-[var(--ink)]" href="#flujo">
                Flujo
              </a>
              <a className="transition hover:text-[var(--ink)]" href="#guias">
                Guías
              </a>
              <a className="transition hover:text-[var(--ink)]" href="#contacto">
                Contacto
              </a>
            </nav>
          </div>
        </header>

        <section
          id="top"
          className="grid items-start gap-10 pt-6 lg:grid-cols-[1.18fr_.82fr] lg:pt-10"
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--line)] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)] shadow-[0_16px_40px_rgba(13,24,45,.06)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_0_8px_rgba(49,181,152,.12)]" />
              Instalación privada para negocios reales
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-5xl leading-[0.9] font-semibold tracking-[-0.06em] text-[var(--ink)] sm:text-6xl lg:text-7xl">
                Menos administración.
                <br />
                Más negocio.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--soft)] sm:text-xl">
                Pymeclaw ayuda al autónomo y a la pequeña oficina a ordenar
                presupuestos, facturas, citas, seguimiento de clientes y tareas
                repetitivas sin convertir el negocio en otra pila de herramientas.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                className="cta-button"
                href={`${docsBase}/docs/INSTALLATION.md`}
                target="_blank"
                rel="noreferrer"
              >
                Ver instalación
              </a>
              <a
                className="ghost-button"
                href={`mailto:${contactMail}?subject=Pymeclaw%20instalacion`}
              >
                Pedir instalación privada
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
                    Oficina diaria
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                    Más orden. Menos desgaste mental.
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
                    Un día típico con Pymeclaw
                  </p>
                  <span className="rounded-full bg-[var(--chip)] px-3 py-1 text-xs font-medium text-[var(--ink)]">
                    Flujo local y práctico
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    "08:30 Revisas agenda, seguimientos y cobros pendientes.",
                    "10:15 Preparas un presupuesto nuevo sin perder el contexto del cliente.",
                    "13:40 Dejas encaminada la factura al terminar el trabajo.",
                    "18:10 Cierras el día con una visión clara de mañana.",
                  ].map((line) => (
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
            <span className="section-eyebrow">Ventajas</span>
            <h2 className="section-title">
              Pensado para negocios pequeños que pierden tiempo en lo repetitivo.
            </h2>
            <p className="section-copy">
              Pymeclaw no está planteado como otra plataforma que hay que
              aprender. Está planteado como un asistente local para negocios que
              ya trabajan con presión, con poco tiempo y con demasiadas tareas
              administrativas pequeñas.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className={`feature-card feature-${feature.tone}`}
              >
                <span className="feature-index">Ventaja</span>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-copy">{feature.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="sectores" className="section-shell">
          <div className="section-intro">
            <span className="section-eyebrow">Sectores</span>
            <h2 className="section-title">
              Encaja mejor en negocios donde el tiempo, el seguimiento y la memoria importan.
            </h2>
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

        <section id="flujo" className="section-shell">
          <div className="section-intro">
            <span className="section-eyebrow">Flujo típico</span>
            <h2 className="section-title">
              Qué hace Pymeclaw por un autónomo a lo largo del día.
            </h2>
            <p className="section-copy">
              La idea no es que el autónomo aprenda una herramienta compleja. La
              idea es que Pymeclaw acompañe el ritmo normal del negocio y quite
              carga en los puntos donde más se pierde tiempo.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {dailyFlow.map((item) => (
              <article key={item.time} className="flow-card">
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
            <span className="section-eyebrow">Cómo se implanta</span>
            <h2 className="section-title">
              Una instalación. Un Mac. Una rutina de oficina más tranquila.
            </h2>
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

        <section id="guias" className="section-shell">
          <div className="section-intro">
            <span className="section-eyebrow">Guías</span>
            <h2 className="section-title">
              La documentación pública está para que la instalación y el uso se entiendan rápido.
            </h2>
            <p className="section-copy">
              La web explica la propuesta. El repositorio público explica la
              parte práctica: instalación, uso diario y ejemplos reales.
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
                  <span className="section-eyebrow">Abrir guía</span>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                    {doc.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-7 text-[var(--soft)]">
                    {doc.copy}
                  </p>
                </div>
                <span className="doc-arrow">Ver</span>
              </a>
            ))}
          </div>
        </section>

        <section id="contacto" className="cta-shell">
          <div className="max-w-3xl">
            <span className="section-eyebrow">Contacto</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              Si quieres Pymeclaw en un negocio real, empieza por la guía o pide una instalación privada.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
              La documentación pública te enseña el producto con claridad. La
              instalación se prepara de forma privada para cada negocio.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              className="cta-button cta-button-light"
              href="https://github.com/raym33/pymeclaw"
              target="_blank"
              rel="noreferrer"
            >
              Abrir documentación pública
            </a>
            <a
              className="ghost-button ghost-button-dark"
              href={`mailto:${contactMail}?subject=Pymeclaw`}
            >
              {contactMail}
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
              <span>Web de producto de Pymeclaw</span>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a href={`${docsBase}/docs/INSTALLATION.md`} target="_blank" rel="noreferrer">
                Instalación
              </a>
              <a href={`${docsBase}/docs/USER-GUIDE.md`} target="_blank" rel="noreferrer">
                Uso diario
              </a>
              <a href={`mailto:${contactMail}`}>{contactMail}</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
