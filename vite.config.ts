import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = { ...loadEnv(mode, __dirname, ""), ...process.env };
  const vercelUrl = env.VERCEL_PROJECT_PRODUCTION_URL || env.VERCEL_URL;
  const vercelSiteUrl = vercelUrl
    ? `https://${String(vercelUrl).replace(/^https?:\/\//, "").replace(/\/$/, "")}`
    : "";
  const siteUrl = (env.VITE_SITE_URL || vercelSiteUrl).replace(/\/$/, "");

  return {
    plugins: [react(), tailwindcss()],
    define: {
      "import.meta.env.VITE_SITE_URL": JSON.stringify(siteUrl),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  };
});
