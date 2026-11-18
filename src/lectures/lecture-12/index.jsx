import DemoSection from '@components/DemoSection';
import CallbackDemo from './CallbackDemo';
import LocalStorageDemo from './LocalStorageDemo';
import MouseTrackerDemo from './MouseTracker';
import PokemonFetcher from './PokemonFetcher';
import SlowCalculator from './SlowCalculator';

function Lecture12() {
  return (
    <>
      <DemoSection
        step={1}
        title="useEffect: fetching data"
        concepts={['useEffect', 'dependency array', 'fetch', 'loading / error']}
        explanation={
          <>
            <p>
              <code>useEffect</code> runs code <strong>after render</strong>,
              for work that lives outside React: network requests, timers,
              subscriptions. The <strong>dependency array</strong> decides when
              it runs again: here <code>[pokemonId]</code> means &ldquo;after the
              first render and whenever the ID changes&rdquo;.
            </p>
            <p>
              The effect also returns a cleanup that sets{' '}
              <code>ignore = true</code>, so a slow response for an old ID can
              never overwrite a newer one. With <code>[]</code> the effect would
              run once and ignore the buttons.
            </p>
          </>
        }
      >
        <PokemonFetcher />
      </DemoSection>

      <DemoSection
        step={2}
        title="useEffect: cleanup function"
        concepts={['cleanup', 'addEventListener', 'mount / unmount', 'StrictMode']}
        explanation={
          <>
            <p>
              An effect that subscribes to something must{' '}
              <strong>unsubscribe</strong>. The function returned from the
              effect is the cleanup: React calls it when the component
              unmounts (and before the effect re-runs).
            </p>
            <p>
              Without it, every show/hide would leave one more{' '}
              <code>mousemove</code> listener on <code>window</code>, a memory
              leak that keeps updating state of a component that no longer
              exists. Watch the listener counter and the log.
            </p>
          </>
        }
      >
        <MouseTrackerDemo />
      </DemoSection>

      <DemoSection
        step={3}
        title="useMemo: caching slow calculations"
        concepts={['useMemo', 'dependencies', 'unrelated re-renders']}
        explanation={
          <>
            <p>
              Every state change re-renders the component, and every render
              re-runs the code inside it, including expensive calculations.{' '}
              <code>useMemo(fn, [deps])</code> remembers the result and
              recomputes it only when a dependency changes.
            </p>
            <p>
              Changing the theme has nothing to do with the doubled number, yet
              the left card pays the full price again. Use <code>useMemo</code>{' '}
              for measurably slow work, not for every value.
            </p>
          </>
        }
      >
        <SlowCalculator />
      </DemoSection>

      <DemoSection
        step={4}
        title="useCallback + React.memo"
        concepts={['useCallback', 'React.memo', 'referential equality']}
        explanation={
          <>
            <p>
              A function declared inside a component is a{' '}
              <strong>new object on every render</strong>. <code>React.memo</code>{' '}
              compares props by reference, so a new function means &ldquo;props
              changed&rdquo; and the child re-renders.
            </p>
            <p>
              <code>useCallback</code> returns the same function between
              renders until its dependencies change. Both pieces are needed:{' '}
              <code>memo</code> without <code>useCallback</code> does nothing
              here.
            </p>
          </>
        }
      >
        <CallbackDemo />
      </DemoSection>

      <DemoSection
        step={5}
        title="Custom hook: useLocalStorage"
        concepts={['custom hook', 'lazy initial state', 'useEffect', 'reuse']}
        explanation={
          <>
            <p>
              A custom hook is a function whose name starts with{' '}
              <code>use</code> and that calls other hooks. It extracts{' '}
              <strong>stateful logic</strong> so any component can reuse it.
            </p>
            <p>
              <code>useLocalStorage</code> wraps <code>useState</code> (initial
              value read lazily from storage) and <code>useEffect</code> (write
              on every change). Components use it exactly like{' '}
              <code>useState</code>; here it is called twice, for the name and
              the theme.
            </p>
          </>
        }
      >
        <LocalStorageDemo />
      </DemoSection>
    </>
  );
}

export default Lecture12;
