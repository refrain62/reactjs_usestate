import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // 0で初期化してsteteを定義
  const [ count, setCount ] = useState( 0 );

  const increment = () => {
    setCount( count + 1 );

    // ログに出力しても即座には影響されていない
    console.log( count );
  }; 

  const decrement = () => setCount( count - 1 );

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Counter</h1>
          <h2>カウント：{ count }</h2>
          <button onClick={ increment }>＋</button>
          <button onClick={ decrement }>－</button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
