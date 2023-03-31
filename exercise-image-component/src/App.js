// arquivo scr/App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const users = [
      {
      id: 102,
      name: 'João',
      email: 'joao@gmail.com',
      avatar: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png'
    },
    {
      id: 77,
      name: 'Amélia',
      email: 'amelia@gmail.com',
      avatar: 'https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png'
    },
    {
      id: 79,
      name: 'Antonio',
      email: 'antonio@gmail.com',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQEjjpA5WeGyfdJQZgo2yN8Qp8-3IZUh90g&usqp=CAU'
    },
    {
      id: 1,
      name: 'Maria',
      email: 'Maria@gmail.com',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQEjjpA5WeGyfdJQZgo2yN8Qp8-3IZUh90g&usqp=CAU'
    }
  ];

    return (
      users.map(user => <UserProfile user={user} /> 
    ));
  }
}

export default App;