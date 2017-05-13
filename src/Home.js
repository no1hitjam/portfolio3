import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

import instagramImg from './img/instagram.png';

import gramImg1 from './img/gram-guitar.jpg';
import gramImg2 from './img/gram-sketch.jpg';
import gramImg3 from './img/gram-garden.jpg';

import canvasserImg from './img/home-canvasser.jpg';
import actionNewsImg from './img/home-actionnews.jpg';
import jacksonImg from './img/jackson.jpg';

export class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-row">
          <div>
            <Link className="Home-entry-main-link" to="/games">
              <span className="Home-entry Home-game Home-entry-main">
                Games <span className="Home-info">(you can play!)</span>
              </span>
            </Link>
            <span style={{display: 'inline-block'}}>
              <Link to="/games">
                <span
                className="Home-entry Home-game Home-entry-item l2"
                style={{backgroundImage: 'url(' + actionNewsImg + ')'}}>
                  OK K.O.! Dynamite's<br /> Action News
                </span>
              </Link>
              <Link to="/games">
                <span 
                className="Home-entry Home-game Home-entry-item l3"
                style={{backgroundImage: 'url(' + canvasserImg + ')'}}>
                  Canvasser
                </span>
              </Link>
            </span>
          </div>
          <div>
            <table><tbody><tr><td backgroundImage="./img/dropShadowCenter.png"></td></tr></tbody></table>
          </div>
        </div>

        <div className="Home-row">
          <a className="Home-entry-main-link" href="https://www.instagram.com/moon_dude/">
            <span className="Home-entry Home-gram Home-entry-main">
              Fine Art <span className="Home-info">(on Instagram)</span>
            </span>
          </a>
          <span style={{display: 'inline-block'}}>
            <GramImage img={gramImg1} link='BTPZLIyhK9h' />
            <GramImage img={gramImg2} link='BTiLjMSBwvU' />
            <GramImage img={gramImg3} link='BD_-PWKot1S' />
          </span>
        </div>

        <div className="Home-row">
          <Link className="Home-entry-main-link" to="/programming">
            <span className="Home-entry Home-program Home-entry-main">
              Programming <span className="Home-info">(resume)</span>
            </span>
          </Link>
          <span>
            <span className="Home-entry Home-program Home-entry-item about-me">
              "Hello, this is my porfolio site, <a>contact me here</a> if you have any questions!" 
            </span>
            <span className="Home-entry Home-program Home-entry-item jackson"></span>
          </span>
        </div>
      </div>
    )
  }
}

function GramImage(props) {
  return (
    <a href={'https://www.instagram.com/p/' + props.link + '/?taken-by=moon_dude'}>
      <span 
        className="Home-entry Home-gram Home-entry-item" 
        style={{backgroundImage: 'url(' + props.img + ')'}}
      ></span>
    </a>
  )
}