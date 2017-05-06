import React, { Component } from 'react';
import './App.css';
import { SimpleHeader } from './Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleHeader />
        (this site is under construction)
        <div>
          <div className="Home-row">
            <a href="./games">
              <span className="Home-entry Home-entry-main">
                <p id="Home-entry-games">
                  Games
                </p>
              </span>
            </a>
            <a href="./games">
              <span className="Home-entry Home-game">
                OK K.O.: Dynamite's<br /> Action News
              </span>
            </a>
            <a href="./games">
              <span className="Home-entry Home-game">
                Canvasser
              </span>
            </a>
          </div>

          <div className="Home-row">
            <a href="./programming">
              <span className="Home-entry Home-entry-main">
                <p id="Home-entry-resume">
                  Programming Resume
                </p>
              </span>
            </a>
            <a href="./programming">
              <span className="Home-entry Home-language">
                C#
              </span>
            </a>
            <a href="./programming">
              <span className="Home-entry Home-language">
                JavaScript
              </span>
            </a>
            <a href="./programming">
              <span className="Home-entry Home-language">
                SQL
              </span>
            </a>
          </div>
          <div className="Home-row">
            <a href="https://www.instagram.com/moon_dude/">
              <span className="Home-entry Home-entry-main">
                Fine Art
              </span>
            </a>
            <GramImage img='gram-guitar' link='BTPZLIyhK9h' />
            <GramImage img='gram-sketch' link='BTiLjMSBwvU' />
            <GramImage img='gram-garden' link='BD_-PWKot1S' />
          </div>
        </div>
      </div>
    );
  }
}


function GramImage(props) {
  return (
    <a href={'https://www.instagram.com/p/' + props.link + '/?taken-by=moon_dude'}>
      <span 
        className="Home-entry Home-gram"
        style={{backgroundImage: 'url(img/' + props.img + '.JPG)'}}
      ></span>
    </a>
  )
}

export default App;
