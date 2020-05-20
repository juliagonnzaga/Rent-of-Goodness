import React, {useState} from 'react';
import Header from './Header';
import logo from './logo.svg';
import './App.css';

function App() {
  let counter = useState(0);

function Increment(){
  counter++;
}

  return (
    <div>
      <header>Contador: {counter}</header>
      <button onClick={Increment}>Incrementar</button>
  </div>
    
    
  );
}

export default App;
