import './App.css';
import { useState } from 'react';
import React from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count +1);
  }
  return (
    <div>
      <button onClick={handleClick}>Paina</button>
      <div>{count}</div>
    </div>
  );
}

