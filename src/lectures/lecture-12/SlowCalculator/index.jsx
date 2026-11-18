import { useMemo, useState } from 'react';
import demo from '../demo.module.css';
import styles from './SlowCalculator.module.css';

// Pretend this is a very expensive calculation (~0.1–0.4 s)
const slowDouble = (num) => {
  const start = performance.now();
  let i = 0;
  while (i < 300_000_000) {
    i++;
  }
  return { value: num * 2, ms: Math.round(performance.now() - start) };
};

// Runs the calculation on EVERY render
function WithoutMemo({ number }) {
  const { value, ms } = slowDouble(number);
  return (
    <Result label="Без useMemo" value={value} badge={`перераховано: ${ms} мс`} />
  );
}

// Re-runs the calculation only when `number` changes
function WithMemo({ number }) {
  const { value, ms } = useMemo(() => slowDouble(number), [number]);
  return (
    <Result
      label="З useMemo"
      value={value}
      badge={`порахував лише раз: ${ms} мс`}
      cached
    />
  );
}

function Result({ label, value, badge, cached }) {
  return (
    <div
      className={`${styles.result} ${cached ? styles.resultOk : styles.resultBad}`}
    >
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>{value}</p>
      <p className={styles.time}>
        <span
          className={`${demo.badge} ${cached ? demo.badgeOk : demo.badgeWarn}`}
        >
          {badge}
        </span>
      </p>
    </div>
  );
}

function SlowCalculator() {
  const [number, setNumber] = useState(1);
  const [theme, setTheme] = useState('light'); // unrelated to the calculation

  return (
    <div className={`${styles.wrap} ${theme === 'dark' ? styles.dark : ''}`}>
      <div className={styles.controls}>
        <label className={demo.row}>
          Число:
          <input
            type="number"
            className={`${demo.input} ${demo.numberInput}`}
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
          />
        </label>
        <button
          type="button"
          onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
        >
          Змінити тему ({theme})
        </button>
      </div>

      <div className={styles.compare}>
        <WithoutMemo number={number} />
        <WithMemo number={number} />
      </div>

      <p className={demo.hint}>
        Натисніть «Змінити тему»: ліва картка «зависає» і щоразу перераховує
        значення, права бере його з кешу, бо <code>number</code> не змінився.
      </p>
    </div>
  );
}

export default SlowCalculator;
