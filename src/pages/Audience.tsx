import { Link } from "react-router-dom";
import { EnquiryForm } from "@/components/EnquiryForm";
import { placeholderImage } from "@/data/site";
import { Container, Eyebrow, Figure, usePageTitle } from "@/components/ui";

type AudienceKind = "funders" | "institutions";

const funderDeliverables = [
  ["Verified project profile", "Site, problem, products, cost and outcomes, with every document checked."],
  ["Specification and vendor comparison", "GreenPro-certified products, quotes side by side, and a recommendation."],
  ["Site progress reports", "Dated photos and checks at every stage of installation."],
  ["Handover pack", "Commissioning results, asset register, warranties in the owner's name."],
  ["Board-ready impact report", "Before-and-after results, people trained, spend, with an evidence annex."],
  ["Data for an independent assessor", "Where the CSR rules call for an independent impact assessment."],
];

const institutionSteps = [
  ["01", "Campus assessment", "A walk-through of the campus and a review of utility bills, at no cost."],
  ["02", "Project profile", "A one-page summary of the requirement, the proposed upgrade, the cost and the expected outcomes."],
  ["03", "Funder introduction", "The profile is presented to CSR teams, with the institution's written consent."],
  ["04", "Upgrade and training", "Works are carried out on campus, with structured training for students and faculty."],
];

const requirements = [
  "Access to the campus for the assessment and the work",
  "Recent utility bills for electricity and water",
  "A named staff coordinator",
  "Registration documents, to confirm the funding route",
  "Written consent before any photos or student data are used",
];

export default function Audience({ audience }: { audience: AudienceKind }) {
  const isFunder = audience === "funders";
  const title = isFunder
    ? "A single partner for the complete CSR project"
    : "CSR-funded campus upgrades, at no cost to the institution";
  const eyebrow = isFunder ? "For CSR funders and foundations" : "For schools, colleges and universities";
  const intro = isFunder
    ? "From project identification to the board-ready impact report: a verified green upgrade at a school or college, trained personnel and measured results, delivered under one contract."
    : "Each campus is assessed, a verified project profile is prepared and presented to CSR funders, and students and faculty learn directly from the completed upgrade.";
  const formType = isFunder ? "corporate" : "institution";
  usePageTitle(isFunder ? "For CSR funders" : "For institutions", intro);

  return (
    <>
      <section>
        <Container className="pb-12 pt-8 md:pb-16 md:pt-10">
          <div className="grid items-center gap-9 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-7">
              <Eyebrow>{eyebrow}</Eyebrow>
              <h1 className="mt-4 text-[2.7rem] leading-[1.04] md:text-[3.6rem] lg:text-[4.2rem]">
                {title}
              </h1>
              <p className="mt-6 max-w-[42rem] text-lg leading-relaxed text-ink/80">{intro}</p>
            </div>
            <div className="md:col-span-5">
              <Figure
                src={placeholderImage(
                  isFunder ? "Reviewing a report together" : "Campus walk-through with institution staff",
                )}
                alt={
                  isFunder
                    ? "CSR team reviewing a project report"
                    : "Campus walk-through with institution staff"
                }
                caption={
                  isFunder
                    ? "P10 · Reviewing a report together"
                    : "New shot · Campus walk-through with institution staff"
                }
                ratio="aspect-[4/3]"
              />
            </div>
          </div>
        </Container>
      </section>

      {isFunder ? (
        <>
          <section className="bg-white">
            <Container className="py-12 md:py-16">
              <div className="grid gap-8 md:grid-cols-3">
                <article className="border-t border-border pt-5">
                  <p className="font-serif text-4xl text-rust">₹13,877 cr</p>
                  <p className="mt-2 text-sm text-ink/70">CSR spent on education, FY 2024–25</p>
                </article>
                <article className="border-t border-border pt-5">
                  <p className="font-serif text-4xl text-rust">₹3,397 cr</p>
                  <p className="mt-2 text-sm text-ink/70">CSR spent on environment, FY 2024–25</p>
                </article>
                <article className="border-t border-border bg-sage/45 p-5 md:pt-5">
                  <p className="font-serif text-3xl">A single project</p>
                  <p className="mt-2 text-ink/75">
                    Addressing both themes: a greener campus and trained personnel.
                  </p>
                </article>
              </div>
              <p className="mt-5 text-xs text-ink/55">
                1 Ministry of Corporate Affairs, Lok Sabha reply, 20 July 2026.
              </p>
              <div className="mt-10 grid gap-8 border-t border-border pt-8 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-4">
                  <Eyebrow>Otherwise engaged separately</Eyebrow>
                  <ul className="mt-4 space-y-2 text-ink/75">
                    <li>A CSR advisor to identify and structure a project</li>
                    <li>A green-building consultant</li>
                    <li>Suppliers and installers to coordinate</li>
                    <li>A training provider</li>
                    <li>A reporting agency</li>
                  </ul>
                </div>
                <div className="border-l-4 border-rust bg-peach/35 p-6 md:col-span-7 md:col-start-6 md:p-8">
                  <p className="font-serif text-4xl text-rust">01</p>
                  <h2 className="mt-2 text-2xl">Sustain Builds</h2>
                  <p className="mt-3 leading-relaxed text-ink/75">
                    A single team, contract and report, from project scoping to the board-ready
                    impact report. Sustain Builds acts as the service provider, or as a partner to
                    the company's CSR foundation.
                  </p>
                </div>
              </div>
            </Container>
          </section>

          <section>
            <Container className="grid gap-8 py-14 md:grid-cols-12 md:gap-10 md:py-20">
              <div className="md:col-span-4">
                <Eyebrow>Deliverables</Eyebrow>
                <h2 className="mt-4 text-[2rem] leading-tight md:text-[2.7rem]">
                  What funders receive
                </h2>
              </div>
              <ul className="divide-y divide-border border-y border-border md:col-span-7 md:col-start-6">
                {funderDeliverables.map(([name, description]) => (
                  <li key={name} className="py-5">
                    <h3 className="text-xl">{name}</h3>
                    <p className="mt-2 text-[0.95rem] text-ink/75">{description}</p>
                  </li>
                ))}
              </ul>
            </Container>
          </section>

          <section className="bg-sage/45">
            <Container className="grid gap-8 py-12 md:grid-cols-2 md:gap-12 md:py-16">
              <article>
                <Eyebrow>Annual action plan</Eyebrow>
                <h2 className="mt-4 text-2xl">Aligned with the annual CSR plan</h2>
                <p className="mt-3 text-ink/75">
                  Verified projects are presented in time for approval of the annual action plan.
                  Support is also available for the allocation of unspent CSR funds.
                </p>
              </article>
              <article>
                <Eyebrow>Contractual commitments</Eyebrow>
                <h2 className="mt-4 text-2xl">Clear terms from the outset</h2>
                <p className="mt-3 text-ink/75">
                  Direct payment to vendors, no supplier commissions, and the fee shown separately
                  and billed at milestones.
                </p>
                <Link to="/solutions#commitments" className="mt-4 inline-block font-semibold text-rust underline underline-offset-4">
                  View the four commitments →
                </Link>
              </article>
              <article className="md:col-span-2">
                <Eyebrow>Employee training</Eyebrow>
                <p className="mt-3 max-w-[50rem] text-ink/75">
                  Facility, administration and CSR teams may participate in sessions on the same
                  site.
                </p>
              </article>
            </Container>
          </section>

          <section id="enquiry" className="scroll-mt-24">
            <Container className="grid gap-8 py-14 md:grid-cols-12 md:gap-10 md:py-20">
              <div className="md:col-span-5">
                <Eyebrow>CSR planning</Eyebrow>
                <h2 className="mt-4 text-[2rem] leading-tight md:text-[2.7rem]">
                  Talk through your CSR programme
                </h2>
                <p className="mt-4 text-ink/75">
                  Please share when the CSR plan is decided and which themes are funded. Sustain
                  Builds will respond with a shortlist of verified project profiles.
                </p>
              </div>
              <div className="rounded-sm bg-peach/45 p-5 md:col-span-6 md:col-start-7 md:p-8">
                <EnquiryForm variant="full" defaultType={formType} submitLabel="Send enquiry" />
              </div>
            </Container>
          </section>
        </>
      ) : (
        <>
          <section className="bg-white">
            <Container className="py-12 md:py-16">
              <Eyebrow>Campus assessment</Eyebrow>
              <h2 className="mt-4 max-w-[46rem] text-[2rem] leading-tight md:text-[2.8rem]">
                From the first visit to a funded upgrade
              </h2>
              <ol className="mt-8 grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">
                {institutionSteps.map(([number, title, description]) => (
                  <li key={number} className="border-b border-border py-6 sm:px-5 lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0">
                    <span className="font-serif text-3xl text-rust">{number}</span>
                    <h3 className="mt-3 text-xl">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/75">{description}</p>
                    {number === "04" && (
                      <Link to="/solutions#training" className="mt-3 inline-block text-sm font-semibold text-rust underline underline-offset-4">
                        Training formats →
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </Container>
          </section>

          <section className="bg-sage/45">
            <Container className="grid gap-8 py-14 md:grid-cols-12 md:gap-10 md:py-20">
              <div className="md:col-span-4">
                <Eyebrow>Funding routes</Eyebrow>
                <h2 className="mt-4 text-[2rem] leading-tight md:text-[2.7rem]">
                  Campus ownership decides the funding route
                </h2>
                <p className="mt-4 text-ink/75">
                  CSR rules allow upgrades held by a public authority, or by a registered trust or
                  society with a CSR registration number. 1 The route is confirmed at the first
                  visit.
                </p>
              </div>
              <div className="divide-y divide-ink/15 border-y border-ink/15 md:col-span-7 md:col-start-6">
                <article className="py-5">
                  <h3 className="text-xl">Government institutions</h3>
                  <p className="mt-2 text-ink/75">
                    The upgrade is held by the public authority that runs the school or college.
                  </p>
                </article>
                <article className="py-5">
                  <h3 className="text-xl">Trust or society run</h3>
                  <p className="mt-2 text-ink/75">
                    The trust or society must be registered and hold a CSR registration number.
                  </p>
                </article>
                <article className="py-5">
                  <h3 className="text-xl">Private institutions</h3>
                  <p className="mt-2 text-ink/75">
                    The right route is agreed at the first visit, including paid training or an
                    investor introduction.
                  </p>
                </article>
                <p className="py-4 text-xs text-ink/55">
                  1 Companies (Corporate Social Responsibility Policy) Rules 2014, Rule 7(4).
                </p>
              </div>
            </Container>
          </section>

          <section>
            <Container className="grid items-center gap-8 py-12 md:grid-cols-12 md:gap-10 md:py-16">
              <div className="md:col-span-5">
                <Eyebrow>What is required</Eyebrow>
                <h2 className="mt-4 text-[2rem] leading-tight md:text-[2.7rem]">
                  What is required from the institution
                </h2>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <ul className="divide-y divide-border border-y border-border">
                  {requirements.map((item, index) => (
                    <li key={item} className="flex gap-4 py-4">
                      <span className="font-serif text-lg text-rust">0{index + 1}</span>
                      <span className="text-ink/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Container>
          </section>

          <section id="enquiry" className="scroll-mt-24 bg-white">
            <Container className="grid items-center gap-8 py-14 md:grid-cols-12 md:gap-10 md:py-20">
              <div className="md:col-span-5">
                <Figure
                  src={placeholderImage("Facilities staff reviewing utility bills")}
                  alt="Facilities staff reviewing campus utility bills"
                  caption="New shot · Facilities staff reviewing utility bills"
                  ratio="aspect-[4/3]"
                />
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <Eyebrow>Campus assessment</Eyebrow>
                <h2 className="mt-4 text-[2rem] leading-tight md:text-[2.7rem]">
                  Share details about your campus
                </h2>
                <p className="mt-4 text-ink/75">
                  Please share details of the campus. Sustain Builds will confirm the funding route
                  and agree a date for the visit.
                </p>
                <EnquiryForm
                  variant="full"
                  defaultType={formType}
                  submitLabel="Submit assessment request"
                  className="mt-7 rounded-sm bg-peach/45 p-5 md:p-7"
                />
              </div>
            </Container>
          </section>
        </>
      )}
    </>
  );
}
