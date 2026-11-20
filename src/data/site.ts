/* ------------------------------------------------------------------
   Sustain Builds — site content.
   Everything here is taken from the wireframe pack. Text wrapped in
   <Pending> in the UI (and marked `pending` here) is an open item
   that the client must supply or confirm before launch.
   ------------------------------------------------------------------ */

/**
 * Photos are Pexels stock. By default they load from the Pexels CDN. For
 * production, run `npm run images` once (downloads them to public/images) and
 * build with VITE_LOCAL_IMAGES=1 so the site serves its own copies.
 */
export const px = (id: number, w = 1400) =>
  import.meta.env.VITE_LOCAL_IMAGES === "1"
    ? `/images/${id}.jpg`
    : `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

/** Neutral, replaceable SVG image placeholder for non-homepage content. */
export const placeholderImage = (label: string) =>
  `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 720"><rect width="1200" height="720" fill="#f2e8d3"/><path d="M0 530 260 360l190 125 180-220 260 265 150-125 160 125v190H0Z" fill="#e5ddd1"/><circle cx="930" cy="190" r="74" fill="#e3cd92" opacity=".8"/><rect x="300" y="250" width="600" height="210" rx="10" fill="#fbf7f1" opacity=".86"/><text x="600" y="335" text-anchor="middle" font-family="Arial,sans-serif" font-size="36" font-weight="700" fill="#1d1b19">IMAGE PLACEHOLDER</text><text x="600" y="390" text-anchor="middle" font-family="Arial,sans-serif" font-size="24" fill="#5c564f">${label.replace(/[&<>"']/g, " ").slice(0, 70)}</text></svg>`)}`;

export const brand = {
  name: "Sustain Builds",
  tagline: "Green CSR partner for educational institutions.",
  independence:
    "We prepare data and reports. Independent bodies verify, certify or assure where the law requires it.",
  regions: "Mumbai & Pune",
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "Solutions", to: "/solutions" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "About & contact", to: "/about" },
];

export const solutionNav = [
  { label: "Green Campus, five services, training", to: "/solutions" },
  { label: "CSR teams and foundations", to: "/solutions/funders" },
  { label: "Schools, colleges and universities", to: "/solutions/institutions" },
];

/* ---------------------------------- Sectors ---------------------- */

export type Sector = {
  slug: string;
  name: string;
  deliver: string;
  services: string[];
  image: string;
  alt: string;
  caption: string;
};

export const sectors: Sector[] = [
  {
    slug: "industry",
    name: "Industry",
    deliver:
      "Buyers and lenders ask for emissions and energy data. Some sectors sit under India's carbon market compliance scheme. Large energy users face statutory energy audits.",
    services: ["Decarbonisation", "Energy audits", "BEE & carbon market", "Sustainability & CS"],
    image: px(5532838),
    alt: "Three analogue pressure gauges mounted on a process pipeline inside a plant",
    caption: "Analogue pressure gauges on a process line.",
  },
  {
    slug: "data-centres",
    name: "Data centres",
    deliver:
      "Very high electricity and cooling loads. Enterprise customers ask for efficiency, water and clean-power data. Financing and expansion depend on a credible energy plan.",
    services: ["Energy audits", "Decarbonisation", "Green finance", "Sustainability & CS"],
    image: px(1181335),
    alt: "A technician with a tablet checking equipment in an aisle of server racks",
    caption: "A technician checks racks in a server hall.",
  },
  {
    slug: "logistics-parks",
    name: "Logistics parks",
    deliver:
      "Shippers ask logistics partners for emissions data. Large roofs, fleets and cold chains offer clear reduction levers. Green-rated warehouses can support leasing and finance.",
    services: ["Green building", "Energy audits", "Decarbonisation", "Green finance"],
    image: px(1267325),
    alt: "Three white cargo trailers backed up to the doors of a distribution shed",
    caption: "Trailers docked at a distribution shed.",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    deliver:
      "Round-the-clock energy, water and waste loads. Hospital groups face reporting and lender expectations. Patient safety limits which measures are possible.",
    services: ["Energy audits", "Green building", "Sustainability & CS", "Policies & guidelines"],
    image: px(7937300),
    alt: "Steel pipework with a pressure gauge inside a building plant room",
    caption: "Steel pipework and gauges in a plant room.",
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    deliver:
      "Guests, brands and lenders ask about energy, water and waste. Back-of-house systems hold most of the savings. Certification supports positioning.",
    services: ["Energy audits", "Green building", "Sustainability & CS"],
    image: px(8774448),
    alt: "An industrial washing machine beside a cart full of linen in a laundry",
    caption: "Linen carts beside industrial washers, back of house.",
  },
  {
    slug: "education",
    name: "Education",
    deliver:
      "Campuses have real energy, water and waste footprints. Institutions can turn their operations into teaching. CSR funders back environment and education work.",
    services: ["Environment & education", "Energy audits", "Policies & guidelines"],
    image: px(7972373),
    alt: "Students carrying books walk along a campus walkway in daylight",
    caption: "Students crossing a campus walkway.",
  },
  {
    slug: "commercial",
    name: "Commercial",
    deliver:
      "Tenants ask landlords for building-level data. Investors benchmark portfolios, for example through GRESB. Existing offices and malls need ratings and retrofits.",
    services: ["Green building", "Energy audits", "Sustainability & CS", "Decarbonisation"],
    image: px(28509734),
    alt: "A contemporary office facade with rectangular windows throwing hard shadows",
    caption: "An office facade in hard afternoon light.",
  },
  {
    slug: "public-buildings",
    name: "Public buildings & accessibility",
    deliver:
      "The RPwD Act 2016 requires public buildings to be accessible, with periodic access audits. The 2021 Harmonised Guidelines set the design standard. Councils need a verified audit, not a design opinion.",
    services: ["Building Accessibility Audit", "Inclusive design", "Policies & guidelines"],
    image: px(36738295),
    alt: "A public footpath seen from above, with a tactile paving strip and metal handrails",
    caption: "Tactile paving and handrails on a public footpath.",
  },
];

/* ---------------------------------- Services --------------------- */

export type Service = {
  slug: string;
  name: string;
  summary: string;
  receive: string;
  frameworks: string;
  accreditation?: string;
  accreditationPending?: boolean;
};

export type Head = {
  num: "01" | "02" | "03" | "04";
  slug: string;
  title: string;
  short: string;
  strap: string;
  summary: string;
  services: Service[];
};

export const heads: Head[] = [
  {
    num: "01",
    slug: "head-01",
    title: "Sustainability Research & Analytics",
    short: "Research & Analytics",
    strap: "Turning scattered data into a picture you can act on and report.",
    summary: "Materiality, BRSR data and benchmarking.",
    services: [
      {
        slug: "materiality",
        name: "Materiality Assessment & Stakeholder Research",
        summary:
          "Identifies the sustainability issues that matter most to your business and stakeholders, ranked by impact.",
        receive: "Materiality matrix, stakeholder engagement summary, topic brief",
        frameworks: "GRI materiality principles, SASB sector standards",
      },
      {
        slug: "brsr",
        name: "BRSR / BRSR Core Reporting & ESG Analytics",
        summary:
          "Data collection, KPI calculation and disclosure drafting across environment, social and governance metrics.",
        receive: "BRSR / BRSR Core readiness report, KPI data workbook, assurance-ready evidence index",
        frameworks: "SEBI BRSR & BRSR Core, NGRBC nine principles",
      },
      {
        slug: "benchmarking",
        name: "Sector & Peer Benchmarking",
        summary:
          "Compares your performance against sector peers on energy, emissions, water and disclosure quality.",
        receive: "Benchmarking report with peer set and gap analysis",
        frameworks: "Sector intensity ratios, public disclosures",
      },
      {
        slug: "regulatory-intelligence",
        name: "Climate & Regulatory Intelligence",
        summary:
          "Tracks upcoming Indian and state-level sustainability regulation relevant to your sector.",
        receive: "Quarterly regulatory brief, applicability tracker",
        frameworks: "SEBI, MoEFCC, BEE, state pollution control boards",
      },
    ],
  },
  {
    num: "02",
    slug: "head-02",
    title: "Net Zero & Decarbonization",
    short: "Net Zero",
    strap: "Measuring emissions and energy, then reducing both, year on year.",
    summary: "Roadmaps, energy audits, carbon market, green building and finance.",
    services: [
      {
        slug: "ghg-roadmaps",
        name: "GHG Baseline & Decarbonisation Roadmaps",
        summary:
          "Establishes your emissions baseline and lays out a phased, costed path to reduce it.",
        receive: "GHG baseline report, decarbonisation roadmap, board summary",
        frameworks: "GHG Protocol, ISO 14064-1",
      },
      {
        slug: "energy-audits",
        name: "Energy Audits, Optimisation & Facility Management Support",
        summary:
          "On-site energy audits and ongoing operations support, with annual audits to track drift.",
        receive: "Energy audit report, optimisation and operations log, annual audit report, savings register",
        frameworks: "Energy Conservation Act 2001 (BEE), ISO 50001",
        accreditation: "BEE Certified Energy Auditor",
      },
      {
        slug: "green-building",
        name: "Green Building Design, Documentation & Certification",
        summary:
          "Credit strategy, documentation and certification support across design and operating buildings.",
        receive: "Scorecard, credit documentation packs, handover guide",
        frameworks: "IGBC, GRIHA, LEED, EDGE, ECBC",
        accreditation: "IGBC AP / GRIHA CP / LEED AP",
      },
      {
        slug: "carbon-market",
        name: "BEE & Indian Carbon Market Compliance",
        summary:
          "Readiness, monitoring plans and data protocols for entities under the Carbon Credit Trading Scheme.",
        receive: "Applicability screen, MRV gap report, GHG monitoring plan",
        frameworks: "Carbon Credit Trading Scheme, BEE procedures",
        accreditation: "Accredited Carbon Verification Agency personnel",
      },
      {
        slug: "green-finance",
        name: "Green Finance & Climate Finance Facilitation",
        summary:
          "Prepares projects for green loans, bonds and grant facilities, and connects you to our finance network.",
        receive: "Green finance readiness assessment, financing framework draft, impact-reporting template",
        frameworks: "ICMA Green Bond Principles, LMA Green Loan Principles",
      },
    ],
  },
  {
    num: "03",
    slug: "head-03",
    title: "Risk Assessments & Mapping",
    short: "Risk & Mapping",
    strap: "Finding where climate, resource and value-chain risk sits, before it becomes a cost.",
    summary: "Climate, ESG, water and value-chain risk.",
    services: [
      {
        slug: "climate-risk",
        name: "Climate Risk & Vulnerability Mapping",
        summary:
          "Maps physical climate risks (heat, flooding, water stress) against your sites and operations.",
        receive: "Site-level climate risk map, vulnerability scorecard",
        frameworks: "TCFD-aligned physical risk categories",
      },
      {
        slug: "value-chain-risk",
        name: "ESG & Value Chain Risk Assessment",
        summary:
          "Screens suppliers and value-chain partners for ESG exposure, ahead of a lender or listed customer asking.",
        receive: "Value-chain risk register, supplier screening report",
        frameworks: "BRSR value-chain disclosure requirements",
      },
      {
        slug: "resource-risk",
        name: "Water, Waste & Resource Risk Mapping",
        summary: "Assesses water stress, effluent and waste-handling risk at the site level.",
        receive: "Resource risk map, mitigation priority list",
        frameworks: "CPCB and state pollution control board norms",
      },
      {
        slug: "asset-risk",
        name: "Physical Asset Risk Screening",
        summary: "Portfolio-level risk screening for lenders, investors and multi-site operators.",
        receive: "Portfolio risk summary, site-level flags",
        frameworks: "GRESB indicators, lender risk frameworks",
      },
    ],
  },
  {
    num: "04",
    slug: "head-04",
    title: "Compliance, Access & Outreach",
    short: "Compliance & Access",
    strap: "Statutory compliance, inclusive design, and the people pipeline behind all of it.",
    summary: "EC-linked compliance, accessibility audits, education and policy.",
    services: [
      {
        slug: "environmental-compliance",
        name: "Environmental Compliance Support (EC-linked)",
        summary:
          "Operations and facility data, optimisation measures, annual and GHG audits, IAQ testing and sustainability reporting that feed post-clearance monitoring.",
        receive:
          "Annual environmental compliance report, GHG audit report, IAQ testing report, facility optimisation review, sustainability report",
        frameworks: "MoEF&CC EC conditions, half-yearly compliance reporting, SEAC review",
      },
      {
        slug: "accessibility-audit",
        name: "Building Accessibility Audit & Inclusive Design",
        summary:
          "Audits buildings for accessibility, recommends design modification plans, and runs awareness sessions for facility teams.",
        receive: "Building Accessibility Audit report, design modification plan, awareness session",
        frameworks: "RPwD Act 2016, Harmonised Guidelines 2021 (MoHUA), NBC 2016 Annex B Part 3",
        accreditation: "Registered / Certified Access Auditor",
        accreditationPending: true,
      },
      {
        slug: "outreach",
        name: "CSR, Environment & Education Outreach",
        summary:
          "For schools, colleges and institutes: curriculum support, campus programmes, and introductions to our network of professionals.",
        receive: "Programme design brief, campus baseline, talent-network introduction, annual outcomes report",
        frameworks: "Companies Act 2013 Section 135 (CSR), Schedule VII, SDGs",
      },
      {
        slug: "policies",
        name: "Policies, Guidelines & Standardisation",
        summary:
          "Drafts sustainability policy, guidelines and standard operating procedures for councils, departments and corporates.",
        receive: "Policy note and gap report, draft policy, guideline handbook, KPI framework",
        frameworks: "SDGs, NGRBC, sector-specific Indian codes",
      },
    ],
  },
];

export const serviceCount = heads.reduce((n, h) => n + h.services.length, 0);

/* ---------------------------------- Home strips ------------------ */

export const audiences = [
  {
    name: "Students",
    text: "Guest lectures, training and mentoring.",
    to: "/about?type=student#enquiry",
    link: "Write to us as a student",
  },
  {
    name: "Institutions",
    text: "Programmes for campuses and faculty.",
    to: "/solutions#outreach",
    link: "See the outreach service",
  },
  {
    name: "Operators",
    text: "Reports, audits and net zero plans.",
    to: "/solutions",
    link: "See every solution",
  },
];

export const whyNow = [
  {
    tag: "SEBI · BRSR Core",
    title: "BRSR Core reaches the top 1,000",
    body: "From FY 2026-27 the core ESG metrics of the top 1,000 listed companies are independently assessed or assured, and reach into supplier and operator data.",
  },
  {
    tag: "BEE · Carbon Credit Trading Scheme",
    title: "The carbon market is live",
    body: "India's Carbon Credit Trading Scheme sets targets in nine notified sectors, with independent verification.",
  },
  {
    tag: "RPwD Act 2016 · Harmonised Guidelines 2021",
    title: "Accessibility is now enforceable",
    body: "Public buildings must meet the 2021 Harmonised Guidelines. Access audits are periodic and required by law.",
  },
  {
    tag: "Central and state schemes",
    title: "Incentives are on the table",
    body: "Central and state incentives exist for projects aligned to the SDGs. We screen eligibility per project.",
    pending: "Scheme names to confirm",
  },
];

export const goalChain = [
  { term: "SDGs", desc: "17 global goals" },
  { term: "ESG", desc: "Environment, social, governance" },
  { term: "BRSR", desc: "India's reporting format" },
  { term: "Sustain Builds", desc: "The data and reports behind it", highlight: true },
];

export const journey = [
  { stage: "Art", line: "An eye for form, proportion and detail." },
  { stage: "Architecture", line: "Buildings that people live and work in." },
  { stage: "Green building", line: "The same buildings, using less energy, water and material." },
  {
    stage: "Sustainability for all",
    line: "The discipline taken beyond buildings, to the organisations that run them.",
  },
  { stage: "Part of life", line: "Where measuring and reducing is routine, not a project." },
];

/* SDG references as number-and-name chips only. The official UN SDG
   icons need written permission for commercial use. */
export const sdgChips = [
  { n: 3, name: "Good health and well-being" },
  { n: 4, name: "Quality education" },
  { n: 6, name: "Clean water and sanitation" },
  { n: 7, name: "Affordable and clean energy" },
  { n: 9, name: "Industry, innovation and infrastructure" },
  { n: 11, name: "Sustainable cities and communities" },
  { n: 12, name: "Responsible consumption and production" },
  { n: 13, name: "Climate action" },
];

/* ---------------------------------- Portfolio -------------------- */

export type CaseStudy = {
  slug: string;
  type: string;
  head: Head["num"];
  sectors: string[];
  sectorLabel: string;
  sectorLabelPending?: boolean;
  image?: string;
  alt?: string;
  /** object-position class, for photographs whose subject sits off-centre */
  pos?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "decarbonisation-roadmap-industrial",
    type: "Decarbonisation roadmap",
    head: "02",
    sectors: ["industry"],
    sectorLabel: "Industrial projects",
    image: px(11645008),
    alt: "Two workers fixing solar panels to a rooftop mounting frame",
  },
  {
    slug: "sustainability-cs-corporate-logistics",
    type: "Sustainability & CS",
    head: "01",
    sectors: ["commercial", "logistics-parks"],
    sectorLabel: "Corporate & logistics",
    image: px(5115940),
    alt: "Aerial view of a cluster of large warehouses in an industrial estate",
  },
  {
    slug: "energy-audit-it-parks",
    type: "Energy audit",
    head: "02",
    sectors: ["commercial", "data-centres"],
    sectorLabel: "IT parks & corporates",
    image: px(11924298),
    alt: "A row of electricity meters on a utility wall",
  },
  {
    slug: "energy-audit-manufacturing",
    type: "Energy audit",
    head: "02",
    sectors: ["industry", "logistics-parks"],
    sectorLabel: "Manufacturing & logistics",
    image: px(11125742),
    alt: "A wall of industrial control panels and meters inside a factory",
  },
  {
    slug: "green-building-certification",
    type: "Green building",
    head: "02",
    sectors: [],
    sectorLabel: "Documentation & certification",
    image: px(9683984),
    alt: "A high-rise with trees and shrubs planted on every balcony",
  },
  {
    slug: "green-finance-network",
    type: "Green finance network",
    head: "02",
    sectors: [],
    sectorLabel: "Network partner names, to confirm",
    sectorLabelPending: true,
    image: px(37824217),
    alt: "A large solar array in front of a row of high-rise buildings",
  },
  {
    slug: "bee-carbon-market",
    type: "BEE & Indian Carbon Market",
    head: "02",
    sectors: ["industry"],
    sectorLabel: "Verified accredited professionals",
    image: px(33363583),
    alt: "Aerial view of an industrial plant with stacks, set among forest",
  },
  {
    slug: "environment-education-csr",
    type: "Environment & education",
    head: "04",
    sectors: ["education"],
    sectorLabel: "Collaborations with design studios for CSR",
    image: px(7972506),
    alt: "Students with backpacks walking through an arch towards a university building",
  },
];

export const reports = [
  { type: "Report type", year: "Year", sector: "Sector, shown with consent" },
  { type: "Report type", year: "Year", sector: "Sector, shown with consent" },
];

/* ---------------------------------- Enquiry ---------------------- */

export const visitorTypes = [
  { value: "corporate", label: "CSR team or foundation", group: "CSR teams and foundations", next: "planning call" },
  { value: "institution", label: "School, college or university", group: "educational institutions", next: "campus assessment" },
  { value: "student", label: "Student or faculty member", group: "students and faculty", next: "conversation" },
  { value: "consultant", label: "Consultant or subject expert", group: "consultants and experts", next: "conversation" },
  { value: "vendor", label: "Vendor or implementation partner", group: "vendors and implementation partners", next: "conversation" },
];

/* ---------------------------------- Imagery ---------------------- */

export const images = {
  hero: {
    src: px(34938446, 1200),
    alt: "Gloved hands setting valves on a brass and steel manifold in a plant workshop",
    caption: "A technician sets valves on a plant manifold.",
  },
  meters: {
    src: px(11924298, 2000),
    alt: "A long row of electricity meters on a utility wall",
    caption: "Utility meters are where an energy audit begins.",
  },
  sketch: {
    src: px(9617407, 1200),
    alt: "An architect's hands resting over a design sketch on a desk",
    caption: "Where the journey started: on paper.",
  },
  greenFacade: {
    src: px(9683984, 1200),
    alt: "A residential tower with trees and shrubs growing on every balcony",
    caption: "Planted balconies on a high-rise.",
  },
  campus: {
    src: px(7972506, 1200),
    alt: "Students walking through an arch towards a university building",
    caption: "A campus is an operation with a footprint, and a classroom for it.",
  },
};
