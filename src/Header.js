import React from 'react';
import {Link} from 'react-router-dom';

import './App.css';

import homeImg from './img/home.png';
import home2Img from './img/home2.png';
import instagramImg from './img/instagram.png';
import twitterImg from './img/twitter.png';
import githubImg from './img/github.png';

export function Header(props) {
  return (
    <div id="App-header-container">
      <div id="App-header">
        <Link id="header-home" to="/"><span><img alt="" src={homeImg} /> Jackson Lango <img alt="" src={home2Img} /></span></Link>
        <div>
        <Link to="/games">Games</Link> 
        <Link to="./programming">Programming</Link>
        <span style={{display: 'inline-block'}}>
        <a href="https://www.instagram.com/moon_dude/"><img src={instagramImg} /></a>
        <a href="https://twitter.com/no1hitjam"><img src={twitterImg} /></a>
        <a href="https://github.com/no1hitjam"><img src={githubImg} /></a>
        </span>
        </div>
      </div>
    </div>
  )
}