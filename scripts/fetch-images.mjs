/**
 * Downloads every Pexels photo used by the site into public/images so the site
 * serves its own copies. Run once on a machine with internet access:
 *   npm run images
 * then build with VITE_LOCAL_IMAGES=1.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = fs.readFileSync(path.join(root, "src/data/site.ts"), "utf8") + fs.readFileSync(path.join(root, "src/data/blog.ts"), "utf8");
const ids = [...new Set([...src.matchAll(/px\((\d+)/g)].map((m) => m[1]))];
const outDir = path.join(root, "public/images");
fs.mkdirSync(outDir, { recursive: true });

for (const id of ids) {
  const file = path.join(outDir, `${id}.jpg`);
  if (fs.existsSync(file)) continue;
  const url = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`;
  const res = await fetch(url);
  if (!res.ok) { console.error("FAILED", id, res.status); process.exitCode = 1; continue; }
  fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()));
  console.log("saved", id);
}
console.log(`${ids.length} images in public/images`);
