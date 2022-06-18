import React, { Component } from 'react';
<<<<<<< Updated upstream
import './App.css';
import './components/styles/responsive.css';
=======
import './components/styles/responsive.scss';
>>>>>>> Stashed changes
// import ToDo from './components/TodosUsingClasses/ToDo';
import ToDo from './components/TodosUsingHooks/ToDo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{ textAlign: "center", margin: "50px 0px 0px 0px" }}>ToDo List</h1>
        <ToDo />
      </div>

    );
  }
}

export default App;
