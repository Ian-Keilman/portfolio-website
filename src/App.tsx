// main portfolio page

function App() {

  {/* Link icons for the 'contact' section */}
  function GitHubIcon() {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56v-2.03c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.19-3.12-.12-.3-.52-1.5.11-3.13 0 0 .97-.31 3.18 1.19a10.9 10.9 0 0 1 5.79 0c2.2-1.5 3.17-1.19 3.17-1.19.63 1.63.23 2.83.11 3.13.74.82 1.19 1.86 1.19 3.12 0 4.43-2.69 5.4-5.25 5.68.41.36.77 1.06.77 2.14v3.17c0 .31.21.68.8.56A11.53 11.53 0 0 0 23.5 12C23.5 5.66 18.34.5 12 .5Z" />
      </svg>
    )
  }

  function LinkedInIcon() {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM2.75 9.75h4.46v11.75H2.75ZM9.75 9.75h4.27v1.6h.06c.6-1.13 2.05-2.32 4.22-2.32 4.5 0 5.33 2.96 5.33 6.8v5.67h-4.45v-5.03c0-1.2-.02-2.75-1.67-2.75-1.68 0-1.94 1.31-1.94 2.66v5.12H9.75Z" />
      </svg>
    )
  }

  function MailIcon() {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path d="M3 6.75h18v10.5H3z" />
        <path d="m4 8 8 6 8-6" />
      </svg>
    )
  }

  function FileIcon() {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path d="M7 3.75h7l4 4v12.5H7z" />
        <path d="M14 3.75v4h4" />
      </svg>
    )
  }

  {/* note: consider adding a rickroll button for fun? */}

{/*---------------------------------------------------------------------------------------------------------------------------------------*/}

  return (
    // whole page
    <div id="home" className="min-h-screen bg-[#050608] text-zinc-100">
      {/* top nav */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#050608]/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between px-6 py-5">
          {/* left side: name */}
          <a
            href="#home"
            className="font-mono text-[15px] tracking-tight text-white transition hover:text-rose-400"
          >
            Ian Keilman
          </a>

          {/* right side: nav links */}
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-[13px] uppercase tracking-[0.18em] text-zinc-400">
            <a href="#experience" className="transition hover:text-rose-400">
              experience
            </a>
            <a href="#projects" className="transition hover:text-rose-400">
              projects
            </a>
            <a href="#about" className="transition hover:text-rose-400">
              about
            </a>
            <a href="#contact" className="transition hover:text-rose-400">
              contact
            </a>
          </nav>
        </div>
      </header>

{/*---------------------------------------------------------------------------------------------------------------------------------------*/}

      {/* main content */}
      <main className="mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-24">
        {/* intro / hero section */}
        <section className="border-b border-white/10 pb-20">
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            {/* left side text */}
            <div className="md:col-span-8">
              <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-rose-400/70">
                Software Engineer · UC Santa Cruz Graduate
              </p>

              <div className="mt-8 max-w-4xl">
                <h1 className="text-5xl font-semibold leading-[1.04] tracking-tight text-white md:text-7xl">
                  Ian Keilman
                </h1>

                <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
                  Software Engineer with full-time contract experience and 3 internships building backend/database systems, internal
                  tools, and data-heavy applications. Strong with Python, TypeScript, C/C++, SQL, PostgreSQL, React/Next.js, and Linux.
                </p>
              </div>

              <p className="mt-5 font-mono text-sm text-zinc-400">
                San Francisco Bay Area, CA · U.S. Citizen
              </p>
              <a
                href="/Ian_Keilman_resume.pdf"
                className="mt-6 inline-flex items-center gap-3 rounded-xl border border-white/10 px-5 py-3 text-zinc-200 transition hover:border-rose-400/40 hover:text-rose-400"
              >
                <FileIcon />
                View résumé ↗
              </a>

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

            {/* right side image */}
            <div className="md:col-span-4">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                <img
                  src="/portrait.jpg"
                  alt="Portrait of Ian Keilman"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
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
          className="border-t border-white/10 py-20"
        >
          {/* section intro */}
          <div className="md:col-span-4">
            <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-rose-400/70">
              experience
            </p>

            {/*
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white">
              Work/Internship experience
            </h2>
            */}
          </div>

          {/* right column: all experience cards go inside this one wrapper */}
          <div className="mt-10 space-y-6">
            {/* Current contract */}
            <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
              <p className="font-mono text-[13px] text-zinc-500">
                American Soil Testing & Engineering Inc. • Alamo, CA (Remote) | August 2026 - Present
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                Software Engineer | Contract, Project Lead
              </h3>
              <ul className="mt-6 space-y-3 text-base leading-7 text-zinc-400">
                <li>• Led a small development team to deliver a custom reporting application, solely owning UI/UX design and system architecture while translating evolving client requirements using TypeScript, React, Node.js, and Electron.</li>
                <li>• Built reusable report templates, autofill workflows, and a PDF/DOCX ingestion pipeline using PDF.js and Tesseract OCR to support editing legacy documents containing text, images, tables, and metadata.</li>
                <li>• Engineered schema-validated offline persistence with atomic file writes, IndexedDB, and filesystem synchronization, enabling offline editing and file sharing through a Google Drive–synced folder without a custom cloud backend.</li>
                <li>• Developed collision-aware document layout, cross-page reflow, and PDF export; expanded the regression suite to 355 automated tests across 26 test files.</li>
              </ul>
            </article>

            {/* Internship 3 */}
            <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
              <p className="font-mono text-[13px] text-zinc-500">
                Zee Foods, LLC. • Fremont, CA (Remote) | May 2026 - August 2026
              </p>

              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                Software Engineering Intern | Backend & Database
              </h3>

              <ul className="mt-6 space-y-3 text-base leading-7 text-zinc-400">
                <li>• Built backend/database features for Polaris, a full-stack internal operations platform replacing B2B SaaS workflows</li>
                <li>• Created order management features with PostgreSQL schemas, Drizzle, CRUD, server actions, and SKU-linked records</li>
                <li>• Added RLS/CASL authorization, real-time UI updates, integration tests, and end-to-end validation</li>
              </ul>
            </article>

            {/* Internship 2 */}
            <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
              <p className="font-mono text-[13px] text-zinc-500">
                Bishop-Wisecarver • Pittsburg, CA | February 2026 - May 2026
              </p>

              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                Software Engineering Intern | Robotics & Automation
              </h3>
              
              <div className="shrink-0 font-mono text-[13px] uppercase tracking-[0.18em] text-zinc-500">
                Internship
              </div>

              {/* Overview text */}
              {/*
              <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
                Internship experience focused on practical engineering work across automation,
                tooling, robotics-related workflows, and technical support for development tasks.
              </p>
              */}

              <ul className="mt-6 space-y-3 text-base leading-7 text-zinc-400">
                <li>• Built a local torque-spec lookup tool to map product/part numbers to fastener lists and reduce manual lookup time</li>
                <li>• Programmed and calibrated robotic arm routines for automated scanning workflows, validating motion behavior</li>
                <li>• Validated computer vision training data in CVAT through labeling QA, spot reviews, and consistency audits</li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {/* making this tag a comment for now, because I only have internships so far*/}
                {/* <span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">
                  internship
                </span> */}
                <span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">
                  Robotics
                </span>
                <span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">
                  Programming
                </span>
                <span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">
                  CAD
                </span>
              </div>
            </article>

{/* Note: make sure experience is sorted properly by recency (most recent goes on top) */}

            {/* Internship 1 */}
            <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
              <p className="font-mono text-[13px] text-zinc-500">
                Grand Petroleum Inc. • Pleasant Hill, CA (Remote) | September 2024 - August 2025
              </p>

              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                Software Engineering Intern | Backend & Data Automation
              </h3>

              <div className="shrink-0 font-mono text-[13px] uppercase tracking-[0.18em] text-zinc-500">
                Internship
              </div>

              {/*Overview text*/}
              {/*
              <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">

              </p>
              */}

              <ul className="mt-6 space-y-3 text-base leading-7 text-zinc-400">
                <li>• Built an Excel/VBA automation suite that converted raw multi-store exports into standardized sales/margin reports</li>
                <li>• Added automated validation and exception flagging for missing data, outliers, and pricing/cost/profit mismatches</li>
                <li>• Designed one-click workflows for non-technical users, reducing manual spreadsheet review time</li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {/*<span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">
                  internship
                </span>*/}
                <span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">
                  Automation
                </span>
                <span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">
                  Data science
                </span>
                <span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">
                  Tooling
                </span>
                <span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">
                  Excel
                </span>
                <span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">
                  VBA
                </span>
              </div>
            </article>
          </div>
        </section>

{/*---------------------------------------------------------------------------------------------------------------------------------------*/}

        {/* education section */}
        <section
          id="education"
          className="border-t border-white/10 py-20"
        >
          <div className="md:col-span-4">
            <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-rose-400/70">
              education
            </p>
          </div>

          <div className="mt-10">
            <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
              <p className="font-mono text-[13px] text-zinc-500">
                University of California, Santa Cruz • 2026
              </p>

              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                Bachelor’s Degree, Computer Science and Engineering
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-400">
                Focus in networking & digital technology
              </p>
            </article>
          </div>
        </section>

{/*---------------------------------------------------------------------------------------------------------------------------------------*/}

        {/* projects */}
        <section id="projects" className="border-t border-white/10 py-16">
          <h2 className="font-mono text-[13px] uppercase tracking-[0.18em] text-rose-400/70">
            Featured Projects
          </h2>
          <div className="mt-10 space-y-6">
            <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-white/20 hover:bg-white/[0.03]">
              <h3 className="text-3xl font-semibold tracking-tight text-white">sorter.ly</h3>
              <p className="mt-5 text-lg leading-8 text-zinc-300">Local-first customizable collection manager</p>
              <ul className="mt-6 space-y-3 text-base leading-7 text-zinc-400">
                <li>• Local-first customizable collection manager with dynamic fields, typed records, and private SQLite-backed storage</li>
                <li>• Implemented record CRUD, typed sorting and filtering, and CSV import/export in a full-stack web application</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">Next.js</span>
                <span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">React</span>
                <span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">TypeScript</span>
                <span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">SQLite</span>
                <span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">Drizzle ORM</span>
              </div>
              <a href="https://github.com/Ian-Keilman/sorter.ly" className="mt-6 inline-block text-sm text-zinc-400 transition hover:text-rose-400">
                GitHub ↗
              </a>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-white/20 hover:bg-white/[0.03]">
              <h3 className="text-3xl font-semibold tracking-tight text-white">HedgeSlice</h3>
              <p className="mt-5 text-lg leading-8 text-zinc-300">Price-time priority limit order book · In development</p>
              <ul className="mt-6 space-y-3 text-base leading-7 text-zinc-400">
                <li>• Implementing a price-time priority limit order book with limit/market orders, cancellations, and trade execution logs</li>
                <li>• Building matching logic with ordered maps, queues, and hash tables; validating edge cases with unit tests</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">C++</span>
                <span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">STL</span>
                <span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">GoogleTest</span>
              </div>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-white/20 hover:bg-white/[0.03]">
              <h3 className="text-3xl font-semibold tracking-tight text-white">FaultSift</h3>
              <p className="mt-5 text-lg leading-8 text-zinc-300">Linux log triage command-line tool</p>
              <ul className="mt-6 space-y-3 text-base leading-7 text-zinc-400">
                <li>• Scans log files, flags failures, and summarizes severity</li>
                <li>• Separates matching, scanning, scoring, and reporting into modules, with pytest validation</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">Python</span>
                <span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">Regex</span>
                <span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">Pytest</span>
                <span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">Git</span>
                <span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">CLI</span>
              </div>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-white/20 hover:bg-white/[0.03]">
              <h3 className="text-3xl font-semibold tracking-tight text-white">TraceShelf</h3>
              <p className="mt-5 text-lg leading-8 text-zinc-300">Authenticated record-management backend</p>
              <ul className="mt-6 space-y-3 text-base leading-7 text-zinc-400">
                <li>• FastAPI backend for authenticated, per-user record, issue, and activity CRUD</li>
                <li>• PostgreSQL and Alembic migrations, API tests, GitHub Actions CI, and pull request review</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">Python</span>
                <span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">FastAPI</span>
                <span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">PostgreSQL</span>
                <span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">SQLAlchemy</span>
                <span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">Alembic</span>
                <span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">Pytest</span>
                <span className="rounded-xl border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">Docker</span>
              </div>
            </article>
          </div>
        </section>

        {/* about section */}
        <section
          id="about"
          className="grid gap-12 border-t border-white/10 py-20 md:grid-cols-12"
        >
          {/* left column */}
          <div className="md:col-span-4">
            <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-rose-400/70">
              about
            </p>

          </div>

          {/* right column */}
          <div className="space-y-8 md:col-span-8">
            <p className="max-w-3xl text-lg leading-8 text-zinc-300">
              I studied computer science, engineering, and robotics because I've never been interested in <em>just</em> one side of technology.
              I've long been drawn to mechanical, electrical, computer, and software engineering, and robotics felt like the one field that brought all of them together. 
              It gave me a way to pursue broad technical interests without narrowing myself too early. 
              That mindset still shapes the kind of work I'm most drawn to: projects that connect disciplines and let me build across more than one layer of a system.
            </p>

            {/* smaller fact grid */}
            <div className="grid gap-6 pt-2 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <p className="font-mono text-[13px] text-zinc-500">interests</p>
                <p className="mt-4 text-base leading-7 text-zinc-300">
                  Backend systems, database-driven applications, developer tooling,
                  data automation, robotics, and computer vision.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <p className="font-mono text-[13px] text-zinc-500">currently focused on</p>
                <p className="mt-4 text-base leading-7 text-zinc-300">
                  Leading development of a reporting application with TypeScript, React, Node.js, and Electron,
                  owning UI/UX design and system architecture, and building offline document workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

{/*---------------------------------------------------------------------------------------------------------------------------------------*/}

        <section id="skills" className="border-t border-white/10 py-20">
          <h2 className="font-mono text-[13px] uppercase tracking-[0.18em] text-rose-400/70">Skills</h2>
          <dl className="mt-10 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <dt className="font-mono text-sm text-zinc-400">Languages</dt>
              <dd className="mt-3 text-base leading-7 text-zinc-300">C/C++, Python, Java, JavaScript/TypeScript, SQL, HTML/CSS, VBA</dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <dt className="font-mono text-sm text-zinc-400">Web Development</dt>
              <dd className="mt-3 text-base leading-7 text-zinc-300">React.js, Next.js</dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <dt className="font-mono text-sm text-zinc-400">Backend/Data</dt>
              <dd className="mt-3 text-base leading-7 text-zinc-300">REST APIs, authentication, CRUD, data validation, PostgreSQL, SQLite, Drizzle ORM, SQLAlchemy</dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <dt className="font-mono text-sm text-zinc-400">Tools</dt>
              <dd className="mt-3 text-base leading-7 text-zinc-300">Git, Linux, Bash, Docker, Node.js, Excel, GitHub Actions</dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <dt className="font-mono text-sm text-zinc-400">Machine Learning/Computer Vision</dt>
              <dd className="mt-3 text-base leading-7 text-zinc-300">CVAT, dataset QA</dd>
            </div>
          </dl>
        </section>

        {/* contact / footer section */} 
        <section
          id="contact"
          className="grid gap-12 border-t border-white/10 py-20 md:grid-cols-12"
        >
          {/* left side */}
          <div className="md:col-span-4">
            <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-rose-400/70">
              contact
            </p>


            <p className="mt-5 max-w-md text-lg leading-8 text-zinc-300">
              Reach out to me through these links:
            </p>
          </div>

          {/* right side (boxes) */} {/* perhaps there should be logos next to the links? */}
          <div className="md:col-span-8">
            <div className="space-y-4">
              <a
                href="https://github.com/Ian-Keilman"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 text-zinc-200 transition hover:border-rose-400/40 hover:bg-white/[0.04] hover:text-rose-400"
              >
                <div className="flex items-center gap-4">
                  <GitHubIcon />
                  <span className="text-xl">GitHub</span>
                </div>
                <span className="font-mono text-sm text-zinc-500">↗</span>
              </a>

              <a
                href="https://linkedin.com/in/iankeilman/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 text-zinc-200 transition hover:border-rose-400/40 hover:bg-white/[0.04] hover:text-rose-400"
              >
                <div className="flex items-center gap-4">
                  <LinkedInIcon />
                  <span className="text-xl">LinkedIn</span>
                </div>
                <span className="font-mono text-sm text-zinc-500">↗</span>
              </a>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
                <div className="mb-4 flex items-center gap-4 text-zinc-200">
                  <MailIcon />
                  <span className="text-xl">Email</span>
                </div>

                <div className="grid gap-3">
                  <a
                    href="mailto:iantkeilman@gmail.com"
                    className="rounded-xl border border-white/10 px-4 py-3 text-sm text-zinc-300 transition hover:border-rose-400/40 hover:text-rose-400"
                  >
                    iantkeilman@gmail.com
                  </a>
                </div>
              </div>
              
              <a
                href="tel:+19253789666"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 text-zinc-200 transition hover:border-rose-400/40 hover:bg-white/[0.04] hover:text-rose-400"
              >
                <span className="text-xl">(925) 378-9666</span>
                <span className="font-mono text-sm text-zinc-500">↗</span>
              </a>

              <a
                href="/Ian_Keilman_resume.pdf"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 text-zinc-200 transition hover:border-rose-400/40 hover:bg-white/[0.04] hover:text-rose-400"
              >
                <div className="flex items-center gap-4">
                  <FileIcon />
                  <span className="text-xl">Resume</span>
                </div>
                <span className="font-mono text-sm text-zinc-500">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
