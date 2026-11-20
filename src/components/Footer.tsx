import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-white/80">
      <Container className="grid gap-10 py-10 md:grid-cols-12 md:items-center md:gap-8">
        <div className="md:col-span-4">
          <Logo />
        </div>
        <nav aria-label="Legal" className="md:col-span-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">LEGAL</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>Privacy and consent policy</li>
            <li>Terms of use</li>
          </ul>
        </nav>
        <div className="md:col-span-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">SOCIAL &amp; CONTACT</h2>
          <ul className="mt-3 flex flex-wrap items-center gap-5 text-sm text-white/70">
            <li>
              <a
                href="https://www.instagram.com/sustainbuilds.co?dlrf=MXhwOHBzd3ozZjVwaw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sustain Builds on Instagram"
                className="inline-flex rounded transition-opacity hover:opacity-80"
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                  <defs>
                    <linearGradient id="instagram-gradient" x1="0" x2="1" y1="1" y2="0">
                      <stop offset="0%" stopColor="#feda75" />
                      <stop offset="50%" stopColor="#fa7e1e" />
                      <stop offset="100%" stopColor="#d62976" />
                    </linearGradient>
                  </defs>
                  <rect x="1" y="1" width="22" height="22" rx="6" fill="url(#instagram-gradient)" />
                  <rect x="5.5" y="5.5" width="13" height="13" rx="4" fill="none" stroke="white" strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="3.1" fill="none" stroke="white" strokeWidth="1.8" />
                  <circle cx="17.2" cy="6.9" r="1.1" fill="white" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/avani-gajbhiye?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Avani Gajbhiye on LinkedIn"
                className="inline-flex rounded transition-opacity hover:opacity-80"
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                  <rect x="1" y="1" width="22" height="22" rx="3" fill="#0a66c2" />
                  <path
                    fill="white"
                    d="M6.2 9.3h2.7V18H6.2zm1.35-1.2a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1M10.8 9.3h2.6v1.2h.04c.36-.68 1.24-1.4 2.56-1.4 2.74 0 3.25 1.8 3.25 4.14V18h-2.7v-4.1c0-.98-.02-2.24-1.36-2.24-1.36 0-1.57 1.06-1.57 2.17V18h-2.7z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <Link to="/about#contact" className="font-semibold text-white underline underline-offset-4 hover:text-sand">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
