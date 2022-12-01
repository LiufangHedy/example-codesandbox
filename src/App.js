import { useState } from "react";
import "./styles.css";

export default function App() {
  let [msg, setMsg] = useState("");
  function clickHandler() {
    if (!msg) {
      setMsg("click");
    } else {
      setMsg(msg + "  click");
    }
  }
  return (
    <div className="App">
      <h1>Hello there</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={clickHandler}> Click Me </button>
      <p> {msg} hi </p>
    </div>
  );
}
