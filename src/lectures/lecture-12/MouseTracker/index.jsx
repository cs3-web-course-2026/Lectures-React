import { useCallback, useEffect, useRef, useState } from 'react';
import demo from '../demo.module.css';
import styles from './MouseTracker.module.css';

// Child that is mounted and unmounted by the parent
function Tracker({ onEvent }) {
  const dotRef = useRef(null);
  const [position, setPosition] = useState({ x: 85, y: 85 });
  console.log('render <Tracker>', position);

  useEffect(() => {
    onEvent('mount', 'addEventListener("mousemove")');

    const handleMouseMove = (e) => {
      console.log('mousemove handler still alive');
      // The dot lives inside the arena, so measure relative to it
      const arena = dotRef.current?.offsetParent;
      if (!arena) return;
      const rect = arena.getBoundingClientRect();
      setPosition({
        x: Math.round(e.clientX - rect.left),
        y: Math.round(e.clientY - rect.top),
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup: React calls it when the component unmounts
    return () => {
      onEvent('cleanup', 'removeEventListener("mousemove")');
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [onEvent]);

  return (
    <div
      ref={dotRef}
      className={styles.dot}
      style={{ left: position.x, top: position.y }}
    />
  );
}

function MouseTrackerDemo() {
  const [isVisible, setIsVisible] = useState(false);
  const [log, setLog] = useState([]);

  // Stable identity, so the effect in <Tracker> is not re-run on every render
  const handleEvent = useCallback((kind, text) => {
    setLog((prev) => [...prev, { id: prev.length, kind, text }].slice(-30));
  }, []);

  const listeners = log.reduce(
    (n, item) => n + (item.kind === 'mount' ? 1 : -1),
    0,
  );
  const logRef = useRef(null);
  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [log]);

  return (
    <div className={demo.panel}>
      <h3 className={demo.panelTitle}>Демонстрація функції очищення</h3>
      <button type="button" onClick={() => setIsVisible((v) => !v)}>
        {isVisible ? 'Сховати трекер' : 'Показати трекер'}
      </button>

      <div className={styles.arena}>
        {isVisible ? (
          <Tracker onEvent={handleEvent} />
        ) : (
          <p className={styles.empty}>Трекер не змонтовано</p>
        )}
      </div>

      <div className={styles.stats}>
        <span
          className={`${demo.badge} ${listeners > 0 ? demo.badgeOk : demo.badgeWarn}`}
        >
          активних слухачів: {Math.max(0, listeners)}
        </span>
      </div>

      <ul ref={logRef} className={styles.log} aria-label="Effect log">
        {log.length === 0 && <li>Лог порожній: покажіть трекер</li>}
        {log.map((item) => (
          <li
            key={item.id}
            className={item.kind === 'mount' ? styles.mount : styles.cleanup}
          >
            {item.kind === 'mount' ? '▶ ефект' : '■ очищення'}: {item.text}
          </li>
        ))}
      </ul>
      <p className={demo.hint}>
        У dev-режимі <code>StrictMode</code> монтує ефект двічі: це навмисна
        перевірка того, що очищення написане правильно.
      </p>
    </div>
  );
}

export default MouseTrackerDemo;
