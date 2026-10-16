# CS-3 React Lectures — 2026

![CI](https://github.com/cs3-web-course-2026/Lectures-React/actions/workflows/ci.yml/badge.svg)

**Live site:** https://cs3-web-course-2026.github.io/Lectures-React/

Lecture notes and live demos for the React part of the CS-3 course. Built with React 19, Vite,
React Router and CSS Modules, styled with the **Aurora Glass** design (dark / light).
Every merge into `main` is deployed to GitHub Pages.

## Local setup

You need [Node.js](https://nodejs.org/) 22.12 or newer (24 LTS recommended) and
[pnpm](https://pnpm.io/installation) (`corepack enable` is enough).

```bash
pnpm install
pnpm dev
```

| Script           | What it does                                                |
| ---------------- | ----------------------------------------------------------- |
| `pnpm dev`       | Start the Vite dev server with hot reload                   |
| `pnpm build`     | Create a production build in `dist/`                        |
| `pnpm preview`   | Preview the production build locally                        |
| `pnpm lint`      | Run both linters below                                      |
| `pnpm lint:js`   | [Oxlint](https://oxc.rs/docs/guide/usage/linter) on JS/JSX  |
| `pnpm lint:css`  | Stylelint on `src/**/*.css`                                 |

## Project structure

```
src/
├── components/
│   ├── Layout/          # Floating glass navigation, footer
│   └── ThemeToggle/     # Dark / light switch (saved in localStorage)
├── lectures/
│   ├── index.js         # Registry of all lectures (shown on /lectures)
│   └── example-counter/ # Template lecture — copy it for a new one
├── pages/
│   ├── Home/            # Landing page
│   ├── Lectures/        # Lecture index (Ready / Planned cards)
│   └── Lecture/         # Wrapper that renders /lectures/:slug
├── global.css           # Aurora Glass design tokens (dark + light)
└── main.jsx
```

## Adding a lecture

1. Copy `src/lectures/example-counter/` to `src/lectures/<slug>/` and build the demo in its
   `index.jsx` (styles in a CSS Module next to it).
2. In `src/lectures/index.js`, import the component and add (or update) the entry:
   `status: LECTURE_STATUS.READY` and `component`. Entries without a `component` show up as
   **Planned** placeholders.
3. Use design tokens from `src/global.css` (`var(--color-accent)`, `var(--card-bg)`, …) instead
   of hard-coded colors, so the page works in both themes.

The route `/lectures/<slug>` is created automatically from the registry.
