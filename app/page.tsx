import Image from 'next/image'
import HeroSection from '@/components/marketing/HeroSection'
import FeatureCard from '@/components/marketing/FeatureCard'
import Testimonial from '@/components/marketing/Testimonial'
import Timeline from '@/components/ui/Timeline'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

const docsBase = 'https://github.com/raym33/pymeclaw/blob/main'
const contactMail = 'pymeclaw@gmail.com'

// ── Icons (inline SVG) ─────────────────────────────────────────────────────
const IconDoc = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)
const IconCalendar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)
const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)
const IconMoney = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)
const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)
const IconLock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
)

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Nav ── */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 gap-6">
          <a href="#top" className="flex items-center gap-2.5">
            <Image src="/pymeclaw-logo.jpeg" alt="Pymeclaw" width={32} height={32} className="rounded-lg object-cover" priority />
            <span className="font-bold text-gray-900 tracking-tight">Pymeclaw</span>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm text-gray-600">
            {[['#features', 'Features'], ['#sectors', 'Sectors'], ['#flow', 'Day flow'], ['#guides', 'Guides']].map(([href, label]) => (
              <a key={href} href={href} className="hover:text-gray-900 transition-colors">{label}</a>
            ))}
          </nav>

          <Button as="a" href={`mailto:${contactMail}?subject=Pymeclaw`} size="sm" variant="primary" rounded>
            Get in touch
          </Button>
        </div>
      </header>

      {/* ── Hero (HeroSection capsule) ── */}
      <HeroSection
        id="top"
        variant="split"
        background="gradient"
        subtitle="Local AI for small offices · macOS"
        title="Less admin. More business."
        description="Pymeclaw helps sole traders and small offices handle quotes, invoices, appointments, customer follow-up, and repetitive admin — all on your Mac, no cloud, no monthly fee."
        primaryCTA={{ label: 'View installation →', href: `${docsBase}/docs/INSTALLATION.md` }}
        secondaryCTA={{ label: 'Request private setup', href: `mailto:${contactMail}?subject=Pymeclaw` }}
        image="/pymeclaw-logo.jpeg"
        className="min-h-[520px]"
      >
        {/* Trust chips */}
        <div className="flex flex-wrap gap-2 mt-8">
          {['Runs on your Mac', 'No cloud required', 'No monthly fee', 'Private installation'].map(t => (
            <Badge key={t} variant="default" size="sm" dot>{t}</Badge>
          ))}
        </div>
      </HeroSection>

      {/* ── Metrics band ── */}
      <section className="bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            { v: 'Local', l: 'Runs on the business Mac' },
            { v: '1 routine', l: 'Install · use · operate — connected' },
            { v: '0 cloud', l: 'No platform dependency' },
            { v: 'macOS', l: 'Desktop-native, private by default' },
          ].map(({ v, l }) => (
            <div key={v} className="text-center">
              <div className="text-3xl font-extrabold text-blue-600 tracking-tight">{v}</div>
              <div className="mt-1 text-sm text-gray-500 leading-5">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features (FeatureCard capsule) ── */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-14 max-w-2xl">
          <Badge variant="primary" size="sm" className="mb-3">Features</Badge>
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Built for businesses losing time<br className="hidden sm:block" /> to repetitive admin.
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            Not another platform to learn. A local assistant that works at the pace of the business.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: <IconDoc />, title: 'Quotes & invoices without context switching', desc: 'Describe the job. Pymeclaw drafts the document — no jumping between Word, Excel, email, and WhatsApp.', color: 'text-blue-600' },
            { icon: <IconCalendar />, title: 'Appointments & reminders with zero chaos', desc: 'Daily schedule, follow-up tasks, and reminders stop depending on memory or scattered messages.', color: 'text-indigo-600' },
            { icon: <IconUsers />, title: "Customer history that doesn't get lost", desc: 'All context lives on the same machine: clients, notes, jobs, open amounts, and next steps.', color: 'text-violet-600' },
            { icon: <IconMoney />, title: 'Outstanding payments that stay visible', desc: 'See what is pending and move collections forward without rewriting every reminder from scratch.', color: 'text-blue-600' },
            { icon: <IconClock />, title: 'A cleaner daily routine', desc: 'Day summary, ordered tasks, reduced admin drag — every morning and evening.', color: 'text-indigo-600' },
            { icon: <IconLock />, title: 'Privacy & full control', desc: 'Local-first. No cloud lock-in. No monthly API fee. Your data stays on the machine you own.', color: 'text-violet-600' },
          ].map(f => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.desc} iconColor={f.color} variant="elevated" />
          ))}
        </div>
      </section>

      {/* ── Sectors ── */}
      <section id="sectors" className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="mb-14 max-w-2xl">
            <Badge variant="primary" size="sm" className="mb-3">Sectors</Badge>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Fits best where time, follow-up,<br className="hidden sm:block" /> and memory matter.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { n: '01', name: 'Trades & technical services', desc: 'Plumbers, electricians, reform workers — living between callouts, quotes, job logs, and chasing payments.' },
              { n: '02', name: 'Clinics & appointment-led businesses', desc: 'Physio, beauty, health — where schedule precision and client follow-up drive everything.' },
              { n: '03', name: 'Small offices & desk-side teams', desc: 'Compact teams that need customer memory, admin order, and less daily friction.' },
              { n: '04', name: 'Sole traders doing everything', desc: 'One person, too many tasks. No complex setup. No new subscription. Just time back.' },
            ].map(s => (
              <Card key={s.name} variant="elevated" className="flex gap-5 items-start">
                <span className="text-3xl font-black text-blue-100 leading-none select-none">{s.n}</span>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{s.name}</h3>
                  <p className="text-gray-500 text-sm leading-6">{s.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Day flow (Timeline capsule) ── */}
      <section id="flow" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24 items-start">
          <div>
            <Badge variant="primary" size="sm" className="mb-3">Typical flow</Badge>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              A sole trader's day,<br /> with Pymeclaw.
            </h2>
            <p className="mt-5 text-lg text-gray-500 leading-relaxed">
              The goal is not to make the owner learn a new tool. It is to match the existing rhythm of the business and quietly remove friction where time disappears.
            </p>
            <div className="mt-8">
              <Button as="a" href={`${docsBase}/examples/README.md`} target="_blank" rel="noreferrer" variant="outline" size="md">
                See real examples →
              </Button>
            </div>
          </div>

          <Timeline
            variant="default"
            items={[
              { timestamp: '08:30', title: 'Start the day with context', description: 'Review appointments, open follow-ups, and unpaid items before the day gets loud.', color: 'primary' },
              { timestamp: '10:15', title: 'New client or incident comes in', description: 'Ask for a quote draft, capture customer details, or log the job so nothing disappears.', color: 'primary' },
              { timestamp: '13:40', title: 'Job finished', description: 'Invoice, customer record, and next action — all queued from what you just described.', color: 'primary' },
              { timestamp: '18:10', title: 'Day closed', description: 'What is unpaid, what is tomorrow, who needs a reply. One review. Done.', color: 'primary' },
            ]}
          />
        </div>
      </section>

      {/* ── Setup ── */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="mb-14">
            <Badge variant="info" size="sm" className="mb-3">Deployment</Badge>
            <h2 className="text-4xl font-extrabold text-white tracking-tight">
              One Mac. One installation.<br className="hidden sm:block" /> One calmer office.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { n: '01', label: 'Install', title: 'Set up on the business Mac', desc: 'Pymeclaw is configured for the specific business and left running on the primary work machine.' },
              { n: '02', label: 'Use', title: 'Talk to it plainly', desc: 'Quote, invoice, follow-up, appointment, daily summary — natural language. No commands to learn.' },
              { n: '03', label: 'Gain', title: 'Real hours saved every week', desc: 'The goal is to quietly remove admin drag so the business can breathe.' },
            ].map(s => (
              <div key={s.n} className="bg-white/5 border border-white/10 rounded-xl p-7 relative overflow-hidden">
                <div className="absolute -bottom-3 -right-1 text-[7rem] font-black text-white/[0.04] leading-none select-none">{s.n}</div>
                <Badge variant="info" size="sm" className="mb-4">{s.label}</Badge>
                <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-6">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials (Testimonial capsule) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-14 text-center">
          <Badge variant="success" size="sm" className="mb-3">From the field</Badge>
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Real businesses. Real time saved.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Testimonial
            variant="elevated"
            quote="Before Pymeclaw I was writing quotes by hand and forgetting follow-ups. Now it is just part of how I close the day."
            author="Carlos M."
            role="Plumber"
            company="Solo"
            rating={5}
          />
          <Testimonial
            variant="elevated"
            quote="My physio practice runs much smoother. Patient notes, reminders, and invoices used to take two hours every evening. Not anymore."
            author="Laura R."
            role="Physiotherapist"
            company="Own practice"
            rating={5}
          />
          <Testimonial
            variant="elevated"
            quote="I was skeptical about AI tools but this one just works quietly in the background. No cloud, no subscription, no drama."
            author="Mikel A."
            role="Electrician"
            company="Small crew"
            rating={5}
          />
        </div>
      </section>

      {/* ── Guides (Card capsule) ── */}
      <section id="guides" className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="mb-14 max-w-2xl">
            <Badge variant="primary" size="sm" className="mb-3">Guides</Badge>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Everything you need to install,<br className="hidden sm:block" /> configure, and run.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Installation guide', desc: 'Everything required to install Pymeclaw on a Mac and leave it ready for daily work.', href: `${docsBase}/docs/INSTALLATION.md` },
              { title: 'User guide', desc: 'How Pymeclaw is used day to day once it is installed.', href: `${docsBase}/docs/USER-GUIDE.md` },
              { title: 'Quick reference', desc: 'Common tasks at a glance. Go straight to what you need.', href: `${docsBase}/docs/QUICK-REFERENCE.md` },
              { title: 'Real-world examples', desc: 'Concrete use cases from plumbers, physios, hair salons, and more.', href: `${docsBase}/examples/README.md` },
            ].map(d => (
              <a key={d.title} href={d.href} target="_blank" rel="noreferrer" className="group block">
                <Card variant="elevated" className="h-full flex flex-col justify-between transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-xl">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{d.title}</h3>
                    <p className="text-sm text-gray-500 leading-6">{d.desc}</p>
                  </div>
                  <Card.Footer className="border-0 mt-4 pt-0">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest group-hover:underline">Open guide ↗</span>
                  </Card.Footer>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA band ── */}
      <section id="contact" className="bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <Badge variant="default" size="md" className="mb-6 bg-white/20 text-white border-0">Contact</Badge>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Ready to run Pymeclaw<br className="hidden sm:block" /> in a real business?
          </h2>
          <p className="text-lg text-blue-100 max-w-xl mx-auto mb-10 leading-relaxed">
            The public docs show you the product. The installation is prepared privately for each business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button as="a" href="https://github.com/raym33/pymeclaw" target="_blank" rel="noreferrer" size="xl" variant="primary" shadow className="bg-white text-blue-600 hover:bg-gray-100">
              Open documentation →
            </Button>
            <Button as="a" href={`mailto:${contactMail}?subject=Pymeclaw`} size="xl" variant="outline" className="border-white text-white hover:bg-white/10">
              {contactMail}
            </Button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <Image src="/pymeclaw-logo.jpeg" alt="Pymeclaw" width={26} height={26} className="rounded-md object-cover opacity-80" />
            <span className="text-sm font-semibold text-gray-500">Pymeclaw product website</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
            {[
              ['Installation', `${docsBase}/docs/INSTALLATION.md`],
              ['User guide', `${docsBase}/docs/USER-GUIDE.md`],
              ['Examples', `${docsBase}/examples/README.md`],
              [contactMail, `mailto:${contactMail}`],
            ].map(([label, href]) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="hover:text-white transition-colors">{label}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
