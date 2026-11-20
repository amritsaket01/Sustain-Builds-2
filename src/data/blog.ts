/* ------------------------------------------------------------------
   Sustain Builds — blog.
   Notes from the work: regulation, audits and reporting, written by
   the service-head teams. Posts use the same facts as the rest of the
   site. Dates and authorship are editorial; nothing here claims a
   client, an outcome or a credential the practice does not hold.
   ------------------------------------------------------------------ */

import { px, type Head } from "./site";

export type Block =
  | { type: "lead"; text: string }
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  standfirst: string;
  head: Head["num"];
  date: string; // ISO
  image: { src: string; alt: string; caption: string };
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "brsr-core-top-1000-operators",
    title: "BRSR Core and the top 1,000: where operators fit in",
    standfirst:
      "From FY 2026-27 the core ESG metrics of the top 1,000 listed companies are independently assessed or assured, and the data reaches into supplier and operator facilities. If you run a site for a listed company, some of those numbers are yours.",
    head: "01",
    date: "2025-11-18",
    image: {
      src: px(11924298, 1600),
      alt: "A long row of electricity meters on a utility wall",
      caption: "Assurance starts where the meters are.",
    },
    body: [
      {
        type: "lead",
        text: "BRSR Core is the short, assured version of SEBI's Business Responsibility and Sustainability Report: nine attributes, each with key performance indicators that an independent agency assesses or assures. It is being phased in across the top 1,000 listed companies, reaching full coverage from FY 2026-27.",
      },
      {
        type: "p",
        text: "What often gets missed is that the list does not stop at the listed company itself. BRSR Core also asks for value-chain disclosures, on a comply-or-explain basis, from partners who together account for most of a company's purchases and sales. In practice, that means the utility bills, fuel records, water logs and waste manifests of factories, warehouses, campuses and commercial buildings land on someone's desk with a deadline attached.",
      },
      { type: "h2", text: "What assurance actually looks at" },
      {
        type: "p",
        text: "An assessor does not re-measure your plant. They test whether the number in the report can be traced back to a source: a meter reading, an invoice, a calibration certificate, a dated log. Gaps rarely fail on arithmetic; they fail on traceability. Data that was collected for billing turns out to have no owner, no frequency and no record of who read it.",
      },
      {
        type: "list",
        items: [
          "Energy: meter-level electricity and fuel data, not just the monthly bill total.",
          "Emissions: activity data behind Scope 1 and 2, with the emission factors noted.",
          "Water: withdrawal and discharge by source, including borewell and tanker supply.",
          "Waste: quantities by category, with the authorised vendor's paperwork attached.",
        ],
      },
      { type: "h2", text: "What an operator can do this quarter" },
      {
        type: "p",
        text: "Start with an evidence index: one line per KPI, naming the source document, where it lives and who maintains it. It is unglamorous work, and it is also the difference between a disclosure that survives assurance and one that gets qualified. Our BRSR service builds exactly this: a readiness report, a KPI data workbook and an assurance-ready evidence index.",
      },
      {
        type: "quote",
        text: "We prepare data and reports. Independent bodies verify, certify or assure where the law requires it.",
      },
      {
        type: "p",
        text: "That line is on every page of this site because it defines the boundary of the work: we make the evidence ready; the assessing agency decides whether it passes.",
      },
    ],
  },
  {
    slug: "accessibility-harmonised-guidelines",
    title: "Accessibility is now enforceable: reading the 2021 Harmonised Guidelines",
    standfirst:
      "The RPwD Act 2016 requires public buildings to be accessible, with periodic access audits. The 2021 Harmonised Guidelines set the design standard. What does that mean for a building that is already standing?",
    head: "04",
    date: "2025-10-26",
    image: {
      src: px(36738295, 1600),
      alt: "A public footpath seen from above, with a tactile paving strip and metal handrails",
      caption: "Tactile paving and handrails on a public footpath.",
    },
    body: [
      {
        type: "lead",
        text: "For councils and public building owners, accessibility has moved from guidance to obligation. The Rights of Persons with Disabilities Act 2016 requires public buildings to be accessible, and the Harmonised Guidelines and Standards for Universal Accessibility in India, issued by MoHUA in 2021, set out what accessible means in drawings and on site.",
      },
      {
        type: "p",
        text: "The guidelines cover the whole journey through a building: the approach from the street, parking and drop-off, ramps and handrails, door widths and thresholds, lifts, toilets, signage and tactile indicators, and the wayfinding that ties them together. NBC 2016 carries the corresponding provisions for building design.",
      },
      { type: "h2", text: "An audit is a measurement, not an opinion" },
      {
        type: "p",
        text: "A common mistake is to treat accessibility as a design review: someone walks the building and writes what they think. A Building Accessibility Audit is closer to a survey. Gradients are measured, clear widths are checked against the standard, and every non-conformity is recorded with its location, so that a design modification plan can be priced and executed against it.",
      },
      { type: "h2", text: "Where older buildings usually fall short" },
      {
        type: "list",
        items: [
          "Entrances reached only by steps, with a ramp added later at a gradient too steep to use.",
          "Tactile paving that starts and stops without a logic a cane user can follow.",
          "Accessible toilets used as storage, or fitted with grab rails in the wrong places.",
          "Signage at heights and contrasts that fail the people they are meant for.",
          "Lifts that serve every floor except the one the public counter moved to.",
        ],
      },
      {
        type: "p",
        text: "None of these need a rebuild. Most need measured drawings, a prioritised modification plan and a facility team that has sat through an awareness session on why the details matter. That is the sequence our audits follow: audit report, design modification plan, then the session for the people who will keep the building accessible after we leave.",
      },
    ],
  },
  {
    slug: "carbon-credit-trading-scheme-nine-sectors",
    title: "India's carbon market is live: what the nine notified sectors need ready",
    standfirst:
      "The Carbon Credit Trading Scheme sets emissions intensity targets in nine notified sectors, with independent verification. The first compliance cycle rewards entities that sorted their monitoring before the targets arrived.",
    head: "02",
    date: "2025-10-03",
    image: {
      src: px(33363583, 1600),
      alt: "Aerial view of an industrial plant with stacks, set among forest",
      caption: "Obligated entities are measured on emissions intensity, per unit of output.",
    },
    body: [
      {
        type: "lead",
        text: "The Carbon Credit Trading Scheme, administered by the Bureau of Energy Efficiency, moves India from energy-saving certificates to greenhouse gas emissions intensity: tonnes of CO2 equivalent per unit of product. Obligated entities that beat their target earn Carbon Credit Certificates; those that miss it must buy them.",
      },
      { type: "h2", text: "The work is mostly monitoring" },
      {
        type: "p",
        text: "An intensity target is only as good as the two numbers underneath it: emissions and production. Both need a monitoring plan that fixes the metering points, the data frequency, the calculation method and who signs off. Verification agencies will test that plan against the plant as they find it, not as it was designed.",
      },
      {
        type: "list",
        items: [
          "An applicability screen: is the entity, and each facility, actually obligated?",
          "A GHG inventory boundary that matches the scheme's, not the annual report's.",
          "Metering and data protocols for fuel, electricity and process emissions.",
          "A production denominator that finance and operations both recognise.",
        ],
      },
      { type: "h2", text: "Where entities get caught out" },
      {
        type: "p",
        text: "Usually not on the target, but on the baseline year: data reconstructed after the fact, from invoices and estimates, when the scheme expects monitored values. It is far cheaper to run one clean year of monitored data before a target binds than to argue about a reconstructed one afterwards. Our carbon market service starts with the applicability screen and the MRV gap report, so you know which of these problems you actually have.",
      },
    ],
  },
  {
    slug: "annual-energy-audit-drift",
    title: "Why the annual audit matters more than the first one",
    standfirst:
      "A first energy audit finds the savings. The audits after it catch the drift: the slow creep of setpoints, fouling and bypassed controls that quietly hands the savings back.",
    head: "02",
    date: "2025-09-08",
    image: {
      src: px(11125742, 1600),
      alt: "A wall of industrial control panels and meters inside a factory",
      caption: "Control panels show what the plant is doing today, not what it was set to do.",
    },
    body: [
      {
        type: "lead",
        text: "Most sites we visit have had an energy audit at some point. Fewer can show what happened next. The audit report sits in a drawer, the savings measures were partly implemented, and nobody has checked since whether the building still performs the way the report said it would.",
      },
      { type: "h2", text: "Drift is normal, and measurable" },
      {
        type: "p",
        text: "Chillers foul, sensors wander, schedules get overridden for one event and never restored, and a production line that changed its product mix quietly invalidates the old baseline. Individually these are small. Together they are why metered consumption rises a few percent a year on sites that have not changed anything on paper.",
      },
      {
        type: "quote",
        text: "An audit is a photograph. An annual audit is the film: it shows which way the building is moving.",
      },
      { type: "h2", text: "What a yearly cycle looks like" },
      {
        type: "list",
        items: [
          "A short re-audit against the original baseline, using the same boundaries and factors.",
          "An optimisation and operations log: every setpoint change, override and repair, dated.",
          "A savings register that reconciles predicted savings against metered ones.",
          "A short list of corrective actions, ranked by payback, for the next maintenance window.",
        ],
      },
      {
        type: "p",
        text: "This is also what statutory and lender requirements increasingly expect: not a single study, but a managed system along the lines of ISO 50001. Our energy audit work under the Energy Conservation Act 2001 is structured that way: audit, operations support, and an annual audit to track drift, rather than a report that ages in a drawer.",
      },
    ],
  },
  {
    slug: "from-global-goals-to-reported-numbers",
    title: "From the SDGs to a number a company can report",
    standfirst:
      "Seventeen global goals, one three-letter lens, one Indian reporting format, and then the unglamorous part: the data. How the chain actually connects, and where it usually breaks.",
    head: "01",
    date: "2025-08-19",
    image: {
      src: px(9683984, 1600),
      alt: "A residential tower with trees and shrubs growing on every balcony",
      caption: "Goals become real one building, one meter and one report at a time.",
    },
    body: [
      {
        type: "lead",
        text: "Our vision board runs in four steps: the Sustainable Development Goals, then ESG, then BRSR, then the data and reports behind all three. It is worth spelling out, because most confusion in sustainability reporting comes from treating these four things as if they were the same thing.",
      },
      { type: "h2", text: "Four different jobs" },
      {
        type: "list",
        items: [
          "The SDGs set direction: seventeen goals agreed by UN member states, with targets for 2030.",
          "ESG is a lens: how investors, lenders and large buyers judge performance against that direction.",
          "BRSR is a format: SEBI's Business Responsibility and Sustainability Report, built on the nine NGRBC principles, through which Indian listed companies answer.",
          "The data is the evidence: baselines, meter readings, audit findings and policies that make the answers checkable.",
        ],
      },
      { type: "h2", text: "Where the chain breaks" },
      {
        type: "p",
        text: "It rarely breaks at the top. Companies know which goals they align with. It breaks between the format and the evidence: a BRSR field asks for energy intensity, the number gets estimated for the disclosure, and nobody can reproduce it six months later when an assurer asks how it was calculated. The fix is boring and total: a KPI workbook where every reported figure carries its source, its factor and its owner.",
      },
      {
        type: "p",
        text: "That is why Sustain Builds describes itself as the data and reports behind it. The goals give the direction, the format gives the questions, and the work we do gives answers that an independent body can verify, certify or assure where the law requires it.",
      },
    ],
  },
  {
    slug: "for-students-sustainability-work-on-site",
    title: "For students: sustainability is work you can watch happening",
    standfirst:
      "Guest lectures and mentoring are one route in. The other is noticing that every building you study in is also an operation: metered, audited and reported on. A note for students and the institutions that teach them.",
    head: "04",
    date: "2025-07-28",
    image: {
      src: px(7972506, 1600),
      alt: "Students with backpacks walking through an arch towards a university building",
      caption: "A campus is an operation with a footprint, and a classroom for it.",
    },
    body: [
      {
        type: "lead",
        text: "Sustainability work is often introduced to students as policy: goals, frameworks, conferences. Those matter. But most of the people who do this work for a living spend their days in plant rooms, at loading docks and in front of meter panels, collecting the numbers that the policy runs on.",
      },
      { type: "h2", text: "The campus under your feet" },
      {
        type: "p",
        text: "A college campus has real energy, water and waste footprints, and institutions can turn their operations into teaching: the hostel's hot water system is a thermodynamics lesson with a fuel bill attached. Our environment and education outreach starts with a campus baseline, so students work on their own building's data rather than a case study from another continent.",
      },
      {
        type: "list",
        items: [
          "Guest lectures and training from people who audit and report for a living.",
          "Campus programmes that measure first, then intervene, then measure again.",
          "Introductions to a network of professionals across the four service heads.",
          "CSR-funded environment and education projects under the Companies Act 2013, Section 135.",
        ],
      },
      {
        type: "p",
        text: "If you are a student, write to us as one: the enquiry form on About us & contact has a 'Student or institution' option, and the usual next step is a collaboration talk. Bring questions about real buildings. They are our favourite kind.",
      },
    ],
  },
];

export const postsByDate: Post[] = [...posts].sort((a, b) => b.date.localeCompare(a.date));

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export const formatDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${months[m - 1]} ${y}`;
};

export const readMinutes = (post: Post) => {
  const words = [post.standfirst, ...post.body.map((b) => ("text" in b ? b.text : b.items.join(" ")))]
    .join(" ")
    .split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
};
