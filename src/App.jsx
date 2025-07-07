import { useState } from "react";
import "./App.css";
import ClassComponent from "./ClassComponent";
import MyComponent from "./MyComponent";
import Counter from "./components/Counter/Counter";
import Alert from "./components/Alerts/Alert";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Alert />
    </>
  );
}

export default App;
