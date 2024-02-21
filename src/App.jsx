import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);

  return (
    <div className="App">
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button
        onClick={() => setItems([...items, "Item " + (items.length + 1)])}
      >
        Add item
      </button>
      <button onClick={() => setItems(items.slice(0, -1))}>
        Delete last Item
      </button>
    </div>
  );
}

export default App;
