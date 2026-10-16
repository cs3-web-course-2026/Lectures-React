import Lecture10 from './lecture-10';
import Lecture12 from './lecture-12';
import Lecture13 from './lecture-13';

export const LECTURE_STATUS = {
  READY: 'ready',
  DRAFT: 'draft',
  PLANNED: 'planned',
};

// Add a lecture: copy src/lectures/lecture-10/ to src/lectures/lecture-<N>/,
// import it here and add an entry. The page /lectures/lecture-<N> appears
// automatically. Entries without a `component` are shown as "Planned"
// placeholders and cannot be opened.
//
// Status: DRAFT while the slot is empty, READY once the demo is finished.
export const LECTURES = [
  {
    slug: 'lecture-10',
    number: 10,
    icon: '🧩',
    title: 'Components, props & state',
    topic: 'JSX, props, useState',
    summary:
      'The building blocks of every React UI: components, data flowing down through props and state that changes over time.',
    status: LECTURE_STATUS.DRAFT,
    component: Lecture10,
  },
  {
    slug: 'lecture-12',
    number: 12,
    icon: '🪝',
    title: 'Hooks: lifecycle & effects',
    topic: 'useEffect, cleanup, custom hooks',
    summary:
      'How a component lives and dies, and how to synchronize it with timers, events and the network.',
    status: LECTURE_STATUS.DRAFT,
    component: Lecture12,
  },
  {
    slug: 'lecture-13',
    number: 13,
    icon: '📈',
    title: 'Scaling component state',
    topic: 'lifting state, context, useReducer',
    summary:
      'What to do when state outgrows a single component: lift it up, share it with context, organize it with reducers.',
    status: LECTURE_STATUS.DRAFT,
    component: Lecture13,
  },
];

export function findLecture(slug) {
  return LECTURES.find((lecture) => lecture.slug === slug);
}
