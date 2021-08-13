import { useState, ChangeEvent, useEffect, useRef } from "react";

type CounterProps = {
  description: string;
  defaultCounter: number;
};

const Counter = ({ defaultCounter, description }: CounterProps) => {
  const [count, setCount] = useState(defaultCounter);
  const [incrementor, setIncrementor] = useState(1);

  const active = useRef(true);

  function handleCountDecrease() {
    setCount((prevCount) => prevCount - incrementor);
  }

  function handleCountIncrease() {
    setTimeout(
      () => active.current && setCount((prevCount) => prevCount + incrementor),
      200
    );
  }

  function handleIncrementorChange(event: ChangeEvent<HTMLInputElement>) {
    setIncrementor(Number(event.target.value) || 0);
  }

  useEffect(() => {
    return () => {
      active.current = false;
    };
  }, []);

  return (
    <div>
      <h2>DESC: {description} </h2>
      <label>
        Incrementor:
        <input
          type="number"
          value={incrementor}
          onChange={handleIncrementorChange}
        />
      </label>
      <button aria-label="decrement" onClick={handleCountDecrease}>
        -
      </button>
      Current Count: {count}
      <button aria-label="increment" onClick={handleCountIncrease}>
        +
      </button>
    </div>
  );
};

export default Counter;
