import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function CurrentTemp({ icon, description, temperature }) {
  const [unit, setUnit] = useState("celcius");

  function showFah(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCel(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  return (
    <div>
      <div className="unit-button">
        <Button className="change-button" onClick={showCel}>
          ºC
        </Button>
        <Button className="change-button" onClick={showFah}>
          ºF
        </Button>
      </div>
      <Card className="temp-card">
        <img src={icon} alt={description} />
        <p className="description">{description}</p>
        <p id="temp-num">
          {unit === "celcius" ? (
            <span id="temp">{Math.round(temperature)} ºC</span>
          ) : (
            <span id="temp">{Math.round((temperature * 9) / 5 + 32)} ºF</span>
          )}
        </p>
      </Card>
    </div>
  );
}
