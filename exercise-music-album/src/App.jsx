// src/App.js
import React from 'react';
import Album from './Album'

class App extends React.Component {
  render() {
    const album01 = {
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Coldplay_-_Mylo_Xyloto_%28Official_Album_Cover%29.png/220px-Coldplay_-_Mylo_Xyloto_%28Official_Album_Cover%29.png',
      title: 'Mylo Xyloto',
      releaseDate: {
        year: '2011',
        month: '10',
        day: '24',
      },
      others: {
        recordCompany: 'Capitol, Parlophone',
        formats: 'CD, digital'
      }
    };

    const album02 = {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Ghost Stories',
      releaseDate: {
        year: '2014',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Parlophone',
        formats: 'CD, digital'
      }
    };

    const album03 = {
      image: 'https://www.vagalume.com.br/racionais-mcs/discografia/nada-como-um-dia-apos-o-outro-dia.webp',
      title: 'Nada como um dia após o outro dia',
      releaseDate: {
        year: '2002',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Unimar Music',
        formats: 'CD, digital'
      }
    }

    const album04 = {
      image: 'https://www.vagalume.com.br/racionais-mcs/discografia/sobrevivendo-no-inferno.webp',
      title: 'Sobrevivendo no Inferno',
      releaseDate: {
        year: '1997',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Cosa Nostra',
        formats: 'CD, digital'
      }
    }

    return (
      <div>
        <Album album={ album01 } />
        <Album album={ album02 } />
        <Album album={ album03 } />
        <Album album={ album04 } />
      </div>
    );
  }
}

export default App;