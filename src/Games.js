import React, { Component } from 'react';

import './Games.css';
import canvasserImg from './img/game-canvasser.jpg';

export class Games extends Component {
  render() {
    return (
      <div className="Games">
        
        <div 
        className="Game-img-container"
        style={{backgroundImage: 'url(' + canvasserImg + ')'}}>
          <div className="Game-header">
            <h3>OK K.O.! Dynamite's Action News</h3>
            <span className="date">(2017)</span>
            <span className="tag">Unity</span>
            <span className="tag">C#</span>
            <span className="tag">Mobile</span>
            <span className="tag">Casual</span>
            <span className="tag">Kids</span> 
            <span className="tag">Story</span> 
          </div>
        </div>
        <div className="Game-entry">
          <table><tbody>
            <tr>
              <td><a href="#">
                <span className="Game-link">Android Download</span>
              </a></td>
              <td><a href="#">
                <span className="Game-link l2">iOS Download</span>
              </a></td>
              <td><a href="#">
                <span className="Game-link l3">Amazon Download</span>
              </a></td>
            </tr>
          </tbody></table>

          <div className="Game-info desc">
            This is a fast-paced casual game where you play as star 
            reporter Dynamite Watkins in the universe of Cartoon 
            Network's <a href="#">OK K.O.! Let's Be Heroes</a>! Uncover the secrets 
            of the evil fog by getting big question combos and don't let the 
            bad guys get away with it!
          </div>
          <div className="Game-info roles">
            <span>My Roles:</span> 
            <span>Programmer,</span>
            <span>Writer,</span>
            <span>Game Design,</span>
            <span>UI Design</span>
          </div>
          <div className="Game-info personal">
            I made this with <a href="#">Conley Smith</a> and <a href="#">Nathan Franks</a> and 
            got the contract as a result of winning the 2016 Portland Cartoon Network 
            game jam competition with them. We formed <a href="#">Wake Robin Games</a> to 
            make a game we hoped would inspire kids to act justly and ask questions for 
            themselves!
          </div>
        </div>
      </div>
    )
  }
}