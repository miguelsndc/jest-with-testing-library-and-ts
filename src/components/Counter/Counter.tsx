import { useState, ChangeEvent } from "react";

type CounterProps = {
  description: string;
  defaultCounter: number;
};

const Counter = ({ defaultCounter, description }: CounterProps) => {
  const [count, setCount] = useState(defaultCounter);
  const [incrementor, setIncrementor] = useState(1);

  function handleCountDecrease() {
    setCount((prevCount) => prevCount - incrementor);
  }

  function handleCountIncrease() {
    setCount((prevCount) => prevCount + incrementor);
  }

  function handleIncrementorChange(event: ChangeEvent<HTMLInputElement>) {
    setIncrementor(Number(event.target.value) || 0);
  }

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
