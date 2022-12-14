import React, {useState} from 'react';



function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  }
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  }
  return (
    <main className='main'>
      <div className="app">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </main>
  );
}

export default App;
