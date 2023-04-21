import "./themeBtn.css";

export default function themeBtn() {
  return (
    <div className="themeBtn">
      <button className="theme-button" id="blue-screen">
        Blue screen
      </button>
      <button className="theme-button" id="console">
        Console
      </button>
    </div>
  );
}
