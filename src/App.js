// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Even from './components/Even';
import Odd from './components/Odd';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0)
  const countStyle = {
    backgroundColor: count===0 ? 'black' : (count > 0 ? 'green' : 'red'),
    color: 'white',
    display: 'inline-block'
  };
  return (
    <div className="App">
      
      
      <h2 style={countStyle}>{count}</h2>

      {count%2 === 0 ? <Even /> : <Odd />}

      <Button count = {count} increment = {() => setCount(count+1)} reset = {() => setCount(0)} decrement = {() => setCount(count-1)} />

    </div>
  );
}

export default App;
