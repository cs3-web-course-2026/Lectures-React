import styles from './DemoSection.module.css';

function DemoSection({ step, title, concepts, explanation, children }) {
  return (
    <section className={styles.section} aria-labelledby={`demo-${step}`}>
      <header className={styles.header}>
        <span className={styles.step}>{step}</span>
        <h2 id={`demo-${step}`} className={styles.title}>
          {title}
        </h2>
      </header>
      <ul className={styles.concepts}>
        {concepts.map((concept) => (
          <li key={concept} className={styles.concept}>
            {concept}
          </li>
        ))}
      </ul>
      <div className={styles.explanation}>{explanation}</div>
      <div className={styles.stage}>{children}</div>
    </section>
  );
}

export default DemoSection;
