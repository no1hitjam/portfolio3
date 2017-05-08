import React from 'react';
import {Link} from 'react-router-dom';

import './App.css';

import instagramImg from './img/instagram.png';
import twitterImg from './img/twitter.png';
import githubImg from './img/github.png';

export function Header(props) {
  return (
    <div className="App-header">
      <Link to="/"><h2>Jackson Lango</h2></Link>
      <div>
      <Link to="/games">Games</Link> 
      <Link to="./programming">Programming</Link>
      <a href="https://www.instagram.com/moon_dude/"><img src={instagramImg} /></a>
      <a href="https://twitter.com/no1hitjam"><img src={twitterImg} /></a>
      <a href="https://github.com/no1hitjam"><img src={githubImg} /></a>
      </div>
    </div>
  )
}