import React, { useState } from "react";
import Button from "react-bootstrap/Button";

export default function TempUnit(props) {
  const [unit, setUnit] = useState("celsius");

  function showFah(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCel(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  /*function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }*/

  if (unit === "celsius") {
    return (
      <div className="unit-button">
        <Button className="change-button" type="button">
          ºC
        </Button>
        <Button className="change-button" type="button" onClick={showFah}>
          ºF
        </Button>
      </div>
    );
  } else {
    return (
      <div className="unit-button">
        <Button className="change-button" type="button" onClick={showCel}>
          ºC
        </Button>
        <Button className="change-button" type="button">
          ºF
        </Button>
      </div>
    );
  }
}
