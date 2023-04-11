import { useState } from "react";
import "./App.css";
import { Sample1 } from "./Sample1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p>さんぷる</p>
      <Sample1 />
    </div>
  );
}

export default App;
