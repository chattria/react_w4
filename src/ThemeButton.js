import React from "react";
import "./ThemeButton.css";

export default function ThemeButton() {
  const blueBtn = document.querySelector("#blue-screen");
  const whiteBtn = document.querySelector("#console");

  blueBtn.addEventListener("click", () => {
    document.documentElement.style.setProperty(
      "--first-background-color",
      "#0007C9"
    );
    document.documentElement.style.setProperty("--first-text-color", "#fff");
    document.documentElement.style.setProperty(
      "--first-shadow",
      "1px 1px 2px #fff",
      "0 0 0.1rem #fff",
      "0 0 0.1rem #fff"
    );
    document.documentElement.style.setProperty(
      "--border-btn",
      "1px solid #fff"
    );
    document.documentElement.style.setProperty("--border", "2px solid #fff");
    document.documentElement.style.setProperty(
      "--second-background-color",
      "#fff"
    );
    document.documentElement.style.setProperty(
      "--second-text-color",
      "#0007C9"
    );
    document.documentElement.style.setProperty(
      "--second-shadow",
      "1px 1px 2px  #0007C9",
      "0 0 0.1rem  #0007C9",
      "0 0 0.1rem  #0007C9"
    );
  });

  whiteBtn.addEventListener("click", () => {
    document.documentElement.style.setProperty(
      "--first-background-color",
      "#000000"
    );
    document.documentElement.style.setProperty("--first-text-color", "#fff");
    document.documentElement.style.setProperty(
      "--first-shadow",
      "1px 1px 2px #fff",
      "0 0 0.1rem #fff",
      "0 0 0.1rem #fff"
    );
    document.documentElement.style.setProperty(
      "--border-btn",
      "1px solid #fff"
    );
    document.documentElement.style.setProperty("--border", "2px solid #fff");
    document.documentElement.style.setProperty(
      "--second-background-color",
      "#fff"
    );
    document.documentElement.style.setProperty(
      "--second-text-color",
      "#000000"
    );
    document.documentElement.style.setProperty(
      "--second-shadow",
      "1px 1px 2px  #000000",
      "0 0 0.1rem  #000000",
      "0 0 0.1rem  #000000"
    );
  });

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
