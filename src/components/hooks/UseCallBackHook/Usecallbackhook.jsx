import { useCallback, useState } from "react";

const Button = ({ onClick, children }) => {
  console.log(`Rednering button:  ${children}`);
  return <button onClick={onClick}>{children}</button>;
};
export function UseCallBackHook() {
  const [count, setCount] = useState(0);

  //   const increment = () => {
  //     console.log("increment inside");
  //     setCount((prevCount) => prevCount + 1);
  //   };
  //   const decrement = () => setCount((prevCount) => prevCount - 1);

  const increment = useCallback(() => {
    console.log("increment inside");
    setCount((prevCount) => prevCount + 1);
  }, []);
  const decrement = useCallback(() => {
    console.log("decrement inside");
    setCount((prevCount) => prevCount - 1);
  }, []);
  return (
    <div className="container">
      <h1>Count: {count}</h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
}
