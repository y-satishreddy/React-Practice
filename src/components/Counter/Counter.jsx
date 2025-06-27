import { useEffect, useState } from "react";
import "./counter.css";
const Counter = () => {
  let [count, setCount] = useState(10);
  useEffect(() => {
    if (count === 0) return;
    const timer = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);
  const interval = setInterval(() => {
    console.log();
  });
  return (
    <div className="counter">
      {count ? (
        <span className="text-2xl text-9xl">{count}</span>
      ) : (
        <h1 className="text-2xl text-9xl ">time's up!</h1>
      )}
    </div>
  );
};
export default Counter;
