import React from 'react';
import staringCat from './staringCat.jpg';
import Image from './Image';
import Title from './Title';
import fran from './fran.png';

class App extends React.Component {
  render() {
    return (
      <main>
        <Title textTitle='Gatinho bunitin bigodudo'/> 
        <Image source={ staringCat } alternativeText="Cute cat staring" />
        <Title textTitle='Oto gatu'/>
        <Image source={ fran }/>
      </main>
    );
  }
}

export default App;