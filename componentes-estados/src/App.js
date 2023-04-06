import React from 'react';
import './App.css';

function handleClick01() {
  console.log('Clicou no botão 01!')
}

function handleClick02() {
  console.log('Clicou no botão 02!')
}

function handleClick03() {
  console.log('Clicou no botão 03!')
}

class App extends React.Component {
  render() {
    return (
    <div>
    <button onClick={handleClick01}>Botão 01</button>
    <button onClick={handleClick02}>Botão 02</button>
    <button onClick={handleClick03}>Botão 03</button>
    </div>
    )
  }
}

export default App;