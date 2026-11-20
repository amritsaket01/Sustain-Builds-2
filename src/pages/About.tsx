import { Link, useSearchParams } from "react-router-dom";
import { EnquiryForm } from "@/components/EnquiryForm";
import { brand, placeholderImage, visitorTypes } from "@/data/site";
import { Container, Eyebrow, Figure, Pending, usePageTitle } from "@/components/ui";

export default function About() {
  const [params] = useSearchParams();
  const typeParam = params.get("type") ?? "";
  const defaultType = visitorTypes.some((type) => type.value === typeParam) ? typeParam : "";
  usePageTitle(
    "About & contact",
    "Meet Sustain Builds, a practitioner-led partner connecting corporate CSR commitments with green infrastructure needs at educational institutions.",
  );

  return (
    <>
      <section>
        <Container className="pb-12 pt-8 md:pb-16 md:pt-10">
          <div className="grid items-center gap-9 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-7">
              <Eyebrow>About Sustain Builds</Eyebrow>
              <h1 className="mt-4 text-[2.7rem] leading-[1.04] md:text-[3.7rem] lg:text-[4.3rem]">
                A practitioner-led partner for green CSR
              </h1>
              <p className="mt-6 max-w-[43rem] text-lg leading-relaxed text-ink/80">
                Sustain Builds connects corporate CSR commitments with the infrastructure needs
                of educational institutions, delivering green upgrades, trained personnel and
                verified results under a single, accountable engagement.
              </p>
            </div>
            <div className="md:col-span-5">
              <Figure
                src={placeholderImage("Founder on a project site")}
                alt="Sustain Builds founder on a green-building project site"
                caption="New shot · Founder on a project site"
                ratio="aspect-[4/3]"
              />
            </div>
          </div>
          <dl className="mt-10 grid border-y border-border sm:grid-cols-2 md:grid-cols-4">
            {[
              ["Company", "Private limited company"],
              ["Offices", "Mumbai and Pune"],
              ["Expertise", "LEED and IGBC certification"],
              ["Focus", "Green CSR for education"],
            ].map(([label, value]) => (
              <div key={label} className="border-b border-border py-4 sm:px-4 md:border-b-0 md:border-r md:first:pl-0 md:last:border-r-0">
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink/55">{label}</dt>
                <dd className="mt-1 font-serif text-lg">{value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section id="leadership" className="scroll-mt-24 bg-white">
        <Container className="grid gap-8 py-14 md:grid-cols-12 md:gap-10 md:py-20">
          <div className="md:col-span-4">
            <Eyebrow>Leadership</Eyebrow>
            <h2 className="mt-4 text-[2rem] leading-tight md:text-[2.7rem]">
              Led by a green-building practitioner
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <article className="border-t border-border pt-5">
              <h3 className="font-serif text-2xl">Avani Gajbhiye</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-rust">
                Founder and Director
              </p>
              <p className="mt-4 leading-relaxed text-ink/75">
                Architect and IGBC Accredited Professional. M.Sc Sustainable Built Environments,
                University of Reading; B.Arch, NIT Raipur. Leads client engagement, technical
                specification and impact reporting for every project.
              </p>
            </article>
            <div className="mt-9">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/55">
                Board of directors
              </h3>
              <div className="mt-3 divide-y divide-border border-y border-border">
                <article className="py-4">
                  <h4 className="font-serif text-xl">Dr. Leena Gajbhiye</h4>
                  <p className="mt-1 text-sm text-ink/75">
                    Company policy and accounts oversight.{" "}
                    <Pending>Short biography to add</Pending>
                  </p>
                </article>
                <article className="py-4">
                  <h4 className="font-serif text-xl">Adv. Sanjiv Gajbhiye</h4>
                  <p className="mt-1 text-sm text-ink/75">
                    Legal, administration and partnerships with NGOs and public bodies.{" "}
                    <Pending>Short biography to add</Pending>
                  </p>
                </article>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="contact" className="scroll-mt-24">
        <Container className="grid gap-9 py-14 md:grid-cols-12 md:gap-10 md:py-20">
          <div className="md:col-span-5">
            <Eyebrow>Contact</Eyebrow>
            <h2 className="mt-4 text-[2rem] leading-tight md:text-[2.7rem]">
              Contact Sustain Builds
            </h2>
            <dl className="mt-6 divide-y divide-border border-y border-border text-[0.95rem]">
              <div className="grid grid-cols-[6rem_1fr] gap-3 py-3">
                <dt className="font-semibold">Email</dt>
                <dd><Pending>email</Pending></dd>
              </div>
              <div className="grid grid-cols-[6rem_1fr] gap-3 py-3">
                <dt className="font-semibold">Phone</dt>
                <dd><Pending>phone</Pending></dd>
              </div>
              <div className="grid grid-cols-[6rem_1fr] gap-3 py-3">
                <dt className="font-semibold">Mumbai</dt>
                <dd><Pending>address</Pending></dd>
              </div>
              <div className="grid grid-cols-[6rem_1fr] gap-3 py-3">
                <dt className="font-semibold">Pune</dt>
                <dd><Pending>address</Pending></dd>
              </div>
              <div className="grid grid-cols-[6rem_1fr] gap-3 py-3">
                <dt className="font-semibold">LinkedIn</dt>
                <dd><Pending>LinkedIn page</Pending></dd>
              </div>
            </dl>
            <p className="mt-6 text-sm text-ink/60">Priority regions: {brand.regions}.</p>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Figure
              src={placeholderImage("Mumbai or Pune at dusk")}
              alt="Mumbai or Pune city at dusk"
              caption="P15 · Mumbai or Pune at dusk"
              ratio="aspect-[16/9]"
            />
            <div className="mt-6 rounded-sm bg-peach/45 p-5 md:p-8">
              <h3 className="text-2xl">Send a message</h3>
              <p className="mt-2 text-sm text-ink/75">
                Share what you are working on. A member of the team will reply.
              </p>
              <EnquiryForm
                variant="full"
                defaultType={defaultType}
                submitLabel="Send message"
                className="mt-6"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-white">
        <Container className="flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink/65">Interested in working with us?</p>
          <div className="flex flex-wrap gap-4 text-sm font-semibold text-rust">
            <Link to="/about?type=consultant#contact" className="underline underline-offset-4">
              Write to us as a consultant, AP or expert
            </Link>
            <Link to="/about?type=vendor#contact" className="underline underline-offset-4">
              Write to us as a vendor
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
