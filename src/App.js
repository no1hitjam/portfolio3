import React, { Component } from 'react';
import './App.css';
import { Header } from './Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <div className="Home-row">
            <a href="./games">
              <span className="Home-entry">
                Games
              </span>
            </a>
            <a href="./games">
              <span className="Home-entry">
                OK K.O. Dynamite's Action News
              </span>
            </a>
            <a href="./games">
              <span className="Home-entry">
                Canvasser
              </span>
            </a>
          </div>
          <div className="Home-row">
            <a href="./programming">
              <span className="Home-entry">
                Programming Resume
              </span>
            </a>
          </div>
          <div className="Home-row">
            <a href="#">
              <span className="Home-entry">
                Fine Art
              </span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
