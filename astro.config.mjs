import { defineConfig } from "astro/config";
import ci from "ci-info";

// https://astro.build/config
import deno from '@astrojs/deno';

// https://astro.build/config
import netlify from "@astrojs/netlify/edge-functions";

// https://astro.build/config
import vercel from "@astrojs/vercel/edge";

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

const adapter =
	// Using custom env to detect cloudflare
	process.env.NODE_VERSION === "v14.18.0"
		? cloudflare()
		// deno build runs on github actions
		: ci.GITHUB_ACTIONS
		? deno()
		: ci.NETLIFY
		? netlify()
		: ci.VERCEL
		? vercel()
		: undefined;

// https://astro.build/config
export default defineConfig({
	output: "server",
	adapter,
});
