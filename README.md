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

| Script          | What it does                                               |
| --------------- | ---------------------------------------------------------- |
| `pnpm dev`      | Start the Vite dev server with hot reload                  |
| `pnpm build`    | Create a production build in `dist/`                       |
| `pnpm preview`  | Preview the production build locally                       |
| `pnpm lint`     | Run both linters below                                     |
| `pnpm lint:js`  | [Oxlint](https://oxc.rs/docs/guide/usage/linter) on JS/JSX |
| `pnpm lint:css` | Stylelint on `src/**/*.css`                                |

## Project structure

```
src/
├── components/
│   ├── Layout/          # Floating glass navigation, footer
│   ├── LectureSlot/     # Placeholder shown until a lecture demo is built
│   └── ThemeToggle/     # Dark / light switch (saved in localStorage)
├── lectures/
│   ├── index.js         # Registry of all lectures (shown on /lectures)
│   ├── lecture-10/      # Components, props & state
│   ├── lecture-12/      # Hooks: lifecycle & effects
│   └── lecture-13/      # Scaling component state
├── pages/
│   ├── Home/            # Landing page
│   ├── Lectures/        # Lecture index (Ready / Draft / Planned cards)
│   └── Lecture/         # Wrapper that renders /lectures/:slug
├── global.css           # Aurora Glass design tokens (dark + light)
└── main.jsx
```

## Lectures

Every lecture is its own page at `/lectures/lecture-<N>`. Its code lives in
`src/lectures/lecture-<N>/`; `index.jsx` renders the lecture demo (until it is built it shows
the `LectureSlot` placeholder).

| Page         | Topic                      |
| ------------ | -------------------------- |
| `lecture-10` | Components, props & state  |
| `lecture-12` | Hooks: lifecycle & effects |
| `lecture-13` | Scaling component state    |

## Adding a lecture

1. Copy `src/lectures/lecture-10/` to `src/lectures/lecture-<N>/` and rename the component.
2. In `src/lectures/index.js`, import it and add an entry (`number`, `title`, `topic`,
   `summary`, `component`). Use `LECTURE_STATUS.DRAFT` while the demo is empty and
   `LECTURE_STATUS.READY` when it is done. Entries without a `component` show up as **Planned**
   placeholders that cannot be opened.
3. Build the demo in the lecture folder (styles in a CSS Module next to the component). Use
   design tokens from `src/global.css` (`var(--color-accent)`, `var(--card-bg)`, …) instead of
   hard-coded colors, so the page works in both themes.

The route `/lectures/lecture-<N>` is created automatically from the registry.
