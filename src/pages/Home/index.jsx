import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const TOPICS = [
  {
    icon: '🧩',
    label: 'Puzzle piece',
    title: 'Components & Props',
    text: 'Split the UI into small components and pass data down with props.',
  },
  {
    icon: '⚡',
    label: 'Lightning',
    title: 'State & Events',
    text: 'Model interaction with useState and handle user input declaratively.',
  },
  {
    icon: '🌐',
    label: 'Globe',
    title: 'Effects & Data',
    text: 'Synchronize with timers, events and HTTP using useEffect and fetch.',
  },
  {
    icon: '🪝',
    label: 'Hook',
    title: 'Context & Hooks',
    text: 'Share state with context and extract reusable logic into custom hooks.',
  },
];

const SNIPPET = `function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}`;

function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <span className={styles.heroIcon} role="img" aria-label="React">
          ⚛️
        </span>
        <span className={styles.eyebrow}>React Course · CS-3 · 2026</span>
        <h1>
          Learn <span className={styles.heroAccent}>React</span>
          <br />
          by building
        </h1>
        <p className={styles.heroSubtitle}>
          Lecture notes and live demos for CS-3 students. Every topic comes with
          a working example you can read, run and take apart.
        </p>
        <div className={styles.heroActions}>
          <Link to="/lectures" className={styles.primaryBtn}>
            Browse Lectures →
          </Link>
          <a
            href="https://react.dev/learn"
            className={styles.secondaryBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            React Docs
          </a>
        </div>
      </section>

      <hr className={styles.divider} />

      <section className={styles.features}>
        <p className={styles.sectionLabel}>What we cover</p>
        <h2 className={styles.sectionTitle}>Course topics</h2>
        <div className={styles.featureGrid}>
          {TOPICS.map((topic) => (
            <div key={topic.title} className={styles.featureCard}>
              <span
                className={styles.featureIcon}
                role="img"
                aria-label={topic.label}
              >
                {topic.icon}
              </span>
              <h3>{topic.title}</h3>
              <p>{topic.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.pane} aria-label="Code preview">
        <div className={styles.chips}>
          <span className={styles.chip}>⚛️ React 19</span>
          <span className={styles.chip}>⚡ Vite</span>
          <span className={styles.chip}>● Live demos</span>
        </div>
        <pre className={styles.code}>
          <code>{SNIPPET}</code>
        </pre>
      </section>
    </div>
  );
}

export default Home;
