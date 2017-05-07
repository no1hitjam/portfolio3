import React, { Component } from 'react';

import './Games.css';

export class Games extends Component {
  render() {
    return (
      <div className="Games">
        <div className="Game-entry">
          <h3>OK K.O.! Dynamite's Action News</h3>
          <div>Download for <a href="#">Android</a>, <a href="#">iOS</a>, or <a href="#">Amazon</a> devices</div>
          <div>Release: 2017</div>
          <div>Tags: Mobile, Casual, Kids, Narrative</div>
          <div>Made with: Unity, C#</div>
          <div>My Roles: Programmer, Writer, Designer, UI Designer</div>
          <div>
            Description: This is a fast-paced casual game where you play as 
            Dynamite Watkins in the universe of Cartoon Network's OK K.O. 
            Let's Be Heroes! I made this with Wake Robin Games and got the 
            contract as a result of winning the Portland Cartoon Network 
            game jam competition in 2016.
          </div>
        </div>
      </div>
    )
  }
}