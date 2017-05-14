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
          <td className="Project-item">{'Role: ' + this.props.role}</td>
          <a href="#"><td className="Project-item">{this.props.company}</td></a>
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
          role="Project Lead, Lead Programmer"
          company="Wake Robin Games"
          date="June 2016 - May 2017"
          tags={['Game', 'C#', 'Unity3d', 'Mobile']}
          links={[]}
          desc={["I led our team of three (musician, artist, programmer) in making this mobile game with our publisher, Cartoon Network. I programmed it in C# with the Unity3D engine. Many of the design and programming challenges came from our desire to have an exciting narrative action in the style of a real cartoon."]}
        />

        <Project
          name="Web Games"
          role="Lead Programmer"
          company="Wake Robin Games"
          date="March - May 2017"
          tags={['Game', 'JavaScript', 'HTML5', 'Web', 'Mobile']}
          links={[]}
          desc="I worked on a series of JavaScript web games using the HTML5 canvas that are currently pending release. They were optimized to run smoothly on mobile devices and across browsers."
        />

        <Project
          name="TOCS Archive"
          role="Project Lead, Developer"
          company="CASS"
          date="April 2015 - June 2016"
          tags={['SQL Server', 'SSIS', 'Python', 'SSMS']}
          links={[]}
          desc="I led our team of student developers in creating an archive process for four 1,000,000+ row tables in a MSSQL Server database using SQL and SSIS that is currently in production at ODOT. Lead a team of four with mentorship responsibilities through the next phase in a scrum-like environment to extend the process to more than 200 tables. Drafted requirements with clients and helped draft budget."
        />

        <Project
          name={["Personal Website ", <i>(You're on it right now!)</i>]}
          role="Developer"
          company=""
          date="Continuous"
          tags={['HTML', 'CSS', 'JavaScript', 'ReactJS']}
          links={[]}
          desc={["I've rebuilt this site many times over the years as a way to apply the lessons I've learned with UX, design, and web technologies. This latest incarnation was created with ReactJS. (TODO: Why ReactJS) This 'Programming Resume' page is the most fun one since it includes the smart tagging feature.", <br />,"The hard part of this website is that is has to fit two different audiences: Those who might want to hire me as a professional programmer, and those who want to play my games. To satisfy each audience, I've tried my best to find a balance between fun and professional. Among other design decisions, you'll notice less exclamation marks on this page than on the games page!", <span style={{color: '#777', fontSize: '.7em', fontStyle: 'italic'}}> &nbsp; ← &nbsp;That one slipped in</span>]}
        />

        <Project
          name="Other Game Development"
          role="Programmer, Designer, Art Roles"
          company=""
          date="2006 - Present"
          tags={['Game', 'C#', 'Unity3d', 'JavaScript', 'Web']}
          links={[]}
          desc="Developing games has been a hobby of mine since I started high school, although I may not have told many people about it back then. But I look back on it proudly now because the work I did really helped me understand full project life-cycles, customer feedback, and user experiences. The web games I published taught me how to make user interfaces clear and juicy, how to use user metrics to evaluate success, and how to grow as a designer."
        />
        
      </div>
    )
  }
}