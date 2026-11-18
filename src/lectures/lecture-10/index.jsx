import DemoSection from '@components/DemoSection';
import Recipe from './Recipe';
import Tamagotchi from './Tamagotchi';
import Thermostats from './Thermostat';

function Lecture10() {
  return (
    <>
      <DemoSection
        step={1}
        title="Composition: cookie recipes"
        concepts={['components', 'props', 'composition', 'map() + key']}
        explanation={
          <>
            <p>
              A UI is a <strong>tree of small components</strong>, each with one
              job. <code>IngredientsList</code> and <code>Instructions</code>{' '}
              know nothing about cookies: they render whatever arrives in their
              props. <code>RecipeCard</code> composes them and hands each its
              data.
            </p>
            <p>
              That is what makes a component <strong>reusable</strong>: the
              same <code>RecipeCard</code> is rendered three times with{' '}
              <code>.map()</code>, once per object in the <code>recipes</code>{' '}
              array. Add a fourth object and a fourth card appears, with no new
              markup. Each card gets a unique <code>key</code> so React can
              track it.
            </p>
          </>
        }
      >
        <Recipe />
      </DemoSection>

      <DemoSection
        step={2}
        title="State: the Tamagotchi"
        concepts={['useState', 'events', 'derived UI', 'functional update']}
        explanation={
          <>
            <p>
              <code>useState</code> gives a component memory. Calling the
              setter (<code>setHunger</code>, <code>setMood</code>) stores the
              new value and <strong>re-renders</strong> the component. Plain
              variables would reset on every render.
            </p>
            <p>
              The emoji, bar width and bar color are not stored, they are{' '}
              <strong>computed from state</strong> on each render. When the new
              value depends on the old one, use the form{' '}
              <code>setHunger(prev =&gt; …)</code>.
            </p>
          </>
        }
      >
        <Tamagotchi />
      </DemoSection>

      <DemoSection
        step={3}
        title="Props vs state: the smart thermostat"
        concepts={['props', 'state', 'read-only props', 'independent instances']}
        explanation={
          <>
            <p>
              <strong>Props</strong> are configuration from the outside:{' '}
              <code>roomName</code>, <code>minTemp</code>,{' '}
              <code>maxTemp</code>. The component only reads them.{' '}
              <strong>State</strong> is data the component owns and changes:
              the current <code>temperature</code>.
            </p>
            <p>
              <code>TemperatureDisplay</code> has no state, it is a function of
              its props. Each of the three thermostats runs the same code but
              keeps <strong>its own state</strong>: changing one room does not
              touch the others.
            </p>
          </>
        }
      >
        <Thermostats />
      </DemoSection>
    </>
  );
}

export default Lecture10;
