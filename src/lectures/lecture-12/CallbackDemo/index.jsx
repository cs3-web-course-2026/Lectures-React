import { memo, useCallback, useEffect, useRef, useState } from 'react';
import demo from '../demo.module.css';
import styles from './CallbackDemo.module.css';

// memo: skip the re-render when props are shallowly equal
const MagicButton = memo(function MagicButton({ label, onMagicClick }) {
  const boxRef = useRef(null);
  const countRef = useRef(null);
  const last = useRef(null);
  const renders = useRef(0);

  // Effects run after every real render. StrictMode re-runs the first one
  // with identical props, which the check below ignores.
  useEffect(() => {
    if (last.current === onMagicClick) return;
    last.current = onMagicClick;
    renders.current += 1;
    countRef.current.textContent = `рендерів: ${renders.current}`;
    if (renders.current > 1) {
      boxRef.current.animate(
        { background: ['var(--color-accent-dim)', 'var(--color-surface-1)'] },
        { duration: 600 },
      );
    }
  });

  return (
    <div ref={boxRef} className={styles.child}>
      <p className={styles.label}>{label}</p>
      <button type="button" onClick={onMagicClick}>
        Зробити Магію ✨
      </button>
      <span ref={countRef} className={demo.badge}>
        рендерів: 1
      </span>
    </div>
  );
});

function CallbackDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // New function on every render of CallbackDemo -> memo is defeated
  const handleMagicClick = () => {
    setCount((c) => c + 1);
  };

  // Same function between renders -> memo can skip the child
  const handleMagicClickMemoized = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div className={styles.layout}>
      <div className={styles.top}>
        <input
          type="text"
          className={demo.input}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Вводьте текст…"
          aria-label="Unrelated text input"
        />
        <p className={styles.counter}>Лічильник: {count}</p>
      </div>

      <div className={styles.compare}>
        <MagicButton label="Без useCallback" onMagicClick={handleMagicClick} />
        <MagicButton
          label="З useCallback"
          onMagicClick={handleMagicClickMemoized}
        />
      </div>

      <p className={demo.hint}>
        Вводьте текст: ліва кнопка ре-рендериться на кожен символ, права ні,
        хоча обидві обгорнуті в <code>React.memo</code>.
      </p>
    </div>
  );
}

export default CallbackDemo;
