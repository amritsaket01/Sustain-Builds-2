import { Link, useParams } from "react-router-dom";
import { cn } from "@/utils/cn";
import { brand, caseStudies, heads, placeholderImage, sectors } from "@/data/site";
import { ClosingCta } from "@/components/ClosingCta";
import {
  ArrowLink,
  Button,
  Container,
  Eyebrow,
  Note,
  Pending,
  Reveal,
  usePageTitle,
} from "@/components/ui";

export default function CaseStudy() {
  const { slug } = useParams();
  const cs = caseStudies.find((c) => c.slug === slug);
  usePageTitle(cs ? `${cs.type} case study` : "Case study not found");

  if (!cs) {
    return (
      <Container className="py-24">
        <h1 className="text-[2.5rem] leading-tight">That case study is not here.</h1>
        <p className="mt-4 max-w-[30rem] text-ink/75">
          It may have moved while the portfolio is being assembled.
        </p>
        <Button to="/portfolio" variant="secondary" className="mt-8">
          Back to the portfolio
        </Button>
      </Container>
    );
  }

  const head = heads.find((h) => h.num === cs.head)!;
  const sectorNames = cs.sectors
    .map((s) => sectors.find((x) => x.slug === s)?.name)
    .filter(Boolean)
    .join(", ");

  return (
    <>
      <section>
        <Container className="pb-12 pt-8 md:pt-10">
          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            <Reveal className="md:col-span-7">
              <Eyebrow>
                {head.num} {head.title}
              </Eyebrow>
              <h1 className="mt-4 text-[2.5rem] leading-[1.05] md:text-[3.25rem]">
                <Pending>Case study title</Pending>
              </h1>
              <p className="mt-6 max-w-[32rem] text-lg leading-relaxed text-ink/80">
                <Pending>One-sentence summary of the project and its outcome.</Pending>
              </p>
            </Reveal>
            <dl className="grid gap-y-3 self-end border-t border-ink/15 pt-5 text-[0.95rem] sm:grid-cols-[7rem_1fr] md:col-span-4 md:col-start-9">
              <dt className="font-semibold">Type</dt>
              <dd>{cs.type}</dd>
              <dt className="font-semibold">Sector</dt>
              <dd>{sectorNames || cs.sectorLabel}</dd>
              <dt className="font-semibold">Client</dt>
              <dd>
                <Pending>Client name, with consent</Pending>
              </dd>
              <dt className="font-semibold">Year</dt>
              <dd>
                <Pending>Year</Pending>
              </dd>
            </dl>
          </div>
        </Container>
      </section>

      {cs.image && (
        <Reveal className="img-reveal">
          <figure>
            <div className="h-[52vh] min-h-[300px] bg-sage">
              <img
                src={placeholderImage(cs.type)}
                alt={`Image placeholder for ${cs.type}`}
                width={1200}
                height={720}
                loading="eager"
                decoding="async"
                className={cn("h-full w-full object-cover", cs.pos)}
              />
            </div>
            <figcaption>
              <Container className="py-3 text-sm text-ink/60">
                Image: client-approved or free. Replace with a project photograph once consent is in
                hand.
              </Container>
            </figcaption>
          </figure>
        </Reveal>
      )}

      <section className="border-t border-ink/10">
        <Container className="grid gap-12 py-14 md:grid-cols-12 md:py-20">
          <div className="space-y-12 md:col-span-7 md:col-start-3">
            <div>
              <h2 className="text-2xl md:text-3xl">The brief</h2>
              <p className="mt-4 text-ink/85">
                <Pending>What the client was being asked to deliver, and by whom.</Pending>
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl">What we did</h2>
              <p className="mt-4 text-ink/85">
                <Pending>Scope, site visits, data collected, methods and the frameworks used.</Pending>
              </p>
              <p className="mt-4 text-[0.95rem] text-ink/70">
                Service head: {head.title}.{" "}
                <Link to={`/solutions#${head.slug}`} className="text-rust underline decoration-1 underline-offset-4">
                  See the services under this head
                </Link>
                .
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl">What we delivered</h2>
              <p className="mt-4 text-ink/85">
                <Pending>
                  Reports and outputs handed over, and the independent body that verified,
                  certified or assured them, where that applied.
                </Pending>
              </p>
            </div>
            <Note label="Consent">
              Client names and figures are shown only with client consent. {brand.independence}
            </Note>
            <ArrowLink to="/portfolio">Back to the portfolio</ArrowLink>
          </div>
        </Container>
      </section>

      <ClosingCta
        title="Have a project in mind?"
        text="How can we help you today? Tell us what you are working on."
      />
    </>
  );
}
