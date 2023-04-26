import "./App.css";
import React from "react";
import WeatherApp from "./WeatherApp";
import ThemeButton from "./ThemeButton";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <ThemeButton />
      <WeatherApp defaultCity="Stockholm" />
      <Footer />
    </div>
  );
}

export default App;
