import demo from '../demo.module.css';
import styles from './LocalStorageDemo.module.css';
import { useLocalStorage } from './useLocalStorage';

function LocalStorageDemo() {
  // Looks like useState, but "with a superpower"
  const [name, setName] = useLocalStorage('l12-username', 'Гість');
  const [theme, setTheme] = useLocalStorage('l12-theme', 'light');

  const reset = () => {
    setName('Гість');
    setTheme('light');
  };

  return (
    <div className={`${styles.card} ${theme === 'dark' ? styles.dark : ''}`}>
      <h3 className={demo.panelTitle}>
        Власний хук: <code>useLocalStorage</code>
      </h3>

      <label className={styles.field}>
        Ім&apos;я
        <input
          type="text"
          className={demo.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <div className={demo.row}>
        <button
          type="button"
          onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
        >
          Змінити тему (зараз: {theme})
        </button>
        <button type="button" onClick={reset}>
          Скинути
        </button>
      </div>

      <p className={styles.greeting}>Вітаємо, {name}!</p>

      <pre className={styles.storage}>
        {`localStorage\n  l12-username: ${JSON.stringify(name)}\n  l12-theme: ${JSON.stringify(theme)}`}
      </pre>

      <p className={demo.hint}>
        Змініть значення і <strong>оновіть сторінку (F5)</strong>: дані
        залишаться.
      </p>
    </div>
  );
}

export default LocalStorageDemo;
