import {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/utils/cn";

/* ------------------------------------------------------------------ */
/* Layout                                                              */
/* ------------------------------------------------------------------ */

/** 1120 px content width, 20 px side padding on phones. */
export function Container({ className, children, ...rest }: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("mx-auto w-full max-w-[1184px] px-5 md:px-8", className)} {...rest}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Type                                                                */
/* ------------------------------------------------------------------ */

export function Eyebrow({
  children,
  tone = "rust",
  className,
}: {
  children: ReactNode;
  tone?: "rust" | "sand" | "muted";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[0.75rem] font-semibold uppercase tracking-[0.16em]",
        tone === "rust" && "text-rust",
        tone === "sand" && "text-sand",
        tone === "muted" && "text-ink/55",
        className,
      )}
    >
      {children}
    </p>
  );
}

/**
 * An open item. Text in [brackets] is something the client must supply or
 * confirm before launch. Rendered on Sand so it is impossible to miss in
 * review, and easy to find and replace.
 */
export function Pending({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <mark
      className={cn("rounded-[2px] bg-sand/70 px-1 font-medium text-ink", className)}
      title="Open item: to be supplied or confirmed before launch"
    >
      [{children}]
    </mark>
  );
}

export function Note({
  label,
  children,
  className,
}: {
  label?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[4px] border border-sand bg-sand/30 px-5 py-4 text-[0.95rem] leading-relaxed",
        className,
      )}
    >
      {label && (
        <span className="mr-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink/70">
          {label}
        </span>
      )}
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Actions                                                             */
/* ------------------------------------------------------------------ */

type ButtonProps = {
  variant?: "primary" | "secondary" | "light";
  className?: string;
  children: ReactNode;
  to?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  title?: string;
};

/** Buttons: 48 px tall, 4 px corners, 16 px bold. One Primary (Rust) per view. */
export function Button({
  variant = "primary",
  className,
  children,
  to,
  type = "button",
  onClick,
  disabled,
  title,
}: ButtonProps) {
  const classes = cn(
    "inline-flex h-12 select-none items-center justify-center gap-2 rounded-[4px] px-6 text-base font-bold transition-colors duration-200",
    variant === "primary" && "bg-rust text-white hover:bg-rust-deep",
    variant === "secondary" && "border-2 border-ink text-ink hover:bg-ink hover:text-white",
    variant === "light" && "border-2 border-white text-white hover:bg-white hover:text-ink",
    disabled && "cursor-not-allowed opacity-45 hover:bg-transparent hover:text-ink",
    className,
  );
  if (to) {
    return (
      <Link to={to} className={classes} title={title}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} title={title}>
      {children}
    </button>
  );
}

/** Body links are Rust and always underlined. */
export function ArrowLink({
  to,
  children,
  className,
  tone = "rust",
}: {
  to: string;
  children: ReactNode;
  className?: string;
  tone?: "rust" | "light" | "ink";
}) {
  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex items-center gap-1.5 font-semibold underline decoration-1 underline-offset-4 hover:decoration-2",
        tone === "rust" && "text-rust",
        tone === "light" && "text-white",
        tone === "ink" && "text-ink",
        className,
      )}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-0.5"
      >
        →
      </span>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Motion                                                              */
/* ------------------------------------------------------------------ */

/**
 * Reveals its children once, when they scroll into view. Used on section
 * openers and images only, never on every card. Honours reduced motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Navigation aids                                                     */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/* Imagery                                                             */
/* ------------------------------------------------------------------ */

export function Figure({
  src,
  alt,
  caption,
  ratio = "aspect-[4/3]",
  className,
  imgClassName,
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: ReactNode;
  ratio?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  return (
    <Reveal className={cn("img-reveal", className)}>
      <figure>
        <div className={cn("bg-sage", ratio)}>
          <img
            src={src}
            alt={alt}
            width={1200}
            height={720}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className={cn("h-full w-full object-cover", imgClassName)}
          />
        </div>
        {caption && <figcaption className="mt-3 text-sm text-ink/60">{caption}</figcaption>}
      </figure>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Document                                                            */
/* ------------------------------------------------------------------ */

const DEFAULT_DESCRIPTION =
  "Sustain Builds converts CSR commitments into green campus infrastructure at schools, colleges and public buildings, with trained personnel and verified results.";

const SITE_URL = ((import.meta.env.VITE_SITE_URL as string | undefined) ?? "").replace(/\/$/, "");

function setMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Page title ("Page name | Sustain Builds"), description, canonical URL and social tags. */
export function usePageTitle(name: string, description?: string) {
  const { pathname } = useLocation();
  useEffect(() => {
    const title = name === "Home" ? "Sustain Builds" : `${name} | Sustain Builds`;
    const desc = description ?? DEFAULT_DESCRIPTION;
    const url = `${SITE_URL || window.location.origin}${pathname === "/" ? "/" : pathname.replace(/\/$/, "")}`;
    document.title = title;
    setMeta('meta[name="description"]', "name", "description", desc);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", desc);
    setMeta('meta[property="og:url"]', "property", "og:url", url);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", desc);
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = url;
  }, [name, description, pathname]);
}

export const pad2 = (n: number) => String(n).padStart(2, "0");
