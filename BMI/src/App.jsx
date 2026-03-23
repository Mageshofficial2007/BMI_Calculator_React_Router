import React, { useState } from "react";
import "./App.css";

function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
    }
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <div className="input-group">
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI}>Calculate</button>
      {bmi && <h2>Your BMI: {bmi}</h2>}

      {/* Footer */}
      <footer className="footer">
        <p>Developed by: <strong>MAGESH BOOPATHI M</strong></p>
        <p>Register Number: <strong>212224230145</strong></p>
      </footer>
    </div>
  );
}

export default BMICalculator;