import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React on Docker!</h2>
        </div>
        <p className="App-intro">
          <RaisedButton label="New" />
        </p>
      </div>
    );
  }
}

export default App;
