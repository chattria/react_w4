import React from "react";
import "./ThemeButton.css";

export default function ThemeButton() {
  return (
    <div className="Themebutton">
      <button className="theme-button" id="blue-screen">
        Blue screen
      </button>
      <button className="theme-button" id="console">
        Console
      </button>
    </div>
  );
}
