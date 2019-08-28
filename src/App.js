import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Users from './components/User/Users';

class App extends Component {


  render(){
  
    var  empresa="Empresa"

    return (
      <div className="container">
          <Header corporation={empresa}></Header>
          <Users></Users>
      </div>
    );
    }
  }

export default App;

