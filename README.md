# Cross platform deployment PoC for Astro

This project is a PoC created to check if an Astro project can be deployed across all edge environments － netlify, vercel, deno & cloudflare pages at the same time with same codebase & by only modifying the astro config.

This project has 4 routes:
- `/` - static html page
- `/todos` - SSR page
- `/edge.json` - plain api route
- `/todoData.json` - api route that uses fetch api

## Deployed app:

### Vercel:
- https://astro-cross-deploy.vercel.app/
- https://astro-cross-deploy.vercel.app/todos
- https://astro-cross-deploy.vercel.app/edge.json
- https://astro-cross-deploy.vercel.app/todoData.json

### Netlify:
- https://astro-cross-deploy.netlify.app/
- https://astro-cross-deploy.netlify.app/todos
- https://astro-cross-deploy.netlify.app/edge.json
- https://astro-cross-deploy.netlify.app/todoData.json

### Cloudflare Pages:
- https://astro-cross-deploy.pages.dev/
- https://astro-cross-deploy.pages.dev/todos
- https://astro-cross-deploy.pages.dev/edge.json
- https://astro-cross-deploy.pages.dev/todoData.json

### Deno Deploy:
- https://astro-cross-deploy.deno.dev/
- https://astro-cross-deploy.deno.dev/todos
- https://astro-cross-deploy.deno.dev/edge.json
- https://astro-cross-deploy.deno.dev/todoData.json

## Astro config

This project uses `ci-info` to detect the CI/CD & use the appropriate adapter for the deployment target. Refer [config file](https://github.com/DaniAkash/astro-cross-deploy/blob/main/astro.config.mjs)