import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1 style={{textAlign:"center",margin:"50px 0px 0px 0px"}}>ToDo List</h1>
        <ToDo />
      </div>

    );
  }
}

export default App;
