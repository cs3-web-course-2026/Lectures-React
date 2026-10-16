import { useState } from 'react';
import styles from './ExampleCounter.module.css';

const STEPS = [1, 5, 10];

function ExampleCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(STEPS[0]);

  return (
    <section className={styles.demo} aria-label="Counter demo">
      <p className={styles.value} role="status" aria-live="polite">
        {count}
      </p>

      <div className={styles.controls}>
        <button type="button" onClick={() => setCount(count - step)}>
          − {step}
        </button>
        <button type="button" onClick={() => setCount(count + step)}>
          + {step}
        </button>
        <button type="button" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>

      <div className={styles.steps} role="group" aria-label="Step size">
        {STEPS.map((stepOption) => (
          <button
            key={stepOption}
            type="button"
            className={stepOption === step ? styles.stepActive : styles.step}
            aria-pressed={stepOption === step}
            onClick={() => setStep(stepOption)}
          >
            step {stepOption}
          </button>
        ))}
      </div>
    </section>
  );
}

export default ExampleCounter;
