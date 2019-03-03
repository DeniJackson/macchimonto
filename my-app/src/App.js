import React, { Component } from 'react';
import logo from './logo.svg';
import Slider from './slider'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>Macchimonto</h1>
        </header>
        <div id="main">
          <Slider className='panel'/>
        </div>
      </div>
    );
  }
}

export default App;
