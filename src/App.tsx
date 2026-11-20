import { useEffect, useRef } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button, Container, usePageTitle } from "@/components/ui";
import Home from "@/pages/Home";
import Solutions from "@/pages/Solutions";
import Portfolio from "@/pages/Portfolio";
import CaseStudy from "@/pages/CaseStudy";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import About from "@/pages/About";
import Audience from "@/pages/Audience";

/**
 * Scroll behaviour.
 * - New page: start at the top.
 * - New page with an anchor: land on the anchor directly.
 * - Same page, anchor: glide to it (unless the visitor prefers reduced motion).
 * - Same page, only the query changed (portfolio filters): leave the scroll alone.
 */
function ScrollManager() {
  const location = useLocation();
  const previous = useRef<string | null>(null);

  useEffect(() => {
    const pathChanged = previous.current !== location.pathname;
    previous.current = location.pathname;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      let tries = 0;
      const attempt = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({
            behavior: pathChanged || reduced ? "auto" : "smooth",
            block: "start",
          });
        } else if (tries++ < 12) {
          requestAnimationFrame(attempt);
        }
      };
      const t = window.setTimeout(attempt, pathChanged ? 40 : 0);
      return () => window.clearTimeout(t);
    }

    if (pathChanged) window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.key, location.pathname, location.hash]);

  return null;
}


function LegacyRedirect({ to }: { to: string }) {
  const location = useLocation();
  return <Navigate to={`${to}${location.search}${location.hash}`} replace />;
}

function NotFound() {
  usePageTitle("Page not found");
  return (
    <Container className="py-24 md:py-32">
      <p className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-rust">404</p>
      <h1 className="mt-4 text-[2.5rem] leading-tight md:text-[3.25rem]">
        There is no page at this address.
      </h1>
      <p className="mt-4 max-w-[30rem] text-ink/75">
        Explore our Solutions, Portfolio, or About &amp; contact pages.
      </p>
      <Button to="/" variant="secondary" className="mt-8">
        Go to the home page
      </Button>
    </Container>
  );
}

function Shell() {
  const location = useLocation();
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollManager />
      <Header />
      <main id="main" tabIndex={-1} key={location.pathname} className="page-enter flex-1 outline-none">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sectors" element={<LegacyRedirect to="/portfolio" />} />
          <Route path="/services" element={<LegacyRedirect to="/solutions" />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/funders" element={<Audience audience="funders" />} />
          <Route path="/solutions/institutions" element={<Audience audience="institutions" />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<CaseStudy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}
