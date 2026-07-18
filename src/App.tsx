// main portfolio page
const showTraceShelfProject = false

// Link icons for the 'contact' section
function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56v-2.03c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.19-3.12-.12-.3-.52-1.5.11-3.13 0 0 .97-.31 3.18 1.19a10.9 10.9 0 0 1 5.79 0c2.2-1.5 3.17-1.19 3.17-1.19.63 1.63.23 2.83.11 3.13.74.82 1.19 1.86 1.19 3.12 0 4.43-2.69 5.4-5.25 5.68.41.36.77 1.06.77 2.14v3.17c0 .31.21.68.8.56A11.53 11.53 0 0 0 23.5 12C23.5 5.66 18.34.5 12 .5Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM2.75 9.75h4.46v11.75H2.75ZM9.75 9.75h4.27v1.6h.06c.6-1.13 2.05-2.32 4.22-2.32 4.5 0 5.33 2.96 5.33 6.8v5.67h-4.45v-5.03c0-1.2-.02-2.75-1.67-2.75-1.68 0-1.94 1.31-1.94 2.66v5.12H9.75Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
      {/* two buttons, for two email addresse */}
      <path d="M3 6.75h18v10.5H3z" />
      <path d="m4 8 8 6 8-6" />
    </svg>
  )
}

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" />
    </svg>
  )
}

function HeroSystemPanel() {
  return (
    <div className="system-panel relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0e13] p-5 sm:min-h-[470px] sm:p-7">
      <div className="technical-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative z-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
        <span>systems map / 01</span>
        <span className="flex items-center gap-2 text-emerald-300/80">
          <span className="status-pulse h-1.5 w-1.5 rounded-full bg-emerald-300" />
          available
        </span>
      </div>

      <div className="relative z-10 mx-auto mt-8 h-[290px] max-w-[390px] sm:mt-10 sm:h-[320px]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 390 320" fill="none" aria-hidden="true">
          <path className="signal-line" d="M195 160 72 62M195 160l128-92M195 160 76 124M195 160 55 260" />
          <circle className="signal-pulse" cx="72" cy="62" r="4" />
          <circle className="signal-pulse signal-pulse-delay" cx="323" cy="68" r="4" />
          <circle className="signal-pulse" cx="271" cy="284" r="4" />
          <circle className="signal-pulse signal-pulse-delay" cx="55" cy="260" r="4" />
        </svg>

        <div className="system-node absolute left-0 top-4">
          <span>01</span>
          <strong>Backend</strong>
          <small>APIs · Auth</small>
        </div>
        <div className="system-node absolute right-0 top-6 text-right">
          <span>02</span>
          <strong>Data</strong>
          <small>SQL · Models</small>
        </div>
        <div className="system-node absolute bottom-0 right-5 text-right">
          <span>03</span>
          <strong>Interface</strong>
          <small>React · UX</small>
        </div>
        <div className="system-node absolute bottom-5 left-0">
          <span>04</span>
          <strong>Automation</strong>
          <small>Python · VBA</small>
        </div>

        {/* right side image */}
        <div className="portrait-orbit absolute left-1/2 top-1/2 h-48 w-36 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[1.4rem] border border-white/15 bg-zinc-900 p-1 shadow-2xl shadow-black/50 sm:h-56 sm:w-40">
          <img
            src="/portrait.jpg"
            alt="Ian Keilman"
            className="h-full w-full rounded-[1.15rem] object-cover grayscale-[20%] transition duration-700 hover:grayscale-0"
          />
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-3 gap-2 border-t border-white/10 pt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-500 sm:text-[10px]">
        <span>Python / C++</span>
        <span className="text-center">TypeScript</span>
        <span className="text-right">PostgreSQL</span>
      </div>
    </div>
  )
}

function BananaSlugIllustration() {
  return (
    <div className="slug-stage relative min-h-[260px] overflow-hidden rounded-[1.6rem] border border-sky-200/10 bg-[#071c2c] p-5" role="img" aria-label="Original stylized banana slug illustration for UC Santa Cruz">
      <div className="technical-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative z-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-sky-100/45">
        <span>campus signal</span>
        <span>UCSC / 2026</span>
      </div>
      <svg className="slug-float relative z-10 mx-auto mt-3 h-[180px] w-full max-w-[300px]" viewBox="0 0 320 210" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="slugBody" x1="48" y1="60" x2="264" y2="170" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDE68A" />
            <stop offset="0.55" stopColor="#FBBF24" />
            <stop offset="1" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id="slugGlow" x1="70" y1="170" x2="255" y2="170" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BDF8" stopOpacity="0" />
            <stop offset="0.5" stopColor="#38BDF8" stopOpacity="0.7" />
            <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
          </linearGradient>
        </defs>
        <ellipse cx="164" cy="181" rx="116" ry="8" fill="url(#slugGlow)" opacity="0.55" />
        <path d="M49 157c25-4 43-18 65-40 25-25 50-35 86-31 37 4 58 25 72 56 8 18-1 32-19 34-27 3-48-9-73-9-43 0-81 18-121 9-19-4-28-15-10-19Z" fill="url(#slugBody)" />
        <path d="M70 158c35-11 53-39 82-51 29-12 75-12 98 17" stroke="#FEF3C7" strokeWidth="5" strokeLinecap="round" opacity="0.55" />
        <path d="M248 111c8-22 12-35 9-49M263 116c17-18 23-30 24-43" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" />
        <circle cx="257" cy="59" r="5" fill="#FDE68A" />
        <circle cx="289" cy="70" r="5" fill="#FDE68A" />
        <circle cx="246" cy="126" r="4" fill="#422006" />
        <path d="M253 143c7 5 14 5 20-1" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
        <g fill="#92400E" opacity="0.6">
          <circle cx="119" cy="139" r="4" /><circle cx="143" cy="120" r="3" /><circle cx="168" cy="112" r="4" />
          <circle cx="190" cy="114" r="3" /><circle cx="210" cy="121" r="4" /><circle cx="94" cy="153" r="3" />
        </g>
        <path d="M42 184h238" stroke="#7DD3FC" strokeOpacity="0.24" strokeDasharray="4 8" />
      </svg>
    </div>
  )
}

function SorterArchitecture() {
  return (
    <div className="project-visual relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b0e13] p-5" role="img" aria-label="Sorter.ly application architecture diagram">
      <div className="technical-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
        <span>sorter.ly / architecture</span>
        <span className="text-emerald-300/70">local-first</span>
      </div>
      <div className="relative mt-8 grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
        <div className="architecture-node">
          <span>01</span><strong>Interface</strong><small>Next.js + React</small>
        </div>
        <span className="architecture-arrow">→</span>
        <div className="architecture-node">
          <span>02</span><strong>Typed records</strong><small>Sort · Filter · CRUD</small>
        </div>
        <span className="architecture-arrow">→</span>
        <div className="architecture-node">
          <span>03</span><strong>Private data</strong><small>Drizzle + SQLite</small>
        </div>
      </div>
      <div className="relative mt-6 grid grid-cols-3 gap-2 border-t border-white/10 pt-4 font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-500">
        <span>Dynamic fields</span><span className="text-center">CSV I/O</span><span className="text-right">Local storage</span>
      </div>
    </div>
  )
}

function FaultSiftTerminal() {
  return (
    <div className="project-visual relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#080b0f] p-5 font-mono" role="img" aria-label="FaultSift log triage terminal preview">
      <div className="flex items-center gap-2 border-b border-white/10 pb-4">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
        <span className="ml-auto text-[10px] uppercase tracking-[0.18em] text-zinc-600">triage.log</span>
      </div>
      <div className="mt-5 space-y-3 text-[11px] leading-6 sm:text-xs">
        <p><span className="text-sky-300">$</span> <span className="text-zinc-300">faultsift scan /var/log/app.log</span></p>
        <p className="text-zinc-600">Scanning ruleset... <span className="text-emerald-300">24 rules loaded</span></p>
        <p><span className="text-rose-300">[HIGH]</span> <span className="text-zinc-400">authentication failure × 08</span></p>
        <p><span className="text-amber-200">[WARN]</span> <span className="text-zinc-400">connection timeout × 03</span></p>
        <p><span className="text-sky-300">[INFO]</span> <span className="text-zinc-400">report written → summary.json</span></p>
      </div>
      <div className="mt-6 h-1 overflow-hidden rounded-full bg-white/5"><div className="scan-progress h-full w-4/5 rounded-full bg-gradient-to-r from-sky-400 to-rose-400" /></div>
    </div>
  )
}

/*
function FileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="M7 3.75h7l4 4v12.5H7z" />
      <path d="M14 3.75v4h4" />
    </svg>
  )
}
*/

// note: consider adding a rickroll button for fun?

/*---------------------------------------------------------------------------------------------------------------------------------------*/

function App() {

  return (
    // whole page
    <div id="home" className="min-h-screen overflow-hidden text-zinc-100">
      <a href="#main-content" className="sr-only z-50 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      {/* top nav */}
      <header className="sticky top-0 z-30 border-b border-white/[0.08] bg-[#07090c]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* left side: name */}
          <a
            href="#home"
            className="group flex items-center gap-3 font-mono text-[13px] tracking-tight text-white transition hover:text-rose-300"
          >
            <span className="relative flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-[10px] text-rose-300 transition group-hover:border-rose-300/40">IK</span>
            <span className="hidden sm:inline">Ian Keilman</span>
          </a>

          {/* right side: nav links */}
          <nav aria-label="Primary navigation" className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-500 sm:gap-6 sm:text-[11px] sm:tracking-[0.18em]">
            <a href="#experience" className="transition hover:text-white focus-visible:text-white">
              work
            </a>
            <a href="#education" className="hidden transition hover:text-white focus-visible:text-white md:inline">
              education
            </a>
            <a href="#projects" className="transition hover:text-white focus-visible:text-white">
              projects
            </a>
            <a href="#about" className="hidden transition hover:text-white focus-visible:text-white sm:inline">
              about
            </a>
            <a href="#contact" className="rounded-full border border-white/10 px-3 py-2 text-zinc-300 transition hover:border-rose-300/40 hover:text-rose-300 focus-visible:text-rose-300 sm:px-4">
              contact
            </a>
          </nav>
        </div>
      </header>

{/*---------------------------------------------------------------------------------------------------------------------------------------*/}

      {/* main content */}
      <main id="main-content" className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 sm:pt-10 lg:px-8 lg:pb-28">
        {/* intro / hero section */}
        <section className="hero-shell relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 sm:p-8 lg:p-10">
          <div className="hero-glow absolute -left-24 top-10 h-72 w-72 rounded-full bg-rose-500/10 blur-3xl" aria-hidden="true" />
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-12">
            {/* left side text */}
            <div className="relative z-10 py-3 lg:py-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-rose-300/80 sm:text-[11px]">
                Ian Keilman / New-grad software engineer
              </p>

              <div className="mt-7 max-w-4xl">
                <h1 className="text-[clamp(3rem,7vw,6.4rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-white">
                  Backend systems.
                  <span className="hero-gradient mt-2 block">Useful interfaces.</span>
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
                  New-grad software engineer with 3 internships building backend/database systems, data workflow tools, and internal applications.
                  Strong in Python, C/C++, TypeScript, SQL, Linux, and full-stack development; seeking SWE roles in backend systems, data-heavy applications, and developer tooling.
                </p>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-3 border-y border-white/10 py-5">
                <div>
                  <strong className="block text-xl font-semibold text-white sm:text-2xl">03</strong>
                  <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600 sm:text-[10px]">internships</span>
                </div>
                <div className="border-x border-white/10 px-4 sm:px-6">
                  <strong className="block text-xl font-semibold text-white sm:text-2xl">2026</strong>
                  <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600 sm:text-[10px]">UCSC graduate</span>
                </div>
                <div className="pl-4 sm:pl-6">
                  <strong className="block text-xl font-semibold text-white sm:text-2xl">Full-stack</strong>
                  <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600 sm:text-[10px]">systems focus</span>
                </div>
              </div>

              {/* Extra buttons that go below my summary. I decided not to use these */}
              {/*
              <div className="mt-10 flex flex-wrap gap-6 text-sm text-zinc-400">
                <a href="#experience" className="transition hover:text-rose-400">
                  work experience ↗
                </a>
                <a href="#projects" className="transition hover:text-rose-400">
                  featured projects ↗
                </a>
                <a href="#contact" className="transition hover:text-rose-400">
                  my links ↗
                </a>
              </div>
              */}

            </div>

            <HeroSystemPanel />
          </div>
        </section>

{/*---------------------------------------------------------------------------------------------------------------------------------------*/}

        {/* The experience section should come first, of course */}
        {/* Debating between having the name be 'experience' or 'work', depending on which sounds better */}
        {/* Logos or links for the companies probably won't be included */}
        {/* Should I add the location of the internships? */}


        {/* experience section */}
        <section
          id="experience"
          className="section-grid scroll-mt-24 border-b border-white/10 py-24 lg:grid lg:grid-cols-[0.36fr_0.64fr] lg:gap-16 lg:py-32"
        >
          {/* section intro */}
          <div className="section-intro lg:sticky lg:top-28 lg:self-start">
            <p className="section-kicker">
              01 / experience
            </p>

            <h2 className="mt-5 max-w-sm text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
              Building across software, data, and robotics.
            </h2>

            <p className="mt-6 max-w-sm text-base leading-7 text-zinc-500">
              Three internships focused on dependable internal systems, workflow automation, and practical engineering tools.
            </p>

            {/*
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white">
              Work/Internship experience
            </h2>
            */}
          </div>

          {/* right column: all experience cards go inside this one wrapper */}
          <div className="timeline relative mt-14 lg:mt-0">
            {/* Internship 3 */}
            <article className="timeline-entry group relative pb-14 pl-9 sm:pl-12">
              <div className="grid gap-5 md:grid-cols-[0.32fr_0.68fr] md:gap-8">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-zinc-500">May 2026 — Present</p>
                  <p className="mt-3 text-sm font-medium text-white">Zee Foods, LLC.</p>
                  <p className="mt-1 text-sm text-zinc-600">Fremont, CA · Remote</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold leading-tight tracking-[-0.025em] text-white transition group-hover:text-rose-200 sm:text-3xl">
                    Software Engineer - Backend & Database
                  </h3>

                  <div className="mt-3 shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-rose-300/70">
                    Internship
                  </div>

                  <ul className="mt-6 space-y-3 text-sm leading-7 text-zinc-400 sm:text-base">
                    <li className="impact-item">Built backend/database features for Polaris, a full-stack internal operations platform replacing B2B SaaS workflows</li>
                    <li className="impact-item">Built order management features with PostgreSQL schemas, Drizzle, CRUD, server actions, and SKU-linked records</li>
                    <li className="impact-item">Added RLS/CASL authorization, real-time UI updates, integration tests, and end-to-end validation</li>
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="skill-chip">PostgreSQL</span>
                    <span className="skill-chip">Drizzle</span>
                    <span className="skill-chip">Authorization</span>
                    <span className="skill-chip">Testing</span>
                  </div>
                </div>
              </div>
            </article>

            {/* Internship 2 */}
            <article className="timeline-entry group relative pb-14 pl-9 sm:pl-12">
              <div className="grid gap-5 md:grid-cols-[0.32fr_0.68fr] md:gap-8">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-zinc-500">February 2026 — Present</p>
                  <p className="mt-3 text-sm font-medium text-white">Bishop-Wisecarver</p>
                  <p className="mt-1 text-sm text-zinc-600">Pittsburg, CA</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold leading-tight tracking-[-0.025em] text-white transition group-hover:text-rose-200 sm:text-3xl">
                    Engineering Intern - Robotics & Automation
                  </h3>

                  <div className="mt-3 shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-rose-300/70">
                    Internship
                  </div>

                  {/* Overview text */}
                  {/*
                  <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
                    Internship experience focused on practical engineering work across automation,
                    tooling, robotics-related workflows, and technical support for development tasks.
                  </p>
                  */}

                  <ul className="mt-6 space-y-3 text-sm leading-7 text-zinc-400 sm:text-base">
                    <li className="impact-item">Built a local torque-spec lookup tool to map product/part numbers to fastener lists and reduce manual lookup time</li>
                    <li className="impact-item">Programmed and calibrated robotic arm routines for automated scanning workflows, validating motion behavior</li>
                    <li className="impact-item">Validated computer vision training data in CVAT through labeling QA, spot reviews, and consistency audits</li>
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {/* making this tag a comment for now, because I only have internships so far*/}
                    {/* <span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">
                      internship
                    </span> */}
                    <span className="skill-chip">Robotics</span>
                    <span className="skill-chip">Programming</span>
                    <span className="skill-chip">CAD</span>
                  </div>
                </div>
              </div>
            </article>

{/* Note: make sure experience is sorted properly by recency (most recent goes on top) */}

            {/* Internship 1 */}
            <article className="timeline-entry group relative pl-9 sm:pl-12">
              <div className="grid gap-5 md:grid-cols-[0.32fr_0.68fr] md:gap-8">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-zinc-500">September 2024 — August 2025</p>
                  <p className="mt-3 text-sm font-medium text-white">Grand Petroleum Inc.</p>
                  <p className="mt-1 text-sm text-zinc-600">Pleasant Hill, CA · Remote</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold leading-tight tracking-[-0.025em] text-white transition group-hover:text-rose-200 sm:text-3xl">
                    Software Engineer - Backend & Data Automation
                  </h3>

                  <div className="mt-3 shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-rose-300/70">
                    Internship
                  </div>

                  {/*Overview text*/}
                  {/*
                  <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">

                  </p>
                  */}

                  <ul className="mt-6 space-y-3 text-sm leading-7 text-zinc-400 sm:text-base">
                    <li className="impact-item">Built an Excel/VBA automation suite that converted raw multi-store exports into standardized sales/margin reports</li>
                    <li className="impact-item">Added automated validation and exception flagging for missing data, outliers, and pricing/cost/profit mismatches</li>
                    <li className="impact-item">Designed one-click workflows for non-technical users, reducing manual spreadsheet review time</li>
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {/*<span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">
                      internship
                    </span>*/}
                    <span className="skill-chip">Automation</span>
                    <span className="skill-chip">Data science</span>
                    <span className="skill-chip">Tooling</span>
                    <span className="skill-chip">Excel</span>
                    <span className="skill-chip">VBA</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

{/*---------------------------------------------------------------------------------------------------------------------------------------*/}

        {/* education section */}
        <section
          id="education"
          className="scroll-mt-24 border-b border-white/10 py-24 lg:py-32"
        >
          <div>
            <p className="section-kicker">
              02 / education
            </p>
          </div>

          <div className="mt-10">
            <article className="education-card relative overflow-hidden rounded-[2rem] border border-sky-200/10 bg-gradient-to-br from-[#0a1118] to-[#071019] p-5 sm:p-8 lg:p-10">
              <div className="grid items-center gap-10 md:grid-cols-[1fr_0.72fr] lg:gap-16">
                <div>
                  <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-sky-200/50">
                    <span>University of California, Santa Cruz</span>
                    <span className="h-1 w-1 rounded-full bg-amber-300" />
                    <span>2023 — 2026</span>
                  </div>

                  <h3 className="mt-6 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                    Bachelor's degree,<br />Computer Science and Engineering
                  </h3>

                  <p className="mt-6 max-w-xl text-base leading-7 text-sky-50/55">
                    A multidisciplinary foundation spanning software, computer systems, engineering, and robotics.
                  </p>

                  <div className="mt-9 grid max-w-xl grid-cols-2 border-y border-sky-100/10 py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-sky-100/40 sm:text-[10px]">
                    <span>Santa Cruz, California</span>
                    <span className="text-right">Degree completed / 2026</span>
                  </div>
                </div>

                <BananaSlugIllustration />
              </div>
            </article>
          </div>
        </section>

{/*---------------------------------------------------------------------------------------------------------------------------------------*/}

        {/* projects & activities */}
        <section id="projects" className="scroll-mt-24 border-b border-white/10 py-24 lg:py-32">
          {/* section label */}
          <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
            <div>
              <p className="section-kicker">
                03 / featured projects
              </p>

              {/* section title */}
              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Systems shown, not just listed.
              </h2>
            </div>

            {/* short section description */}
            <p className="max-w-2xl text-base leading-7 text-zinc-500 lg:justify-self-end lg:text-lg lg:leading-8">
              Selected builds presented as compact case studies: the problem, the system behind it, and the result for the user.
              { /* Here's the stuff I make personally, outside of internships and school. */}
            </p>
          </div>

          {/* stacked work cards */}
          <div className="mt-14 space-y-8 lg:mt-20">
            {/* project 1 */}
            <article className="case-study group rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 transition duration-500 hover:border-rose-300/20 sm:p-8 lg:p-10">
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-rose-300/70">
                    01 / 2026 · full-stack web application
                  </p>

                  <h3 className="mt-5 text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl">
                    sorter.ly
                  </h3>

                  <p className="mt-5 text-lg leading-8 text-zinc-300">
                    A local-first collection manager for flexible records, typed fields, and private SQLite-backed storage.
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    <div className="case-note"><span>Challenge</span><p>Organize different kinds of records without forcing one rigid schema.</p></div>
                    <div className="case-note"><span>System</span><p>Dynamic fields, typed CRUD, filters, sorting, and CSV portability.</p></div>
                    <div className="case-note"><span>Result</span><p>A fast private workflow that keeps structured data on-device.</p></div>
                  </div>

                  {/* short highlights for the project */}
                  <ul className="mt-7 space-y-2 text-sm leading-6 text-zinc-500">
                    <li className="impact-item">Local-first customizable collection manager with dynamic fields, typed records, and private SQLite-backed storage</li>
                    <li className="impact-item">Implemented record CRUD, typed sorting and filtering, and CSV import/export in a full-stack web application</li>
                    <li className="impact-item">Designed a minimal frontend UI for fast, local data organization across flexible personal or professional use cases</li>
                  </ul>

                  {/* light tag row */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    <span className="skill-chip">Next.js</span>
                    <span className="skill-chip">React</span>
                    <span className="skill-chip">TypeScript</span>
                    <span className="skill-chip">SQLite</span>
                    <span className="skill-chip">Drizzle ORM</span>
                  </div>

                  {/* project links */}
                  <div className="mt-8 flex flex-wrap gap-5 text-sm text-zinc-400">
                    <a href="https://github.com/Ian-Keilman/sorter.ly" target="_blank" rel="noreferrer" className="project-link">
                      GitHub <ArrowUpRightIcon />
                    </a>
                    <a href="#" className="transition hover:text-rose-400">
                     {/* Demo ↗ */}
                    </a>
                  </div>
                </div>

                <SorterArchitecture />

                {/* small right-side label if i need it */}
                <div className="sr-only">Full-stack project architecture</div>
              </div>
            </article>

            <article className="case-study group rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 transition duration-500 hover:border-sky-300/20 sm:p-8 lg:p-10">
              <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
                <FaultSiftTerminal />

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sky-300/70">
                    02 / 2026 · Python CLI · security
                  </p>

                  <h3 className="mt-5 text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl">
                    FaultSift
                  </h3>

                  <p className="mt-5 text-lg leading-8 text-zinc-300">
                    A focused Python CLI for turning noisy Linux logs into prioritized, readable incident summaries.
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    <div className="case-note"><span>Input</span><p>Raw Linux application and system logs.</p></div>
                    <div className="case-note"><span>Engine</span><p>Modular rules, matching, scoring, and severity.</p></div>
                    <div className="case-note"><span>Output</span><p>Focused findings and local validation reports.</p></div>
                  </div>

                  {/* short highlights for the project */}
                  <ul className="mt-7 space-y-2 text-sm leading-6 text-zinc-500">
                    <li className="impact-item">Developed a Python CLI for Linux log triage that scans log files, flags failures, and summarizes issues by severity</li>
                    <li className="impact-item">Implemented modular rule matching, scanning, scoring, reporting, and local validation with pytest</li>
                  </ul>

                  {/* light tag row */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    <span className="skill-chip">Python</span>
                    <span className="skill-chip">Regex</span>
                    <span className="skill-chip">Pytest</span>
                    <span className="skill-chip">Git</span>
                    <span className="skill-chip">CLI</span>
                  </div>

                  {/* project links */}
                  <div className="mt-8 flex flex-wrap gap-5 text-sm text-zinc-400">
                    <a href="https://github.com/Ian-Keilman/faultsift" target="_blank" rel="noreferrer" className="project-link">
                      GitHub <ArrowUpRightIcon /> {/* Uncomment if I make the repository public */}
                    </a>
                    <a href="#" className="transition hover:text-rose-400">
                     {/* Demo ↗ */} {/* I'll uncomment this once the repository goes public */}
                    </a>
                  </div>
                </div>

                {/* small right-side label if i need it */}
                <div className="sr-only">Command-line project preview</div>
              </div>
            </article>




            {/* TraceShelf project box commented out, shell kept for future use */}
            {showTraceShelfProject && (
            <article className="case-study rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 transition hover:border-white/20 hover:bg-white/[0.03]">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="max-w-3xl">
                  <p className="font-mono text-[13px] text-zinc-500">
                    2025 - 2026 · backend API / record management
                  </p>

                  <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                    TraceShelf
                  </h3>

                  <p className="mt-5 text-lg leading-8 text-zinc-300">
                    FastAPI backend for keeping track of records, issues, notes, or other structured entires
                  </p>

                  {/* short highlights for the project */}
                  <ul className="mt-6 space-y-3 text-base leading-7 text-zinc-400">
                    <li>• Built a FastAPI backend for secure per-user record, issue, and activity tracking with authenticated CRUD</li>
                    <li>• Added Postgres + Alembic migrations, API tests, and GitHub Actions CI with PR-based review before merge</li>
                  </ul>

                  {/* light tag row */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="skill-chip">
                      Python
                    </span>
                    <span className="skill-chip">
                      FastAPI
                    </span>
                    <span className="skill-chip">
                      PostgreSQL
                    </span>
                    <span className="skill-chip">
                      SQLAlchemy
                    </span>
                    <span className="skill-chip">
                      Alembic
                    </span>
                    <span className="skill-chip">
                      Pytest
                    </span>
                    <span className="skill-chip">
                      Docker
                    </span>
                  </div>

                  {/* project links */}
                  <div className="mt-6 flex flex-wrap gap-5 text-sm text-zinc-400">
                    <a href="#" className="transition hover:text-rose-400">
                     {/* GitHub ↗ */} {/* Uncomment if I make the repository public */}
                    </a>
                    <a href="#" className="transition hover:text-rose-400">
                     {/* Demo ↗ */} {/* I'll uncomment this once the repository goes public */}
                    </a>
                  </div>
                </div>

                {/* small right-side label if i need it */}
                <div className="shrink-0 text-sm text-zinc-500">
                  
                </div>
              </div>
            </article>
            )}
          </div>
        </section>

{/*---------------------------------------------------------------------------------------------------------------------------------------*/}

        {/* about section */}
        <section
          id="about"
          className="scroll-mt-24 py-24 lg:py-32"
        >
          <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr] lg:gap-16">
            {/* left column */}
            <div>
              <p className="section-kicker">
                04 / about
              </p>

              {/*
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white">

              </h2>
              */}

              <p className="mt-6 max-w-sm font-mono text-[10px] uppercase leading-6 tracking-[0.18em] text-zinc-600">
                Software / systems / automation / interface
              </p>
            </div>

            {/* right column */}
            <div>
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                Comfortable moving between layers of a system.
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
                I studied computer science, engineering, and robotics because I've never been interested in <em>just</em> one side of technology.
                I've long been drawn to mechanical, electrical, computer, and software engineering, and robotics felt like the one field that brought all of them together.
                It gave me a way to pursue broad technical interests without narrowing myself too early.
                That mindset still shapes the kind of work I'm most drawn to: projects that connect disciplines and let me build across more than one layer of a system.
              </p>
            </div>
          </div>

          {/* smaller fact grid */}
          <div className="mt-14 grid gap-4 lg:grid-cols-12">
              <div className="bento-card lg:col-span-5">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-rose-300/70">interests</p>
                  <span className="font-mono text-[10px] text-zinc-700">A / 01</span>
                </div>
                <p className="mt-4 text-base leading-7 text-zinc-300">
                  Backend systems, database-driven applications, developer tooling,
                  data automation, robotics, and computer vision.
                </p>
              </div>

              <div className="bento-card lg:col-span-7">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-sky-300/70">currently focused on</p>
                  <span className="font-mono text-[10px] text-zinc-700">A / 02</span>
                </div>
                <p className="mt-4 text-base leading-7 text-zinc-300">
                  Building backend and full-stack applications with Python, TypeScript, React/Next.js,
                  REST APIs, PostgreSQL/SQLite, Drizzle ORM, SQLAlchemy, Linux, Docker, and GitHub Actions.
                </p>
              </div>

              <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0a0d11] lg:col-span-12">
                <div className="grid sm:grid-cols-3">
                  <div className="capability-cell">
                    <span>01 / backend & data</span>
                    <strong>Python · SQL · PostgreSQL · REST APIs · Auth</strong>
                  </div>
                  <div className="capability-cell border-y border-white/10 sm:border-x sm:border-y-0">
                    <span>02 / systems & automation</span>
                    <strong>C/C++ · Linux · Bash · Docker · VBA</strong>
                  </div>
                  <div className="capability-cell">
                    <span>03 / interface craft</span>
                    <strong>TypeScript · React · Next.js · HTML/CSS</strong>
                  </div>
                </div>
              </div>
            </div>
        </section>

{/*---------------------------------------------------------------------------------------------------------------------------------------*/}

        {/* contact / footer section */} 
        <section
          id="contact"
          className="contact-shell scroll-mt-24 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 sm:p-8 lg:grid lg:grid-cols-[0.42fr_0.58fr] lg:gap-14 lg:p-10"
        >
          {/* left side */}
          <div>
            <p className="section-kicker">
              05 / contact
            </p>

            <h2 className="mt-5 max-w-md text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
              Let's make something useful.
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-zinc-500">
              I'm seeking software engineering roles in backend systems, data-heavy applications, and developer tooling.
            </p>
          </div>

          {/* right side (boxes) */} {/* perhaps there should be logos next to the links? */}
          <div className="mt-10 lg:mt-0">
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href="https://github.com/Ian-Keilman"
                target="_blank"
                rel="noreferrer"
                className="contact-link group"
              >
                <div className="flex items-center gap-4">
                  <span className="contact-icon"><GitHubIcon /></span>
                  <span><strong className="block text-base font-medium text-white">GitHub</strong><small className="mt-1 block text-xs text-zinc-600">Code and projects</small></span>
                </div>
                <span className="text-zinc-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-rose-300"><ArrowUpRightIcon /></span>
              </a>

              <a
                href="https://linkedin.com/in/iankeilman/"
                target="_blank"
                rel="noreferrer"
                className="contact-link group"
              >
                <div className="flex items-center gap-4">
                  <span className="contact-icon"><LinkedInIcon /></span>
                  <span><strong className="block text-base font-medium text-white">LinkedIn</strong><small className="mt-1 block text-xs text-zinc-600">Experience and updates</small></span>
                </div>
                <span className="text-zinc-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-rose-300"><ArrowUpRightIcon /></span>
              </a>

              <div className="rounded-[1.4rem] border border-white/10 bg-black/10 p-5 sm:col-span-2">
                <div className="mb-5 flex items-center gap-4 text-zinc-200">
                  <span className="contact-icon"><MailIcon /></span>
                  <span><strong className="block text-base font-medium text-white">Email</strong><small className="mt-1 block text-xs text-zinc-600">The most direct route</small></span>
                </div>

                <div className="grid gap-2 sm:grid-cols-2">
                  <a
                    href="mailto:iankeilman@proton.me"
                    className="email-link"
                  >
                    iankeilman@proton.me
                  </a>

                  <a
                    href="mailto:iantkeilman@gmail.com"
                    className="email-link"
                  >
                    iantkeilman@gmail.com
                  </a>
                </div>
              </div>
              
              {/*}
              <a
                href="#"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 text-zinc-200 transition hover:border-rose-400/40 hover:bg-white/[0.04] hover:text-rose-400"
              >
                <div className="flex items-center gap-4">
                  <FileIcon />
                  <span className="text-xl">Resume</span>
                </div>
                <span className="font-mono text-sm text-zinc-500">↗</span>
              </a> 
              */}
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-3 py-8 font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-700 sm:flex-row sm:items-center sm:justify-between sm:text-[10px]">
          <span>Ian Keilman © 2026</span>
          <span>Designed and built across frontend + backend</span>
        </footer>
      </main>
    </div>
  )
}

export default App
