import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "@/utils/cn";
import { nav, solutionNav } from "@/data/site";
import { Logo } from "./Logo";
import { Button, Container } from "./ui";

export function Header() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    setOpen(false);
    setSolutionsOpen(false);
  }, [location.key]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open && !solutionsOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setSolutionsOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, solutionsOpen]);

  const skipToContent = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const main = document.getElementById("main");
    if (main) {
      main.focus({ preventScroll: true });
      main.scrollIntoView();
    }
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "relative inline-block py-2 text-base font-medium transition-colors",
      "text-white/85 hover:text-white",
      "after:absolute after:inset-x-0 after:-bottom-px after:h-[2px] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100",
      "after:bg-sand",
      isActive && "text-white after:scale-x-100",
    );

  const surface = scrolled || open ? "site-header-glass-scrolled" : "site-header-glass";
  const positioning = isHome
    ? cn("left-0 right-0", scrolled ? "fixed top-0" : "absolute top-0")
    : "sticky top-0";

  return (
    <header className={cn("site-header z-50 w-full border-b transition-all duration-300", positioning, surface)}>
      <a href="#main" onClick={skipToContent} className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-[4px] focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <Container className="flex h-[76px] items-center justify-between gap-4">
        <Logo imageClassName="w-[138px] sm:w-[155px]" />

        <nav aria-label="Primary" className="hidden min-[900px]:block">
          <ul className="flex items-center gap-5 lg:gap-7">
            {nav.map((item) => (
              <li key={item.to} className="relative flex items-center gap-1">
                <NavLink to={item.to} end={item.to === "/"} className={linkClass}>{item.label}</NavLink>
                {item.to === "/solutions" && (
                  <>
                    <button type="button" aria-label="Show solution pages" aria-expanded={solutionsOpen} onClick={() => setSolutionsOpen((v) => !v)} className={cn("rounded p-1 text-white/80 transition-transform", solutionsOpen && "rotate-180")}>
                      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true"><path d="m3 6 5 5 5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </button>
                    {solutionsOpen && (
                      <div className="absolute right-0 top-full z-50 mt-3 w-64 rounded-md border border-white/20 bg-[#191b18]/95 p-2 text-white shadow-xl backdrop-blur-2xl">
                        {solutionNav.map((sub) => <Link key={sub.to} to={sub.to} onClick={() => setSolutionsOpen(false)} className="block rounded px-3 py-2.5 text-sm transition-colors hover:bg-white/10 hover:text-sand">{sub.label}</Link>)}
                      </div>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden min-[900px]:block">
          <Button to="/about#contact">GET IN TOUCH</Button>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border-2 border-white/70 bg-white/10 px-3 text-sm font-semibold text-white transition-colors hover:bg-white/20 min-[900px]:hidden",
          )}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none">
            {open ? <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /> : <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />}
          </svg>
          <span>{open ? "Close" : "Menu"}</span>
        </button>
      </Container>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-white/15 bg-[#191b18]/95 text-white backdrop-blur-2xl min-[900px]:hidden"
      >
        <Container className="py-3">
          <ul className="divide-y divide-white/15">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "flex h-12 items-center font-serif text-[1.2rem]",
                      isActive ? "text-sand" : "text-white",
                    )
                  }
                >
                  {item.label}
                </NavLink>
                {item.to === "/solutions" && (
                  <ul className="mb-3 ml-4 border-l border-white/20 pl-4">
                    {solutionNav.slice(1).map((sub) => (
                      <li key={sub.to}>
                        <Link to={sub.to} className="flex min-h-10 items-center text-sm text-white/80">
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Button to="/about#contact" className="mb-3 mt-4 w-full">
            GET IN TOUCH
          </Button>
        </Container>
      </div>
    </header>
  );
}
