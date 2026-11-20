import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { placeholderImage } from "@/data/site";
import { Container, Eyebrow, Figure, usePageTitle } from "@/components/ui";

const modules = [
  {
    name: "Water Conservation and Management",
    schedule: "Schedule VII · item (iv)",
  },
  {
    name: "Energy Efficiency and Renewable Energy",
    schedule: "Schedule VII · item (iv)",
  },
  {
    name: "Solid Waste Management",
    schedule: "Schedule VII · item (iv)",
  },
  {
    name: "Indoor Environmental Quality",
    schedule: "Schedule VII · items (ii) and (iv)",
  },
];

const commitments = [
  {
    title: "Planning",
    heading: "Ready for the annual action plan",
    body: "Scope, budget and milestones defined in advance, ready for approval by the CSR committee and the board.",
  },
  {
    title: "Compliance",
    heading: "Eligibility verified first",
    body: "Institution status, CSR registration and ownership of the capital asset verified against the CSR rules before funds are committed.",
  },
  {
    title: "Governance",
    heading: "A complete audit trail",
    body: "Approvals, invoices and site evidence documented at every stage to support the CFO's certification of CSR spend.",
  },
  {
    title: "Impact",
    heading: "Measured and reportable",
    body: "Before-and-after results for the annual CSR report, and data ready for an independent impact assessment where required.",
  },
];

const deliveryStages = [
  ["01", "Assessment", "Site survey and baseline measurement of energy, water and waste."],
  ["02", "Specification", "Upgrades specified using GreenPro-certified products."],
  ["03", "Implementation", "Vendor selection and supervision of every installation."],
  ["04", "Training", "On-site training for students, faculty and staff."],
  ["05", "Reporting", "Measured outcomes presented in a board-ready impact report."],
];

type NetworkInformation = EventTarget & {
  effectiveType?: string;
  saveData?: boolean;
};

type NavigatorWithConnection = Navigator & {
  connection?: NetworkInformation;
};

function prefersHeroPoster() {
  const connection = (navigator as NavigatorWithConnection).connection;
  return (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    connection?.saveData === true ||
    connection?.effectiveType === "slow-2g" ||
    connection?.effectiveType === "2g" ||
    connection?.effectiveType === "3g"
  );
}

const reasons = [
  {
    number: "01",
    label: "CSR is a legal duty",
    body: "Qualifying companies spend 2% of average net profit on CSR. Unspent amounts must move to a dedicated account or a government fund, and non-compliance attracts penalties.",
  },
  {
    number: "02",
    label: "Two approved themes in one project",
    body: "Education and environmental sustainability are both approved CSR activities, so one campus upgrade with training serves both.",
  },
  {
    number: "03",
    label: "Maharashtra rewards green buildings",
    body: "State and Pune rules grant additional floor area to IGBC-rated buildings, and Pune Municipal Corporation offers premium discounts for GRIHA-rated projects.",
  },
  {
    number: "04",
    label: "Public bodies set the standard",
    body: "Maharashtra requires a GRIHA three-star rating for government buildings, and public works departments use GreenPro for green procurement.",
  },
];

export default function Home() {
  const [usePoster, setUsePoster] = useState(prefersHeroPoster);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as NavigatorWithConnection).connection;
    const updatePreference = () => setUsePoster(prefersHeroPoster());
    updatePreference();
    preference.addEventListener("change", updatePreference);
    connection?.addEventListener("change", updatePreference);
    return () => {
      preference.removeEventListener("change", updatePreference);
      connection?.removeEventListener("change", updatePreference);
    };
  }, []);

  usePageTitle(
    "Home",
    "Sustain Builds converts CSR commitments into green campus infrastructure at schools, colleges and public buildings, with trained personnel and verified results.",
  );

  return (
    <>
      <section className="home-hero relative isolate overflow-hidden border-b border-white/15">
        {usePoster ? (
          <img
            className="home-hero-poster"
            src="/homepage-poster.jpg"
            alt=""
            aria-hidden="true"
            width={3840}
            height={2160}
          />
        ) : (
          <video
            className="home-hero-video"
            aria-hidden="true"
            tabIndex={-1}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/homepage-poster.jpg"
          >
            <source src="/homepage1.mp4" type="video/mp4" />
          </video>
        )}
        <div className="home-hero-shade" aria-hidden="true" />
        <Container className="relative z-10 grid min-h-[720px] items-center gap-8 py-28 md:min-h-[100svh] md:grid-cols-12 md:gap-8">
          <div className="md:col-span-9 lg:col-span-8">
            <Eyebrow tone="sand" className="home-hero-enter home-hero-enter-1">
              Green Campus · Corporate social responsibility
            </Eyebrow>
            <h1 className="home-hero-enter home-hero-enter-2 mt-5 max-w-[42rem] text-[3rem] leading-[1.03] text-white md:text-[4.5rem] lg:text-[5rem]">
              Rooted in knowledge for a better future.
            </h1>
            <p className="home-hero-enter home-hero-enter-3 mt-6 max-w-[42rem] text-lg leading-relaxed text-white/90 md:text-xl">
              CSR commitments converted into green infrastructure at schools, colleges and public
              buildings, supported by trained personnel and verified results suitable for board
              reporting.
            </p>
            <p className="home-hero-enter home-hero-enter-4 mt-5 font-serif text-xl text-sand">
              Build it. Teach it. Report it.
            </p>
          </div>
        </Container>
      </section>

      <section aria-label="Choose your path" className="bg-white">
        <Container className="grid divide-y divide-border md:grid-cols-2 md:divide-x md:divide-y-0">
          <Link
            to="/solutions/funders"
            className="group py-8 transition-colors hover:text-rust md:pr-8 md:py-10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.13em] text-rust">
              For corporates and foundations
            </p>
            <h2 className="mt-3 text-2xl">Green CSR programmes</h2>
            <p className="mt-2 max-w-[34rem] text-ink/75 group-hover:text-ink">
              Schedule VII-aligned projects with verified eligibility, transparent governance and
              board-ready impact reporting.
            </p>
            <span className="mt-4 inline-block text-sm font-semibold underline decoration-1 underline-offset-4">
              View services for funders →
            </span>
          </Link>
          <Link
            to="/solutions/institutions"
            className="group border-border py-8 transition-colors hover:text-rust md:pl-8 md:py-10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.13em] text-rust">
              For schools, colleges and universities
            </p>
            <h2 className="mt-3 text-2xl">Campus upgrades through CSR funding</h2>
            <p className="mt-2 max-w-[34rem] text-ink/75 group-hover:text-ink">
              A campus assessment, a verified project profile and an introduction to CSR funders,
              at no cost to the institution.
            </p>
            <span className="mt-4 inline-block text-sm font-semibold underline decoration-1 underline-offset-4">
              View the process for institutions →
            </span>
          </Link>
        </Container>
      </section>

      <section className="border-t border-border">
        <Container className="py-14 md:py-20">
          <div className="max-w-[46rem]">
            <Eyebrow>Why Sustain Builds</Eyebrow>
            <h2 className="mt-4 text-[2.1rem] leading-tight md:text-[3rem]">
              Green-building expertise, applied to corporate social responsibility
            </h2>
          </div>
          <div className="mt-10 grid gap-8 border-t border-border pt-8 md:grid-cols-3 md:gap-10">
            <article>
              <p className="text-sm font-semibold uppercase tracking-wide text-rust">Practitioner-led</p>
              <h3 className="mt-3 text-xl">Certified green-building expertise</h3>
              <p className="mt-3 text-ink/75">
                Founded and led by an architect and IGBC Accredited Professional with experience on
                LEED Platinum and IGBC Platinum-certified projects.
              </p>
              <Link to="/about#leadership" className="mt-4 inline-block text-sm font-semibold text-rust underline underline-offset-4">
                View the experience →
              </Link>
            </article>
            <article>
              <p className="text-sm font-semibold uppercase tracking-wide text-rust">
                Single point of accountability
              </p>
              <h3 className="mt-3 text-xl">One partner, one contract</h3>
              <p className="mt-3 text-ink/75">
                Project identification, due diligence, implementation, training and impact reporting
                are delivered under a single contract, without the need to coordinate multiple
                agencies.
              </p>
              <Link to="/solutions" className="mt-4 inline-block text-sm font-semibold text-rust underline underline-offset-4">
                View the services →
              </Link>
            </article>
            <article>
              <p className="text-sm font-semibold uppercase tracking-wide text-rust">
                Transparency by contract
              </p>
              <h3 className="mt-3 text-xl">Commitments written into every agreement</h3>
              <p className="mt-3 text-ink/75">
                No commissions from suppliers, vendors paid directly by the funder, the fee shown
                as a separate line, and results reported only from measured data.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-sage/45">
        <Container className="py-14 md:py-20">
          <div className="grid gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-4">
              <Eyebrow>Why green CSR now</Eyebrow>
              <h2 className="mt-4 text-[2.1rem] leading-tight md:text-[2.7rem]">
                Government rules and incentives reward measurable green projects
              </h2>
              <p className="mt-5 text-ink/75">
                CSR spending is a legal duty for qualifying companies, and state rules increasingly
                favour green-rated buildings. A Green Campus project allows one CSR budget to meet
                these expectations in a visible and verifiable way.
              </p>
            </div>
            <ol className="divide-y divide-ink/15 border-y border-ink/15 md:col-span-7 md:col-start-6">
              {reasons.map((item) => (
                <li key={item.number} className="grid gap-2 py-5 sm:grid-cols-[3rem_1fr] sm:gap-5">
                  <span className="font-serif text-xl text-rust">{item.number}</span>
                  <div>
                    <h3 className="text-xl">{item.label}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/75">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <p className="mt-8 max-w-[65rem] text-sm leading-relaxed text-ink/60">
            Eligibility for each incentive depends on the site and its owner. Sustain Builds
            confirms what applies at the first assessment.
          </p>
          <p className="mt-3 max-w-[65rem] text-xs leading-relaxed text-ink/55">
            1 Companies Act 2013, Section 135 and Schedule VII; Companies (CSR Policy) Amendment
            Rules 2021. 2 Indian Green Building Council, government incentives for IGBC-rated
            projects; GRIHA Council, Pune Municipal Corporation incentives. 3 GRIHA Council,
            Maharashtra adoption of GRIHA; CII-Sohrabji Godrej Green Business Centre, GreenPro.
          </p>
        </Container>
      </section>

      <section className="border-t border-border">
        <Container className="grid gap-10 py-14 md:grid-cols-12 md:gap-8 md:py-20">
          <div className="md:col-span-5">
            <Eyebrow>Green Campus</Eyebrow>
            <h2 className="mt-4 text-[2.1rem] leading-tight md:text-[2.7rem]">
              Built around what a CSR committee needs
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/75">
              One Schedule VII-aligned project that delivers environmental sustainability and
              education outcomes together, with the governance, evidence and accountability a board
              expects.
            </p>
            <Link to="/solutions" className="mt-6 inline-block font-semibold text-rust underline underline-offset-4">
              Explore Green Campus →
            </Link>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-sm font-semibold uppercase tracking-wide text-ink/60">
              Project modules aligned to Schedule VII
            </p>
            <ol className="mt-4 divide-y divide-border border-y border-border">
              {modules.map((module, index) => (
                <li key={module.name} className="flex items-start gap-4 py-4">
                  <span className="font-serif text-xl text-rust">0{index + 1}</span>
                  <div>
                    <h3 className="text-lg">{module.name}</h3>
                    <p className="mt-1 text-sm text-ink/60">{module.schedule}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-white">
        <Container className="grid items-center gap-8 py-10 md:grid-cols-12 md:gap-10 md:py-14">
          <div className="md:col-span-5">
            <Figure
              src={placeholderImage("Water and waste systems")}
              alt="Green campus water and waste infrastructure"
              caption="P13 · Water and waste systems"
              ratio="aspect-[16/10]"
            />
          </div>
          <ol className="grid gap-6 sm:grid-cols-2 md:col-span-7">
            {commitments.map((item) => (
              <li key={item.title} className="border-t border-border pt-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-rust">{item.title}</p>
                <h3 className="mt-2 text-lg">{item.heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{item.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="delivery" className="border-t border-border">
        <Container className="py-14 md:py-20">
          <div className="grid gap-6 md:grid-cols-12 md:items-end md:gap-8">
            <div className="md:col-span-7">
              <Eyebrow>Delivery and capacity building</Eyebrow>
              <h2 className="mt-4 text-[2.1rem] leading-tight md:text-[2.8rem]">
                A structured five-stage delivery process
              </h2>
            </div>
            <p className="text-ink/75 md:col-span-5">
              Each project includes on-site training for students, faculty and staff, so that the
              upgrade continues to deliver value after handover.
            </p>
          </div>
          <ol className="mt-10 grid gap-0 border-t border-border sm:grid-cols-2 lg:grid-cols-5">
            {deliveryStages.map(([number, title, description]) => (
              <li key={number} className="border-b border-border py-6 sm:px-5 lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0">
                <span className="font-serif text-3xl text-rust">{number}</span>
                <h3 className="mt-3 text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{description}</p>
              </li>
            ))}
          </ol>
          <Link to="/solutions#training" className="mt-7 inline-block font-semibold text-rust underline underline-offset-4">
            View the delivery process and training formats →
          </Link>
        </Container>
      </section>

    </>
  );
}
