import { useState, useEffect } from 'react';
import styles from './ThemeToggle.module.css';

const THEME_KEY = 'theme';
const THEME = { DARK: 'dark', LIGHT: 'light' };

// index.html applies the saved theme before first paint — read it back.
function readTheme() {
  return document.documentElement.dataset.theme === THEME.LIGHT
    ? THEME.LIGHT
    : THEME.DARK;
}

function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    // Storage unavailable (private mode) — choice still applies for this visit.
  }
}

function ThemeToggle() {
  const [theme, setTheme] = useState(readTheme);
  const isLight = theme === THEME.LIGHT;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const handleToggle = () => {
    const nextTheme = isLight ? THEME.DARK : THEME.LIGHT;

    setTheme(nextTheme);
    saveTheme(nextTheme);
  };

  return (
    <button
      type="button"
      className={styles.toggle}
      aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
      onClick={handleToggle}
    >
      <svg
        viewBox="0 0 24 24"
        className={styles.icon}
        aria-hidden="true"
        focusable="false"
      >
        {isLight ? (
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        ) : (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </>
        )}
      </svg>
    </button>
  );
}

export default ThemeToggle;
