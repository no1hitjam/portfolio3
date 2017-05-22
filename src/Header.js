import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './App.css';

import homeSrc from './img/home1.png';
import instagramImg from './img/instagram.png';
import twitterImg from './img/twitter.png';
import githubImg from './img/github.png';
import linkedInImg from './img/linkedIn.png';

export class Header extends Component {
  homeImg = <HomeImg src={homeSrc}/>

  firstRender = true

  lastIdx = 1

  setHomeImg() {
    let idx = Math.floor(Math.random() * 6 + 1);
    if (idx === this.lastIdx) {
      idx++;
    }
    if (this.firstRender) {
      idx = 1;
      this.firstRender = false;
    }
    this.lastIdx = idx;
    this.homeImg = <HomeImg src={require("./img/home" + idx + ".png")} />;
  }

  render() {
    this.setHomeImg();
    return (
      <div id="App-header-container">
        <div id="App-header">
          <Link id="header-home" to="/">
            <span style={{display: 'inline-block'}}>
              <span id="header-home-inner">
                {this.homeImg} Jackson Lango
              </span>
            </span>
          </Link>
          <span style={{display: 'inline-block'}}>
            <Link to="/games">Games</Link> 
            <Link to="./programming">Programming</Link>
            <span style={{display: 'inline-block'}}>
              <a href="https://www.instagram.com/moon_dude/"><img alt="Instagram logo" src={instagramImg} /></a>
              <a href="https://twitter.com/no1hitjam"><img alt="Twitter logo" src={twitterImg} /></a>
              <a href="https://github.com/no1hitjam"><img alt="Github logo" src={githubImg} /></a>
              <a href="https://www.linkedin.com/in/jackson-lango-3a610952/"><img alt="LinkedIn logo" src={linkedInImg} /></a>
            </span>
          </span>
          <span style={{display: 'inline-block', fontSize: 'x-small'}}>This site is under development</span>
        </div>
      </div>
    )
  }
}

class HomeImg extends Component {
  render() {
    return (
      <img alt="" src={this.props.src} />
    )
  }
}