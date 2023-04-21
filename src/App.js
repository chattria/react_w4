import "./App.css";
import React from "react";
import WeatherApp from "./WeatherApp";
import themeBtn from "./themeBtn";

function App() {
  return (
    <div className="App">
      <themeBtn />
      <WeatherApp />
    </div>
  );
}

export default App;
