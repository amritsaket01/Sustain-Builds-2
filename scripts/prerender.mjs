/**
 * Post-build prerender. Serves dist/ locally, opens every internal page in a
 * headless browser (starting at "/" and following links), and saves the
 * rendered HTML as dist/<route>/index.html, so search engines and social
 * previews see real content. Also writes sitemap.xml, robots.txt and 404.html.
 *
 * Needs a Chromium: `npx playwright install chromium` (CI) — or set
 * CHROMIUM_PATH to an existing browser binary.
 */
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../dist");
const siteUrl = (process.env.VITE_SITE_URL || "").replace(/\/$/, "");
if (!siteUrl) console.warn("! VITE_SITE_URL not set: sitemap and canonical URLs will use localhost. Set it before a real deploy.");

const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".jpg": "image/jpeg", ".webp": "image/webp", ".png": "image/png", ".json": "application/json", ".txt": "text/plain", ".xml": "application/xml" };
const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname);
  let file = path.join(dist, urlPath);
  if (fs.existsSync(file) && fs.statSync(file).isFile()) {
    res.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream" });
    return fs.createReadStream(file).pipe(res);
  }
  res.writeHead(200, { "Content-Type": "text/html" }); // SPA fallback (shell only)
  fs.createReadStream(path.join(dist, "index.html")).pipe(res);
});
await new Promise((r) => server.listen(0, r));
const origin = `http://localhost:${server.address().port}`;

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const shell = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const page = await browser.newPage();
// Never hit third-party hosts while prerendering (stock images, fonts).
await page.route(/^(?!http:\/\/localhost)/, (route) => route.abort());

const seen = new Set();
const queue = ["/", "/blog"];
const routes = [];

async function render(route) {
  await page.goto(origin + route, { waitUntil: "load" });
  await page.waitForSelector("main h1", { timeout: 10000 });
  await page.waitForTimeout(150);
  return page.evaluate(() => "<!doctype html>\n" + document.documentElement.outerHTML);
}

while (queue.length) {
  const route = queue.shift();
  if (seen.has(route)) continue;
  seen.add(route);
  const html = await render(route);
  const out = path.join(dist, route === "/" ? "" : route, "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  routes.push(route);
  const links = await page.$$eval("a[href^='/']", (as) => as.map((a) => a.getAttribute("href")));
  for (const l of links) {
    const clean = l.split("#")[0].split("?")[0].replace(/\/$/, "") || "/";
    if (!/\.\w+$/.test(clean) && !seen.has(clean)) queue.push(clean);
  }
  console.log("prerendered", route);
}

// 404 page: render an unknown route, keep it out of the sitemap.
const notFound = await render("/__not-found");
fs.writeFileSync(path.join(dist, "404.html"), notFound.replace(/<link rel="canonical"[^>]*>/, ""));
fs.rmSync(path.join(dist, "__not-found"), { recursive: true, force: true });

const base = siteUrl || origin;
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .map((r) => `  <url><loc>${base}${r === "/" ? "/" : r}</loc><lastmod>${today}</lastmod></url>`)
    .join("\n")}\n</urlset>\n`,
);
fs.writeFileSync(path.join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`);

await browser.close();
server.close();
console.log(`Done: ${routes.length} pages + 404.html + sitemap.xml + robots.txt`);
