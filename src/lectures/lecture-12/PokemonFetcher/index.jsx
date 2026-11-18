import { useEffect, useState } from 'react';
import demo from '../demo.module.css';
import styles from './PokemonFetcher.module.css';

const MAX_ID = 1025;

function PokemonFetcher() {
  const [pokemonId, setPokemonId] = useState(1);
  // The latest finished request: { id, pokemon } or { id, error }
  const [result, setResult] = useState(null);

  // Derived during render, so the effect never has to set it synchronously
  const loading = result === null || result.id !== pokemonId;
  const pokemon = loading ? null : result.pokemon;
  const error = loading ? null : result.error;

  // Runs after the first render and again every time `pokemonId` changes
  useEffect(() => {
    // Guards against a slow, outdated response overwriting a newer one
    let ignore = false;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!ignore) setResult({ id: pokemonId, pokemon: data });
      })
      .catch((err) => {
        if (!ignore) setResult({ id: pokemonId, error: err.message });
      });

    // Cleanup: runs before the next effect and on unmount
    return () => {
      ignore = true;
    };
  }, [pokemonId]);

  console.log('render', pokemon);

  const go = (id) => setPokemonId(Math.min(MAX_ID, Math.max(1, id)));

  return (
    <div className={demo.panel}>
      <h3 className={demo.panelTitle}>Pokémon Fetcher</h3>
      <div className={demo.row}>
        <button type="button" onClick={() => go(pokemonId - 1)}>
          ← Попередній
        </button>
        <input
          type="number"
          className={`${demo.input} ${demo.numberInput}`}
          value={pokemonId}
          min={1}
          max={MAX_ID}
          aria-label="Pokémon ID"
          onChange={(e) => go(Number(e.target.value) || 1)}
        />
        <button type="button" onClick={() => go(pokemonId + 1)}>
          Наступний →
        </button>
      </div>

      <div className={styles.card} aria-live="polite">
        {loading && <p className={styles.status}>Завантаження…</p>}
        {!loading && error && (
          <p className={`${styles.status} ${styles.error}`}>
            Помилка: {error}
          </p>
        )}
        {!loading && pokemon && (
          <div>
            <img
              className={styles.sprite}
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
            />
            <h4 className={styles.name}>
              #{pokemon.id} {pokemon.name}
            </h4>
          </div>
        )}
      </div>

      <p className={styles.url}>GET /api/v2/pokemon/{pokemonId}</p>
      <p className={demo.hint}>
        Спробуйте замінити <code>[pokemonId]</code> на <code>[]</code>: ефект
        виконається лише раз і кнопки перестануть працювати.
      </p>
    </div>
  );
}

export default PokemonFetcher;
