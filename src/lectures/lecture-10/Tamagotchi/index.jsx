import { useState } from 'react';
import styles from './Tamagotchi.module.css';

function Tamagotchi() {
  const [mood, setMood] = useState('😊');
  const [hunger, setHunger] = useState(5); // 0 = full, 10 = starving

  const handleFeed = () => {
    setHunger((prev) => Math.max(0, prev - 3));
    // setMood('😊');
    setMood('😊');
  };

  const handlePlay = () => {
    const next = Math.min(10, hunger + 2);
    setHunger(next);
    setMood(next > 8 ? '😢' : '🥳');
  };

  const isStarving = hunger > 7;

  return (
    <div className={styles.device}>
      <h3 className={styles.title}>Тамагочі</h3>

      <div className={styles.screen}>
        <span className={styles.mood}>{mood}</span>

        <p className={styles.label}>Голод: {hunger}/10</p>
        {/* Each segment is on or off depending on the hunger state */}
        <div className={styles.segments}>
          {Array.from({ length: 10 }, (_, index) => {
            const filled = index < hunger;
            const tone = isStarving ? styles.segmentDanger : styles.segmentOn;
            return (
              <span
                key={index}
                className={`${styles.segment} ${filled ? tone : ''}`}
              />
            );
          })}
        </div>
      </div>

      <div className={styles.buttons}>
        <button
          type="button"
          className={`${styles.btn} ${styles.btnFeed}`}
          onClick={handleFeed}
        >
          Годувати 🍔
        </button>
        <button
          type="button"
          className={`${styles.btn} ${styles.btnPlay}`}
          onClick={handlePlay}
        >
          Гратись ⚽
        </button>
      </div>
    </div>
  );
}

export default Tamagotchi;
