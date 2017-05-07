import React, { Component } from 'react';
import './App.css';
import { SimpleHeader } from './Header.js';

import instagramImg from './img/instagram.png';

import gramImg1 from './img/gram-guitar.jpg';
import gramImg2 from './img/gram-sketch.jpg';
import gramImg3 from './img/gram-garden.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleHeader />
        <div>
          <div className="Home-row">
            <a href="./games">
              <span className="Home-entry Home-entry-main Home-entry-big">
                Games
              </span>
            </a>
            <span style={{display: 'inline-block'}}>
              <a href="./games">
                <span className="Home-entry Home-game Home-entry-big">
                  OK K.O.: Dynamite's<br /> Action News
                </span>
              </a>
              <a href="./games">
                <span className="Home-entry Home-game Home-entry-big">
                  Canvasser
                </span>
              </a>
            </span>
          </div>

          <div className="Home-row">
            <a href="./programming">
              <span className="Home-entry Home-entry-main">
                Programming Resume
              </span>
            </a>
            <span style={{display: 'inline-block'}}>
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
            </span>
          </div>
          <div className="Home-row">
            <a href="https://www.instagram.com/moon_dude/">
              <span className="Home-entry Home-entry-main">
                Fine Art <img style={{width: '50px'}} src={instagramImg} />
              </span>
            </a>
            <span style={{display: 'inline-block'}}>
              <GramImage img={gramImg1} link='BTPZLIyhK9h' />
              <GramImage img={gramImg2} link='BTiLjMSBwvU' />
              <GramImage img={gramImg3} link='BD_-PWKot1S' />
            </span>
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
        style={{backgroundImage: 'url(' + props.img + ')'}}
      ></span>
    </a>
  )
}

export default App;
