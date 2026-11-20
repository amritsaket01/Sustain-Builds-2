import { Link, useParams } from "react-router-dom";
import { cn } from "@/utils/cn";
import { heads, placeholderImage } from "@/data/site";
import { formatDate, postsByDate, readMinutes, type Block } from "@/data/blog";
import { ArrowLink, Button, Container, Eyebrow, Reveal, usePageTitle } from "@/components/ui";

function BlockView({ block, first }: { block: Block; first: boolean }) {
  switch (block.type) {
    case "lead":
      return <p className="text-lg leading-relaxed text-ink/90 md:text-[1.25rem]">{block.text}</p>;
    case "p":
      return <p className={cn("leading-relaxed text-ink/85", first ? "" : "mt-5")}>{block.text}</p>;
    case "h2":
      return <h2 className="mt-12 text-2xl leading-snug md:text-[1.8rem]">{block.text}</h2>;
    case "list":
      return (
        <ul className="mt-5 space-y-2.5 text-ink/85 marker:text-rust md:pl-1">
          {block.items.map((item) => (
            <li key={item} className="list-disc pl-2 leading-relaxed [margin-left:1.1rem]">
              {item}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="my-10 border-l-4 border-rust pl-6">
          <p className="font-serif text-[1.35rem] leading-snug text-ink md:text-2xl">{block.text}</p>
        </blockquote>
      );
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const index = postsByDate.findIndex((p) => p.slug === slug);
  const post = index >= 0 ? postsByDate[index] : undefined;
  usePageTitle(post ? post.title : "Post not found", post?.standfirst);

  if (!post) {
    return (
      <Container className="py-24">
        <h1 className="text-[2.5rem] leading-tight">That post is not here.</h1>
        <p className="mt-4 max-w-[30rem] text-ink/75">
          It may have been moved while the blog was being assembled.
        </p>
        <Button to="/blog" variant="secondary" className="mt-8">
          Back to the blog
        </Button>
      </Container>
    );
  }

  const head = heads.find((h) => h.num === post.head)!;
  const newer = index > 0 ? postsByDate[index - 1] : undefined;
  const older = index < postsByDate.length - 1 ? postsByDate[index + 1] : undefined;

  return (
    <>
      <article>
        <Container className="pb-10 pt-8 md:pt-10">
          <Reveal className="mx-auto mt-4 max-w-[46rem]">
            <p className="text-[0.8rem] text-ink/55">
              <span className="font-semibold uppercase tracking-[0.12em] text-rust">
                {head.num} {head.title}
              </span>
              <span aria-hidden="true"> · </span>
              {formatDate(post.date)}
              <span aria-hidden="true"> · </span>
              {readMinutes(post)} min read
            </p>
            <h1 className="mt-5 text-[2.4rem] leading-[1.08] md:text-[3.2rem]">{post.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/75 md:text-xl">{post.standfirst}</p>
            <p className="mt-6 border-t border-ink/12 pt-4 text-sm text-ink/55">
              By the {head.title} team
            </p>
          </Reveal>
        </Container>

        <Reveal className="img-reveal">
          <figure>
            <Container>
              <div className="h-[46vh] min-h-[280px] bg-sage">
                <img
                  src={placeholderImage(post.image.caption)}
                  alt={post.image.alt}
                  width={1200}
                  height={720}
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </Container>
            <figcaption>
              <Container className="py-3 text-sm text-ink/60">{post.image.caption}</Container>
            </figcaption>
          </figure>
        </Reveal>

        <Container className="py-12 md:py-16">
          <div className="mx-auto max-w-[46rem]">
            {post.body.map((block, i) => (
              <BlockView key={i} block={block} first={i === 0} />
            ))}

            <aside className="mt-14 rounded-[4px] bg-sage/35 p-6 md:p-8">
              <Eyebrow>{head.title}</Eyebrow>
              <p className="mt-3 leading-relaxed text-ink/85">{head.strap}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button to={`/solutions#${head.slug}`} variant="secondary">
                  See this service head
                </Button>
              </div>
            </aside>
          </div>
        </Container>
      </article>

      {(newer || older) && (
        <nav aria-label="More posts" className="border-t border-ink/12">
          <Container className="grid gap-8 py-10 md:grid-cols-2 md:py-12">
            <div>
              {older && (
                <>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink/55">
                    Older post
                  </p>
                  <Link
                    to={`/blog/${older.slug}`}
                    className="mt-2 block max-w-[26rem] font-serif text-xl leading-snug transition-colors hover:text-rust"
                  >
                    ← {older.title}
                  </Link>
                </>
              )}
            </div>
            <div className="md:text-right">
              {newer && (
                <>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink/55">
                    Newer post
                  </p>
                  <Link
                    to={`/blog/${newer.slug}`}
                    className="mt-2 block max-w-[26rem] font-serif text-xl leading-snug transition-colors hover:text-rust md:ml-auto"
                  >
                    {newer.title} →
                  </Link>
                </>
              )}
            </div>
          </Container>
        </nav>
      )}

      <Container className="pb-16">
        <ArrowLink to="/blog">All posts</ArrowLink>
      </Container>
    </>
  );
}
