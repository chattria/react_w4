import "./App.css";
import React from "react";
import WeatherApp from "./WeatherApp";
import ThemeButton from "./ThemeButton";

function App() {
  return (
    <div className="App">
      <ThemeButton />
      <WeatherApp />
    </div>
  );
}

export default App;
