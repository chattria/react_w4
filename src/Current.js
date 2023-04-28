import React from "react";

export default function Current(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuseday",
    "Wednesday",
    "Thurseday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = new Date().getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = new Date().getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      <p>{day}</p>
      <p>
        {hours}:{minutes}
      </p>
    </div>
  );
}
