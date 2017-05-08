import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Programming.css';

class Project extends Component {
  render() {
    const tags = this.props.tags.map((val, idx) => {
      return (
        <a href="#"><span className="Project-tag">{val}</span></a>
      )
    });

    const links = this.props.links.map((val, idx) => {
      const ltext = idx > 0 ? ' l' + (idx + 1) : '';
      return (
        <td><a href="#">
          <span className={"Game-link" + ltext}>{val}</span>
        </a></td>
      )
    });

    return(
      <div className="Project">
        <h4>{this.props.name}</h4>
        <table><tbody><tr>
          <a href="#"><td className="Project-item">{this.props.company}</td></a>
          <td className="Project-item">{this.props.role}</td>
          <td className="Project-item Project-date">{"(" + this.props.date + ")"}</td>
        </tr></tbody></table>
        <div className="Project-tags">{tags}</div>
        <div className="Project-item">{this.props.desc}</div>
        <div className="Project-links" />
      </div>
    )
  }
}

export class Programming extends Component {
  render() {
    return (
      <div className="Programming">
        <h3>Programming Resume</h3>
        <Project
          name="OK K.O.! Dynamite's Action News"
          company="Wake Robin Games"
          role="Lead Programmer"
          date="June 2016 - May 2017"
          tags={['Game', 'C#', 'Unity3d', 'Mobile']}
          links={[]}
          desc="Long description of this project"
        />

        <Project
          name="TOCS Archive"
          company="CASS"
          role="Developer"
          date="April 2015 - June 2016"
          tags={['SQL Server', 'SSIS', 'Python', 'SSMS']}
          links={[]}
          desc="Long description of this project"
        />

        
      </div>
    )
  }
}