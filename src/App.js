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

  // 入力フォーム用
  const [ email, setEmail ] = useState( '' );
  const [ password, setPassword ] = useState( '' );
  const hadnleSend = ( e ) => {
    // 既定の処理をキャンセル（ここではSubmit処理）
    e.preventDefault();

    // ログに出力
    console.log( email, password );
  };

  //　入力フォームをまとめる方法
  const [ form, setForm ] = useState( { email2: '', password2: '' } );
  const handleChange = ( e ) => {
    setForm( (prevState) => {
      return {
        ...prevState,
        [ e.target.name ]: e.target.value
      };
    });
  };
  const hadnleSend2 = ( e ) => {
    // 既定の処理をキャンセル（ここではSubmit処理）
    e.preventDefault();

    // ログに出力
    console.log( form );
  };

  return (
    <div className="App">
      <header className="App-header">
        
        <div style={{ textAlign: 'center', marginTop: '2em' }}>
          <h1>useStateでフォーム</h1>
          <form onSubmit={ hadnleSend }>
            <div>
              <label>メールアドレス：</label>
              <input
                name="email"
                type="email"
                onChange={ ( e ) => setEmail( e.target.value )}
                />
            </div>
            <div>
              <label>パスワード：</label>
              <input
                name="password"
                type="password"
                onChange={ ( e ) => setPassword( e.target.value )}
                />
            </div>
            <button type="submit">フォームデータ送信</button>
          </form>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2em' }}>
          <h1>useStateでフォーム2</h1>
          <form onSubmit={ hadnleSend2 }>
            <div>
              <label>メールアドレス2：</label>
              <input
                name="email2"
                type="email"
                onChange={ handleChange }
                />
            </div>
            <div>
              <label>パスワード：</label>
              <input
                name="password2"
                type="password"
                onChange={ handleChange }
                />
            </div>
            <button type="submit">フォームデータ送信2</button>
          </form>
        </div>

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
