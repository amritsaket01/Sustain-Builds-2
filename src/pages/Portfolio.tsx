import { placeholderImage } from "@/data/site";
import { Button, Container, Eyebrow, Figure, Pending, usePageTitle } from "@/components/ui";

const experience = [
  {
    image: "Operational office campus, no logos",
    category: "LEED O+M · Workplace",
    title: "Operational office campus certified for sustainable performance",
    area: "area, sq ft",
    location: "Bengaluru, Karnataka",
    services:
      "Performance baseline for energy, water and waste; operations and maintenance policies; occupant comfort survey; documentation and submission for LEED Operations and Maintenance certification.",
    outcome: (
      <>
        LEED O+M Platinum. <Pending>Key measured result, e.g. energy or water reduction, to be confirmed</Pending>
      </>
    ),
  },
  {
    image: "Office interior fit-out, no logos",
    category: "LEED ID+C · Workplace interiors",
    title: "Corporate office interior designed for occupant health",
    area: "area, sq ft",
    location: "Mumbai, Maharashtra",
    services:
      "Green specification of materials and finishes; lighting and water-efficiency targets; indoor air quality plan during construction; documentation for LEED Interior Design and Construction.",
    outcome: (
      <>
        LEED ID+C Platinum. <Pending>Key result to be confirmed</Pending>
      </>
    ),
  },
  {
    image: "Logistics park from above, no logos",
    category: "IGBC precertification · Industrial and logistics",
    title: "Logistics park planned to green-building standards from the design stage",
    area: "area, sq ft",
    location: "City, State",
    services:
      "Design-stage review of site planning, energy and water strategy; credit-by-credit assessment against the IGBC rating; precertification submission.",
    outcome: (
      <>
        IGBC Platinum precertification. <Pending>Key result to be confirmed</Pending>
      </>
    ),
  },
  {
    image: "Residential and commercial buildings, no logos",
    category: "Certification portfolio · Real estate",
    title: "Green certification across a residential and commercial real-estate portfolio",
    area: "5+ million sq ft across projects",
    location: "Cities",
    services:
      "Management of green-building certification across multiple developments: rating selection, design reviews, consultant coordination, documentation and submissions.",
    outcome: (
      <>
        Over 75% of projects rated Platinum or Gold. <Pending>Founder to confirm</Pending>
      </>
    ),
  },
];

const reportContents = [
  "Project summary and spend",
  "Before-and-after readings for energy, water or waste",
  "People trained, hours and learning results",
  "Consented photos from the site",
  "An evidence annex: readings, bills, certificates",
];

const campusExamples = [
  {
    title: "Case study 1 · Module",
    location: "Institution, City",
    photo: "Project photo, with consent",
  },
  {
    title: "Case study 2 · Module",
    location: "Institution, City",
    photo: "Project photo, with consent",
  },
  {
    title: "Training · Format",
    location: "Partner college, City",
    photo: "Workshop photo, with consent",
  },
];

export default function Portfolio() {
  usePageTitle(
    "Portfolio",
    "Green-building expertise and Green Campus case studies from Sustain Builds, with project evidence and measured results.",
  );

  return (
    <>
      <section>
        <Container className="pb-12 pt-8 md:pb-16 md:pt-10">
          <div className="max-w-[50rem]">
            <Eyebrow>Portfolio</Eyebrow>
            <h1 className="mt-4 text-[2.7rem] leading-[1.04] md:text-[3.7rem] lg:text-[4.3rem]">
              Green-building expertise behind every project
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/80">
              Sustain Builds is led by a practitioner with experience on LEED Platinum and IGBC
              Platinum-certified projects. The same standards of specification, verification and
              reporting apply to every Green Campus project.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-14 md:py-20">
          <div className="max-w-[46rem]">
            <Eyebrow>Professional experience</Eyebrow>
            <h2 className="mt-4 text-[2.1rem] leading-tight md:text-[2.8rem]">
              Work delivered by the founder at previous firms
            </h2>
            <p className="mt-4 text-ink/75">
              These projects were delivered by the founder while employed at previous firms and are
              presented as evidence of professional expertise. They are not Sustain Builds
              projects; project and client names are withheld.
            </p>
          </div>
          <ol className="mt-10 grid gap-10 md:grid-cols-2">
            {experience.map((project, index) => (
              <li key={project.title}>
                <article>
                  <Figure
                    src={placeholderImage(project.image)}
                    alt={project.image}
                    caption={project.image}
                    ratio="aspect-[16/10]"
                  />
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-rust">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-xl leading-snug md:text-2xl">{project.title}</h3>
                  <dl className="mt-4 grid gap-2 border-t border-border pt-4 text-sm sm:grid-cols-[7rem_1fr]">
                    <dt className="font-semibold">Project area</dt>
                    <dd>{index === 3 ? project.area : <Pending>{project.area}</Pending>}</dd>
                    <dt className="font-semibold">Location</dt>
                    <dd>{index === 2 || index === 3 ? <Pending>{project.location}</Pending> : project.location}</dd>
                  </dl>
                  <p className="mt-4 text-sm font-semibold">Services planned and provided</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/75">{project.services}</p>
                  <p className="mt-4 text-sm font-semibold">Outcome</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/75">{project.outcome}</p>
                </article>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-ink/65">
            <Pending>
              Founder to confirm project area, location, scope and outcome for each project before launch.
            </Pending>
          </p>
        </Container>
      </section>

      <section className="border-t border-border">
        <Container className="py-14 md:py-20">
          <div className="max-w-[46rem]">
            <Eyebrow>Green Campus</Eyebrow>
            <h2 className="mt-4 text-[2.1rem] leading-tight md:text-[2.8rem]">
              Green Campus case studies
            </h2>
            <p className="mt-4 text-ink/75">
              Each case study documents the baseline, the upgrade, the people trained and the
              measured result.
            </p>
          </div>
          <div className="mt-9 grid gap-8 md:grid-cols-3">
            {campusExamples.map((example, index) => (
              <article key={example.title} className="border-t border-border pt-4">
                <Figure
                  src={placeholderImage(example.photo)}
                  alt={example.photo}
                  ratio="aspect-[4/3]"
                />
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-rust">
                  {example.title}
                </p>
                <h3 className="mt-2 text-xl">{example.location}</h3>
                <dl className="mt-4 divide-y divide-border border-y border-border text-sm">
                  {(index === 2
                    ? [
                        ["Participants", "number"],
                        ["Hours", "number"],
                        ["Learning gain", "before → after score"],
                        ["Feedback", "out of 5"],
                      ]
                    : [
                        ["Funded by", "CSR funder"],
                        ["People trained", "number"],
                        ["Measured result", "before → after"],
                        ["Completed", "month, year"],
                      ]
                  ).map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[7.5rem_1fr] gap-3 py-2.5">
                      <dt className="font-semibold">{label}</dt>
                      <dd><Pending>{value}</Pending></dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sage/45">
        <Container className="grid items-center gap-8 py-12 md:grid-cols-12 md:gap-10 md:py-16">
          <div className="md:col-span-4">
            <Figure
              src={placeholderImage("Sample report cover")}
              alt="Sample Green Campus impact report cover"
              caption="Sample report cover"
              ratio="aspect-[4/5]"
            />
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <Eyebrow>Impact reporting</Eyebrow>
            <h2 className="mt-4 text-[2rem] leading-tight md:text-[2.8rem]">
              What every impact report contains
            </h2>
            <ul className="mt-6 divide-y divide-ink/15 border-y border-ink/15">
              {reportContents.map((item) => (
                <li key={item} className="py-3.5 text-ink/80">{item}</li>
              ))}
            </ul>
            <Button disabled title="Sample report file to be added" className="mt-6">
              Download a sample report [file to add]
            </Button>
          </div>
        </Container>
      </section>

    </>
  );
}
