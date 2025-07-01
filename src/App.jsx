import { useState } from "react";
import "./App.css";
import ClassComponent from "./ClassComponent";
import MyComponent from "./MyComponent";
import Counter from "./components/Counter/Counter";
import Search from "./components/Search/Search";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Search />
    </>
  );
}

export default App;
