import React from "react";
import Card from "react-bootstrap/Card";

export default function CurrentTemp({ icon, description, temperature }) {
  return (
    <Card className="temp-card">
      <img src={icon} alt={description} />
      <p className="description">{description}</p>
      <p id="temp-num">
        <span id="temp">{temperature}</span>
        <span id="temp-unit" className="unit">
          {" "}
          ºc
        </span>
      </p>
    </Card>
  );
}
