import React from "react";

export default function ForecastTemp(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}º`;
  }

  return (
    <span className="forecast">
      {minTemp()} - {maxTemp()}
    </span>
  );
}
