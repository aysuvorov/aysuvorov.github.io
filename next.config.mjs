/**
 * Next.js config tuned for GitHub Pages hosting.
 *
 * GitHub Pages serves only static files, so we use `output: "export"` which
 * produces a fully static `out/` directory during `next build`. We also:
 *   - disable `next/image` optimization (Pages has no Next image server),
 *   - read `basePath`/`assetPrefix` from env so the same code works for both
 *     `user.github.io` (root) and `user.github.io/repo-name/` (subpath),
 *   - drop the runtime `headers()` block — it is not supported with static
 *     export and would fail the build.
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

  // Next/image needs its own server to optimize images; GitHub Pages can't
  // run that, so we ship images as-is.
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
  // (Jekyll ignores files/folders starting with `_`).
  // Implemented below via webpack copy + a postbuild step is unnecessary —
  // we instead add a literal `public/.nojekyll` file which `next build`
  // copies into `out/` automatically.

  // Strict trailing-slash behavior — Pages URLs are cleaner with `/page/`.
  trailingSlash: true,

  reactStrictMode: true,
};

export default nextConfig;
