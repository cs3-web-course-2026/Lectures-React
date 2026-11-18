import { useEffect, useState } from 'react';

// Same API as useState, but the value survives a page reload
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // storage unavailable or full: keep working in memory
    }
  }, [key, value]);

  return [value, setValue];
}
