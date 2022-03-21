import React from "react";
import useToggle from "./useToggle";
// import useEscape from "./useEscape";
import "./styles.css";

export default function App() {
  const focusRef = React.useRef(null);
  // const [escape, closeToggle] = useEscape();
  const [toggle, switchToggle] = useToggle();

  const handleEscape = (e) => {
    if (toggle && e.code === "Escape") {
      switchToggle(false);
    }
  };

  const handleclick = (e) => {
    switchToggle();
  };

  return (
    <div className="App">
      <div
        ref={focusRef}
        tabIndex={"-1"}
        onKeyDown={handleEscape}
        className={toggle ? "show" : "hide"}
      >
        Hi
      </div>
      <button onClick={handleclick} className="button">
        {toggle ? "ON" : "OFF"}
      </button>
    </div>
  );
}
