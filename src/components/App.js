import React, { Component } from 'react';
import Header from './Header'
import Main from './Main'
import '../App.css'

class App extends Component {
  render() {
    return(
      <div>
      <div>
        <Header />
      </div>

      <div>
        <Main />
      </div>
    </div>
    );
  }
}

export default App
