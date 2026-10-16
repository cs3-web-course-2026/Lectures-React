import { Link } from 'react-router-dom';
import { LECTURES, LECTURE_STATUS } from '../../lectures';
import styles from './Lectures.module.css';

function LectureCard({ lecture }) {
  const isReady = lecture.status === LECTURE_STATUS.READY;

  return (
    <li className={`${styles.card} ${isReady ? '' : styles.cardPlanned}`}>
      <div className={styles.cardTop}>
        <span className={styles.icon} role="img" aria-label={lecture.title}>
          {lecture.icon}
        </span>
        <span className={isReady ? styles.badgeReady : styles.badgePlanned}>
          {isReady ? 'Ready' : 'Planned'}
        </span>
      </div>
      <h3>{lecture.title}</h3>
      <p className={styles.topic}>{lecture.topic}</p>
      <p className={styles.summary}>{lecture.summary}</p>
      {isReady ? (
        <Link to={`/lectures/${lecture.slug}`} className={styles.open}>
          Open lecture →
        </Link>
      ) : (
        <span className={styles.soon}>Coming soon</span>
      )}
    </li>
  );
}

function Lectures() {
  return (
    <div>
      <header className={styles.header}>
        <p className={styles.label}>Course materials</p>
        <h1>Lectures</h1>
        <p className={styles.lead}>
          Live demos and code from every lecture. Planned topics appear here
          first and get a page when the lecture is delivered.
        </p>
      </header>

      <ul className={styles.grid}>
        {LECTURES.map((lecture) => (
          <LectureCard key={lecture.slug} lecture={lecture} />
        ))}
      </ul>
    </div>
  );
}

export default Lectures;
