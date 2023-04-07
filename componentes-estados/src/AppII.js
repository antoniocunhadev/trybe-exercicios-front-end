// src/App.js
import React from 'react';

class App extends React.Component {
  constructor () {
    super ()
    this.handleButtonOne = this.handleButtonOne.bind(this)
    this.handleButtonTwo = this.handleButtonTwo.bind(this)
    this.handleButtonThree = this.handleButtonThree.bind(this)
    this.state = { 
      numeroDeCliques: 0,
    }
  }
  handleButtonOne() {
    this.setState ((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
    console.log('Clicou no botão 1!', this);
  }

  handleButtonTwo() {
    console.log('Clicou no botão 2!', this);
  }

  handleButtonThree() {
    console.log('Clicou no botão 3!', this);
  }

  render() {
    const { numeroDeCliques } = this.state
    return (
      <div>
        <button type="button" onClick={ this.handleButtonOne }>{ numeroDeCliques }</button>
        <button type="button" onClick={ this.handleButtonTwo }>Botão 2</button>
        <button type="button" onClick={ this.handleButtonThree }>Botão 3</button>
      </div>
    );
  }
}

export default App;