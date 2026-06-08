import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(0);

  const stages = ["🌰", "🌱", "🌿", "🌷", "🌸"];
  const labels = ["Seed", "Sprout", "Leafy", "Bud", "Bloom"];

  const plantSeed = () => {
    if (step < 5) setStep(step + 1);
  };

  return (
    <div className="app">
      <div className="sun">☀️</div>
      <div className="cloud cloud-one">☁️</div>
      <div className="cloud cloud-two">☁️</div>
      <div className="rainbow">🌈</div>
      <div className="butterfly">🦋</div>

      <main className="game-card">
        <h1>
          Magic Star <span>Garden</span>
        </h1>

        <p className="subtitle">Tap the seeds and grow your garden!</p>

        <div className="stars">⭐ Stars: {step}</div>

        <div className="garden-row">
          {stages.map((stage, index) => (
            <div
              key={index}
              className={`plant-box ${index < step ? "active" : ""}`}
            >
              <div className="plant">{index < step ? stage : "🪴"}</div>
              <div className="plant-label">{labels[index]}</div>
            </div>
          ))}
        </div>

        {step === 5 ? (
          <div className="celebration-card">
            <h2>🎉 Amazing Job!</h2>
            <div className="flower-line">🌷 🌷 🌷 🌷 🌷</div>
            <p>You grew a beautiful garden!</p>
            <h3>⭐ Badge Unlocked:</h3>
            <div className="badge">Star Gardener</div>
          </div>
        ) : (
          <button className="plant-btn" onClick={plantSeed}>
            🌱 Tap to Plant
          </button>
        )}
      </main>
    </div>
  );
}

export default App;