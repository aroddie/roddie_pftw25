import { useState } from "react";
import Camelid from "./Camelid";
import llama from "./assets/llama.jpg";
import alpaca from "./assets/alpaca.jpg";

function App() {
  const [camelid, setCamelid] = useState(llama);
  function handleClick(evt) {
    const target = evt.target.id;
    if (target === "llamaBtn") {
      setCamelid(llama)
    }
    if (target === "alpacaBtn") {
      setCamelid(alpaca)
    }
  }

  return (
    <>
      <h1>Llama vs Alpaca</h1>

      <Camelid url={camelid} />
      <div>
      <button onClick={handleClick} id="llamaBtn">
        Llama
      </button >
      <button onClick={handleClick} id="alpacaBtn">
        Alpaca
      </button>
      </div>
    </>
  )
}

export default App
