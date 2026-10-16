import { Link, useParams } from 'react-router-dom';
import { findLecture } from '../../lectures';
import styles from './Lecture.module.css';

function Lecture() {
  const { slug } = useParams();
  const lecture = findLecture(slug);
  const LectureDemo = lecture?.component;

  if (!LectureDemo) {
    return (
      <div className={styles.notFound}>
        <h1>Lecture not found</h1>
        <p>This lecture does not exist yet, or it is still being prepared.</p>
        <Link to="/lectures" className={styles.back}>
          ← All lectures
        </Link>
      </div>
    );
  }

  return (
    <article className={styles.lecture}>
      <Link to="/lectures" className={styles.back}>
        ← All lectures
      </Link>
      <header className={styles.header}>
        <span className={styles.eyebrow}>
          Lecture {lecture.number} · {lecture.topic}
        </span>
        <h1>{lecture.title}</h1>
        <p>{lecture.summary}</p>
      </header>
      <LectureDemo />
    </article>
  );
}

export default Lecture;
