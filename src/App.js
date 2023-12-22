import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    setCount((count) => count - 1);
  };

  return (
    <div>
      <div className="container">
        <h1>Counter</h1>
        <p className="count">{count}</p>
        <div className="btns">
          <button className="btn" onClick={decrement}>
            -
          </button>
          <button className="btn" onClick={increment}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
