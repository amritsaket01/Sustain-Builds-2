import { Link } from "react-router-dom";
import { placeholderImage } from "@/data/site";
import { Button, Container, Eyebrow, Figure, usePageTitle } from "@/components/ui";

const modules = [
  {
    name: "Water Conservation and Management",
    schedule: "Schedule VII · item (iv)",
    description:
      "Water-efficient fixtures, sub-metering, rainwater harvesting and treated-water reuse, specified from certified products.",
  },
  {
    name: "Energy Efficiency and Renewable Energy",
    schedule: "Schedule VII · item (iv)",
    description:
      "Energy-efficient lighting and fans, rooftop solar where structurally feasible, and energy metering.",
  },
  {
    name: "Solid Waste Management",
    schedule: "Schedule VII · item (iv)",
    description:
      "Source segregation, on-site composting and recycling systems, operated with student participation.",
  },
  {
    name: "Indoor Environmental Quality",
    schedule: "Schedule VII · items (ii) and (iv)",
    description:
      "Low-emission paints, boards and finishes, improved daylighting and healthier indoor air in classrooms.",
  },
];

const services = [
  {
    number: "01",
    title: "CSR project sourcing",
    description:
      "An institution's requirement is developed into a verified project profile and presented to CSR funders, at no cost to the institution.",
    checks: "Legal status, CSR registration, building ownership, utility bills, quotes",
    deliverables: "Eligibility note, project profile, introduction note",
  },
  {
    number: "02",
    title: "Green Campus build",
    description:
      "Baseline, GreenPro-based specification, supervised installation and handover. Funders pay vendors directly.",
    checks: "Meter readings, product certificates, delivery against specification, commissioning, warranties",
    deliverables: "Baseline report, specification, vendor comparison, site reports, handover pack",
  },
  {
    number: "03",
    title: "Training and workshops",
    description:
      "Practical sessions on the planning, construction, operation and measurement of green buildings, conducted on live sites.",
    checks: "Attendance, hours, before-and-after knowledge checks, feedback, consent",
    deliverables: "Session report, participant certificates, training summary for CSR reports",
  },
  {
    number: "04",
    title: "Impact reporting",
    description: "Measured before-and-after results and training reach in a board-ready report.",
    checks: "Same meters before and after, readings against bills, every figure traced to evidence",
    deliverables: "Impact report, evidence annex, data pack for an independent assessor",
  },
  {
    number: "05",
    title: "Operations and maintenance report",
    description:
      "Scheduled visits after handover to confirm that each upgrade continues to perform and deliver savings.",
    checks: "Condition of each asset, readings against baseline, upkeep log, warranty claims",
    deliverables: "Visit condition report and annual summary",
  },
];

const process = [
  ["01", "Assessment", "Site survey and baseline measurement of energy, water and waste."],
  ["02", "Specification", "Upgrades specified using GreenPro-certified products."],
  ["03", "Implementation", "Vendor selection and supervision of every installation."],
  ["04", "Training", "On-site training for students, faculty and staff."],
  ["05", "Reporting", "Measured outcomes presented in a board-ready impact report."],
];

const promises = [
  ["No vendor fees", "No fees, commissions or margins are taken from suppliers."],
  ["No cost to institutions", "Schools and colleges seeking funding are not charged at any stage."],
  ["Verified results", "Before-and-after readings for every upgrade."],
  ["Transparent fees", "The Sustain Builds fee is a separate line in every quote."],
];

export default function Solutions() {
  usePageTitle(
    "Solutions",
    "Integrated services for green CSR projects, from project identification and due diligence to implementation, capacity building and impact reporting.",
  );

  return (
    <>
      <section>
        <Container className="pb-12 pt-8 md:pb-16 md:pt-10">
          <div className="grid items-center gap-9 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-7">
              <Eyebrow>Solutions</Eyebrow>
              <h1 className="mt-4 max-w-[48rem] text-[2.7rem] leading-[1.04] md:text-[3.7rem] lg:text-[4.3rem]">
                Comprehensive services for green CSR projects
              </h1>
              <p className="mt-6 max-w-[41rem] text-lg leading-relaxed text-ink/80">
                Integrated services spanning project identification and due diligence,
                implementation, capacity building and impact reporting. Each service may be
                engaged as part of a comprehensive programme or individually.
              </p>
            </div>
            <div className="md:col-span-5">
              <Figure
                src={placeholderImage("Measurement, hands with a meter")}
                alt="Hands measuring energy use on a campus"
                caption="P08 · Measurement, hands with a meter"
                ratio="aspect-[4/3]"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="grid gap-8 py-12 md:grid-cols-12 md:gap-10 md:py-16">
          <div className="md:col-span-5">
            <Eyebrow>Green Campus</Eyebrow>
            <h2 className="mt-4 text-[2rem] leading-tight md:text-[2.7rem]">
              Green Campus: environmental and educational outcomes from one CSR project
            </h2>
            <p className="mt-5 text-ink/75">
              A CSR-funded upgrade at a single institution, combined with student workshops and a
              faculty programme on the same site. Modules may be commissioned individually or in
              combination.
            </p>
          </div>
          <ol className="divide-y divide-border border-y border-border md:col-span-6 md:col-start-7">
            {modules.map((module, index) => (
              <li key={module.name} className="grid gap-2 py-5 sm:grid-cols-[3rem_1fr] sm:gap-4">
                <span className="font-serif text-xl text-rust">0{index + 1}</span>
                <div>
                  <h3 className="text-xl">{module.name}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink/55">
                    {module.schedule}
                  </p>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/75">
                    {module.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="services" className="border-t border-border">
        <Container className="py-14 md:py-20">
          <Eyebrow>Services</Eyebrow>
          <h2 className="mt-4 max-w-[48rem] text-[2.1rem] leading-tight md:text-[3rem]">
            Five services, each with defined checks and documented deliverables
          </h2>
          <ol className="mt-10 divide-y divide-border border-y border-border">
            {services.map((service) => (
              <li key={service.number} className="grid gap-5 py-7 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-5">
                  <span className="font-serif text-2xl text-rust">{service.number}</span>
                  <h3 className="mt-2 text-xl md:text-2xl">{service.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/75">
                    {service.description}
                  </p>
                </div>
                <dl className="grid gap-4 text-[0.95rem] sm:grid-cols-2 md:col-span-7">
                  <div className="border-l-2 border-sand pl-4">
                    <dt className="font-semibold">Checks carried out</dt>
                    <dd className="mt-2 leading-relaxed text-ink/75">{service.checks}</dd>
                  </div>
                  <div className="border-l-2 border-peach pl-4">
                    <dt className="font-semibold">Deliverables</dt>
                    <dd className="mt-2 leading-relaxed text-ink/75">{service.deliverables}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="process" className="bg-sage/45">
        <Container className="py-14 md:py-20">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 text-[2.1rem] leading-tight md:text-[2.8rem]">
            A structured five-stage delivery process
          </h2>
          <ol className="mt-9 grid border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-5">
            {process.map(([number, title, description]) => (
              <li key={number} className="border-b border-ink/15 py-6 sm:px-5 lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0">
                <span className="font-serif text-3xl text-rust">{number}</span>
                <h3 className="mt-3 text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="training" className="border-t border-border">
        <Container className="grid items-center gap-9 py-14 md:grid-cols-12 md:gap-8 md:py-20">
          <div className="md:col-span-5">
            <Figure
              src={placeholderImage("College students in a hands-on workshop")}
              alt="College students taking part in a hands-on sustainability workshop"
              caption="New shot · College students in a hands-on workshop (consent needed)"
              ratio="aspect-[4/3]"
            />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Eyebrow>Training</Eyebrow>
            <h2 className="mt-4 text-[2rem] leading-tight md:text-[2.7rem]">
              Capacity building on live project sites
            </h2>
            <p className="mt-4 text-ink/75">
              Students, faculty and facilities teams learn directly from the planning,
              construction and operation of their own campus upgrades.
            </p>
            <Button to="/about#contact" variant="secondary" className="mt-6">
              Enquire about training
            </Button>
          </div>
        </Container>
      </section>

      <section id="verification" className="bg-white">
        <Container className="grid gap-8 py-14 md:grid-cols-12 md:gap-10 md:py-20">
          <div className="md:col-span-5">
            <Eyebrow>Measurement and verification</Eyebrow>
            <h2 className="mt-4 text-[2rem] leading-tight md:text-[2.7rem]">
              Results that can be traced to evidence
            </h2>
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-ink/75 md:col-span-6 md:col-start-7">
            <p>
              Savings are calculated using the International Performance Measurement and
              Verification Protocol (IPMVP). The same meters are used before and after, all
              adjustments are documented, and no estimate is presented as a measured result.
            </p>
            <p>
              Where a company requires an independent impact assessment, the assessor receives the
              raw data. Sustain Builds does not assess its own work.
            </p>
          </div>
        </Container>
      </section>

      <section id="commitments" className="scroll-mt-24 border-t border-border">
        <Container className="py-14 md:py-20">
          <Eyebrow>Contractual commitments</Eyebrow>
          <h2 className="mt-4 text-[2rem] leading-tight md:text-[2.7rem]">
            Four commitments in every contract
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map(([title, description]) => (
              <li key={title} className="border-t border-border pt-4">
                <h3 className="text-lg">{title}</h3>
                <p className="mt-2 text-[0.95rem] text-ink/75">{description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-peach/60">
        <Container className="grid gap-6 py-10 md:grid-cols-2 md:gap-8 md:py-14">
          <Link to="/solutions/funders" className="group border-t border-ink/20 pt-5">
            <Eyebrow>For CSR funders</Eyebrow>
            <h2 className="mt-3 text-2xl">A single partner for the complete project</h2>
            <span className="mt-3 inline-block font-semibold text-rust underline underline-offset-4">
              Services for funders →
            </span>
          </Link>
          <Link to="/solutions/institutions" className="group border-t border-ink/20 pt-5">
            <Eyebrow>For schools and colleges</Eyebrow>
            <h2 className="mt-3 text-2xl">No cost to the institution</h2>
            <span className="mt-3 inline-block font-semibold text-rust underline underline-offset-4">
              Funding routes for institutions →
            </span>
          </Link>
        </Container>
      </section>
    </>
  );
}
