import ExampleCounter from './example-counter';

export const LECTURE_STATUS = {
  READY: 'ready',
  PLANNED: 'planned',
};

// Add a lecture: create src/lectures/<slug>/index.jsx, import it here and
// switch the entry to LECTURE_STATUS.READY with its `component`.
// Entries without a `component` are shown as "Planned" placeholders.
export const LECTURES = [
  {
    slug: 'example-counter',
    icon: '🧪',
    title: 'Example lecture',
    topic: 'State & events',
    summary:
      'Template page: a live demo with useState. Copy this folder to start a new lecture.',
    status: LECTURE_STATUS.READY,
    component: ExampleCounter,
  },
  {
    slug: 'components-and-props',
    icon: '🧩',
    title: 'Components & props',
    topic: 'JSX, composition, props drilling',
    summary: 'Split the UI into components and pass data down with props.',
    status: LECTURE_STATUS.PLANNED,
  },
  {
    slug: 'effects-and-data',
    icon: '🌐',
    title: 'Effects & data fetching',
    topic: 'useEffect, fetch, cleanup',
    summary: 'Synchronize with the outside world: timers, events, HTTP.',
    status: LECTURE_STATUS.PLANNED,
  },
  {
    slug: 'context-and-hooks',
    icon: '🪝',
    title: 'Context & custom hooks',
    topic: 'useContext, theme provider, reusable logic',
    summary: 'Share state without props drilling and extract logic into hooks.',
    status: LECTURE_STATUS.PLANNED,
  },
];

export function findLecture(slug) {
  return LECTURES.find((lecture) => lecture.slug === slug);
}
