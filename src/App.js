import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // 0で初期化してsteteを定義
  const [ count, setCount ] = useState( 0 );

  // boolean の変数定義
  const [ power, setPower ] = useState( false );

  console.log( '再描写' );
  console.log( count ); 

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

        <div>
          <h1>電源 { power ? 'ON' : 'OFF' }</h1>
          <button onClick={ () => setPower( true ) }>ON</button>
          <button onClick={ () => setPower( false ) }>OFF</button>
          <button onClick={ () => setPower( prevState => !prevState ) }>ON / OFF</button>
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
