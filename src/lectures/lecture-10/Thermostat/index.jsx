import { useState } from 'react';
import styles from './Thermostat.module.css';

function getComfort(temperature) {
  if (temperature > 25) return { emoji: '🥵', color: '#e74c3c' };
  if (temperature < 18) return { emoji: '🥶', color: '#3498db' };
  return { emoji: '😌', color: '#2ecc71' };
}

// Child: only displays what it receives, owns no state
function TemperatureDisplay({ current, min, max, roomName }) {
  const { emoji, color } = getComfort(current);
  const percent = ((current - min) / (max - min)) * 100;

  return (
    <>
      <p className={styles.roomName}>{roomName}</p>
      <div
        className={styles.ring}
        style={{ '--pct': percent, '--ring-color': color }}
      >
        <div className={styles.reading}>
          <span className={styles.temperature} style={{ color }}>
            {current}°C
          </span>
          <span className={styles.emoji}>{emoji}</span>
        </div>
      </div>
      <p className={styles.range}>
        {min}°C — {max}°C
      </p>
    </>
  );
}

// Parent: owns the state, passes it down as props
function Thermostat({ roomName, minTemp, maxTemp }) {
  const [temperature, setTemperature] = useState(22);

  const increase = () => setTemperature((t) => Math.min(maxTemp, t + 1));
  const decrease = () => setTemperature((t) => Math.max(minTemp, t - 1));

  return (
    <div className={styles.card}>
      <TemperatureDisplay
        current={temperature}
        min={minTemp}
        max={maxTemp}
        roomName={roomName}
      />
      <div className={styles.controls}>
        <button
          type="button"
          className={styles.btn}
          onClick={decrease}
          aria-label={`Decrease ${roomName} temperature`}
        >
          −
        </button>
        <button
          type="button"
          className={styles.btn}
          onClick={increase}
          aria-label={`Increase ${roomName} temperature`}
        >
          +
        </button>
      </div>
    </div>
  );
}

// Three instances of one component: same code, different props, separate state
function Thermostats() {
  return (
    <div className={styles.grid}>
      <Thermostat roomName="Вітальня 🛋️" minTemp={10} maxTemp={35} />
      <Thermostat roomName="Спальня 🛏️" minTemp={15} maxTemp={30} />
      <Thermostat roomName="Серверна 🖥️" minTemp={0} maxTemp={50} />
    </div>
  );
}

export default Thermostats;
