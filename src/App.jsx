import "./App.css";
import ClassComponent from "./ClassComponent";
import MyComponent from "./MyComponent";
import Counter from "./components/Counter/Counter";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Counter />
    </>
  );
}

export default App;
