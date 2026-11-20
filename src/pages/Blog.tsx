import { Link, useSearchParams } from "react-router-dom";
import { cn } from "@/utils/cn";
import { heads, placeholderImage } from "@/data/site";
import { formatDate, postsByDate, readMinutes, type Post } from "@/data/blog";
import { ClosingCta } from "@/components/ClosingCta";
import {
  Container,
  Figure,
  Reveal,
  usePageTitle,
} from "@/components/ui";

const headFor = (num: string) => heads.find((h) => h.num === num)!;

function Meta({ post, className }: { post: Post; className?: string }) {
  const h = headFor(post.head);
  return (
    <p className={cn("text-[0.8rem] text-ink/55", className)}>
      <span className="font-semibold uppercase tracking-[0.12em] text-rust">{h.short}</span>
      <span aria-hidden="true"> · </span>
      {formatDate(post.date)}
      <span aria-hidden="true"> · </span>
      {readMinutes(post)} min read
    </p>
  );
}

export default function Blog() {
  usePageTitle("Blog", "Notes from the work: BRSR Core, carbon market, energy audits, accessibility and sustainability reporting in India.");
  const [params, setParams] = useSearchParams();
  const head = params.get("head") ?? "all";

  const filtered = head === "all" ? postsByDate : postsByDate.filter((p) => p.head === head);
  const feature = head === "all" ? filtered[0] : undefined;
  const rows = feature ? filtered.slice(1) : filtered;

  const setHead = (value: string) => {
    const next = new URLSearchParams(params);
    if (value === "all") next.delete("head");
    else next.set("head", value);
    setParams(next, { replace: true });
  };

  return (
    <>
      <section>
        <Container className="pb-10 pt-8 md:pb-14 md:pt-10">
          <Reveal className="max-w-[46rem]">
            <h1 className="text-[2.75rem] leading-[1.02] md:text-[3.5rem] lg:text-[4rem]">Blog</h1>
            <p className="mt-6 max-w-[38rem] text-lg leading-relaxed text-ink/80">
              Notes from the work: what regulators, lenders and listed customers are asking for,
              and what it takes to answer with data that holds up. Written by the teams behind the
              four service heads.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-wrap items-center gap-2">
            <span className="mr-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink/55">
              By service head
            </span>
            <button
              type="button"
              aria-pressed={head === "all"}
              onClick={() => setHead("all")}
              className={cn(
                "inline-flex h-10 items-center rounded-[4px] border px-3.5 text-sm font-medium transition-colors",
                head === "all"
                  ? "border-ink bg-ink text-white"
                  : "border-ink/30 text-ink hover:border-ink",
              )}
            >
              All
            </button>
            {heads.map((h) => (
              <button
                key={h.num}
                type="button"
                aria-pressed={head === h.num}
                onClick={() => setHead(h.num)}
                className={cn(
                  "inline-flex h-10 items-center gap-2 rounded-[4px] border px-3.5 text-sm font-medium transition-colors",
                  head === h.num
                    ? "border-ink bg-ink text-white"
                    : "border-ink/30 text-ink hover:border-ink",
                )}
              >
                <span className={cn("font-serif", head === h.num ? "text-sand" : "text-rust")}>
                  {h.num}
                </span>
                {h.short}
              </button>
            ))}
          </div>
          <p className="mt-5 text-sm text-ink/60" role="status">
            {filtered.length === 1 ? "1 post" : `${filtered.length} posts`}
            {head !== "all" && <> under {headFor(head).title}</>}
          </p>
        </Container>
      </section>

      {feature && (
        <section className="border-t border-ink/10">
          <Container className="py-12 md:py-16">
            <article className="grid items-center gap-10 md:grid-cols-12 md:gap-8">
              <Link to={`/blog/${feature.slug}`} className="group block md:col-span-7">
                <Figure src={placeholderImage(feature.image.caption)} alt={feature.image.alt} ratio="aspect-[16/10]" />
              </Link>
              <div className="md:col-span-5">
                <Meta post={feature} />
                <h2 className="mt-3 text-[1.9rem] leading-[1.15] md:text-[2.3rem]">
                  <Link to={`/blog/${feature.slug}`} className="transition-colors hover:text-rust">
                    {feature.title}
                  </Link>
                </h2>
                <p className="mt-4 text-ink/80">{feature.standfirst}</p>
                <Link
                  to={`/blog/${feature.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 font-semibold text-rust underline decoration-1 underline-offset-4 hover:decoration-2"
                >
                  Read the post
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </Container>
        </section>
      )}

      <section className="border-t border-ink/10">
        <Container className="py-6 md:py-10">
          {rows.length === 0 ? (
            <p className="max-w-[34rem] py-8 text-ink/75">
              No posts under this head yet. The teams write as the work comes in.
            </p>
          ) : (
            <ul className="divide-y divide-ink/12">
              {rows.map((p, i) => (
                <li key={p.slug}>
                  <article className="grid items-center gap-6 py-8 md:grid-cols-12 md:gap-8 md:py-10">
                    <div className={cn("md:col-span-7", i % 2 === 1 && "md:order-2")}>
                      <Meta post={p} />
                      <h2 className="mt-2.5 max-w-[34rem] text-[1.5rem] leading-snug md:text-[1.75rem]">
                        <Link
                          to={`/blog/${p.slug}`}
                          className="transition-colors hover:text-rust"
                        >
                          {p.title}
                        </Link>
                      </h2>
                      <p className="mt-3 line-clamp-3 max-w-[36rem] text-ink/75">{p.standfirst}</p>
                      <Link
                        to={`/blog/${p.slug}`}
                        className="mt-4 inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-rust underline decoration-1 underline-offset-4 hover:decoration-2"
                      >
                        Read the post
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                    <Link
                      to={`/blog/${p.slug}`}
                      className={cn("block md:col-span-5", i % 2 === 1 && "md:order-1")}
                      aria-label={p.title}
                    >
                      <Figure src={placeholderImage(p.image.caption)} alt={p.image.alt} ratio="aspect-[3/2]" />
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>

      <ClosingCta
        title="Working on something we should write about?"
        text="Tell us what you are being asked to deliver, and by whom. Project questions become the most useful posts."
      />
    </>
  );
}
