import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Programming.css';

export class Programming extends Component {
  render() {
    return (
      <div className="Programming">
        <div className="Project">
          <h3>OK K.O. Dynamite's Action News</h3>
          <table><tbody><tr>
            <a href="#"><td className="Project-item">Wake Robin Games</td></a>
            <td className="Project-item">Lead Programmer</td>
            <td className="Project-item Project-year">2017</td>
          </tr></tbody></table>
          <div className="Project-tags">
            <a href="#"><span className="Project-tag">Game</span></a>
            <a href="#"><span className="Project-tag">C#</span></a>
            <a href="#"><span className="Project-tag">Unity3D</span></a>
            <a href="#"><span className="Project-tag">Mobile</span></a>
          </div>
          <div className="Project-item">
            Long description of this project
          </div>
          <div className="Project-links" />
        </div>
      </div>
    )
  }
}