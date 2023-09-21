import React from 'react';
import logo from './clapperboard.jpg';
import './App.css';
import ShowDatabase from './ShowDatabase';
import AddDatabase from './AddDatabase';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Adam and Kia Movie Review</h1>
      </header>
      <ShowDatabase />
      <AddDatabase />
    </div>
  );
}

export default App;
