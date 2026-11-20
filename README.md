# Sustain Builds website

The site follows the supplied Sustain Builds Website Homepage and Flows reference: a warm cream, ink and rust visual system, with a Green Campus programme for CSR funders and educational institutions.

React 19 + TypeScript + Vite 7 + Tailwind 4. Static site, prerendered per page for SEO.

## Run locally
    npm install
    npm run dev

## Production build
    cp .env.example .env        # set VITE_SITE_URL to your real domain
    npm run images              # once, on a machine with internet: saves stock photos to public/images
    # then set VITE_LOCAL_IMAGES=1 in .env
    npx playwright install chromium   # once (CI too)
    npm run build               # type-check, build, prerender -> dist/

`dist/` is the whole site. Upload it to Cloudflare Pages, Netlify or Vercel
(build command `npm run build`, output directory `dist`), then attach your domain.

## Page structure
- `/` — Home, Green Campus programme overview and the two audience paths
- `/solutions` — Green Campus modules, five services, delivery process, training and verification
- `/solutions/funders` — CSR funder outcomes, deliverables and planning-call form
- `/solutions/institutions` — campus process, funding routes, requirements and assessment form
- `/portfolio` — founder experience, Green Campus case-study placeholders and impact-report contents
- `/about` — leadership, company details, contact information and message form

Old `/services` and `/sectors` links redirect to `/solutions` and `/portfolio` respectively, preserving any hash anchors.

## Image placeholders
Images use neutral, labelled placeholders matching the reference captions. Replace these `placeholderImage(...)` sources in the page files with approved client image paths when final photography is ready.

## Enquiry form
Submits to FormSubmit and emails the configured address. After deployment, test
each audience form and confirm the FormSubmit endpoint and consent language.
Set `VITE_ENQUIRY_ENDPOINT` to the approved endpoint before launch.

## Before launch
Search the site for yellow `[ ... ]` markers (`<Pending>` in the code): contact
details, legal entity, project credentials, case-study facts, and legal content.
