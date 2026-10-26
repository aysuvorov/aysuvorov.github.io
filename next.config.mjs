/**
 * Next.js config tuned for GitHub Pages hosting.
 *
 * GitHub Pages serves only static files, so we use `output: "export"` which
 * produces a fully static `out/` directory during `next build`. We also:
 *   - disable `next/image` optimization (Pages has no Next image server),
 *   - read `basePath`/`assetPrefix` from env so the same code works for both
 *     `user.github.io` (root) and `user.github.io/repo-name/` (subpath),
 *   - drop the runtime `headers()` block (CSP) — it is not supported with
 *     static export and would fail the build. The iframe-embedding use case
 *     it covered is preserved by Pages' default behaviour; if you need a
 *     strict CSP, set it via a `<meta http-equiv>` tag in the layout.
 *
 * The deploy workflow (`.github/workflows/deploy.yml`) sets
 * `NEXT_PUBLIC_BASE_PATH` automatically from the repo name, so you usually
 * don't need to touch this file at all.
 */

// Empty string for project-page repos (`user.github.io`); otherwise `/repo-name`.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a static `out/` folder instead of a Node server bundle.
  output: "export",

  // next/image needs its own server to optimize images; GitHub Pages can't
  // run that, so we ship images as-is. The <Image> component still prepends
  // basePath automatically and still applies width/height/sizes correctly.
  images: {
    unoptimized: true,
    remotePatterns: [],
  },

  // Make every asset URL prefixed with the GitHub Pages subpath.
  // Both must be set: `basePath` affects <Link>/router, `assetPrefix`
  // affects <script>/<link>/chunks.
  ...(BASE_PATH
    ? {
        basePath: BASE_PATH,
        assetPrefix: `${BASE_PATH}/`,
      }
    : {}),

  // Emit `out/.nojekyll` so GitHub Pages doesn't skip the `_next/` folder
  // (Jekyll ignores files/folders starting with `_`). We add a literal
  // `public/.nojekyll` file which `next build` copies into `out/` automatically.

  // Strict trailing-slash behavior — Pages URLs are cleaner with `/page/`,
  // and anchor links (#services, #contact, ...) keep working.
  trailingSlash: true,

  reactStrictMode: true,
};

export default nextConfig;
