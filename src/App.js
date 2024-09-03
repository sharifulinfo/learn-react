import { useState } from 'react';
import './App.css';

function App() {
  const [counter , setCounter] = useState(20);
  const increassCounter = () => {
    setCounter(counter + 1);
  }
  const decressCounter = () => {
    setCounter(counter - 1);
  }

  return (
    <div className="App">
     <h2>Counter : {counter}</h2>
     <button onClick={increassCounter}>Incress</button>
     <button onClick={decressCounter}>Decress</button>
      
    </div>
  );
}

export default App;
