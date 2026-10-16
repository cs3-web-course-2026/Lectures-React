import styles from './LectureSlot.module.css';

function LectureSlot({ number }) {
  return (
    <section className={styles.slot} aria-label={`Lecture ${number} demo`}>
      <span className={styles.icon} role="img" aria-label="Construction">
        🚧
      </span>
      <p className={styles.title}>Lecture {number} demo goes here</p>
      <p className={styles.hint}>
        Put the lecture components in{' '}
        <code>src/lectures/lecture-{number}/</code> and render them from its{' '}
        <code>index.jsx</code>.
      </p>
    </section>
  );
}

export default LectureSlot;
