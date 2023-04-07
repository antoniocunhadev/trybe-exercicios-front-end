// src/App.js
import React from 'react';

class App extends React.Component {
  constructor () {
    super ()
    this.handleButtonOne = this.handleButtonOne.bind(this)
    this.handleButtonTwo = this.handleButtonTwo.bind(this)
    this.handleButtonThree = this.handleButtonThree.bind(this)
    this.state = { 
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    } 
  }

  handleButtonOne() {
    this.setState ((estadoAnterior) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1
    }))
    console.log('Clicou no botão 1!', this)
  }

  handleButtonTwo() {
    this.setState ((estadoAnterior) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
    }))
    console.log('Clicou no botão 2!', this);
  }

  handleButtonThree() {
    this.setState ((estadoAnterior) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1
    }))
    console.log('Clicou no botão 3!', this);
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'yellow';
  }

  render() {
    const { numeroDeCliques1 } = this.state
    const { numeroDeCliques2 } = this.state
    const { numeroDeCliques3 } = this.state
    return (
      <div>
        <button type="button" onClick={ this.handleButtonOne } 
        style={ { backgroundColor: this.getButtonColor(numeroDeCliques1) } }
        >
        {`Cliques botão 1:  ${numeroDeCliques1} `}</button>
        
        <button type="button" onClick={ this.handleButtonTwo } 
        style={ { backgroundColor: this.getButtonColor(numeroDeCliques2) } }
        >{`Cliques botão 2: ${numeroDeCliques2}` }</button>
        
        <button type="button" onClick={ this.handleButtonThree } style={ { backgroundColor: this.getButtonColor(numeroDeCliques3) } }
        >{`Cliques botão 3: ${numeroDeCliques3}` }</button>
      </div>
    );
  }
}

export default App;