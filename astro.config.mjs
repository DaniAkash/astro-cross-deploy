import { defineConfig } from "astro/config";
import ci from "ci-info";

// https://astro.build/config
import netlify from "@astrojs/netlify/edge-functions";

// https://astro.build/config
import vercel from "@astrojs/vercel/edge";

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

console.log(process.env.NODE_VERSION)

const adapter = cloudflare()

// https://astro.build/config
export default defineConfig({
	output: "server",
	adapter,
});
