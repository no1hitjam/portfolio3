import React, { Component } from 'react';
//import {Link} from 'react-router-dom';

import './Programming.css';

class Project extends Component {

  tagColors = {
    Game: '#fd7da5',
    'C#': '#9091ad',
    Unity3d: '#9ae9cd',
    Mobile: '#ffe380',
    JavaScript: '#fd956c',
    HTML5: '#bdc7e3',
    CSS: '#ccfab8',
    Web: '#6edae5',
    SQL: '#c39a93',
    SSIS: '#fee5b1',
    Python: '#fea3ae',
    SSMS: '#6d85ff',
    ReactJS: '#ffa772',
    ActionScript: '#d672ff'
  }

  render() {
    const tags = this.props.tags.map((val, idx) => {
      let color = '#fff';
      if (this.props.tagStates[val]) {
        color = this.tagColors[val];
      }
      return (
        <button key={val} style={{backgroundColor: color, borderBottom: "2px solid " + this.tagColors[val]}} onClick={() => this.props.onTagClick(val)}>{val}</button>
      )
    });

    for (const descIdx in this.props.desc) {
      const descItem = this.props.desc[descIdx];
      if (descItem.props) {
        if (descItem.props.className === 'Project-desc-tag') {
          for (const tag in this.props.tagStates) {
            if (this.props.tagStates[tag]) {
              if (tag.toLowerCase() === descItem.props.children.toLowerCase() || tag.toLowerCase() + 's' === descItem.props.children.toLowerCase()) {
                this.props.desc[descIdx] = (<span style={{backgroundColor: this.tagColors[tag]}}>{descItem.props.children}</span>);
              }
            }
          }
        }
      }
    }


    return(
      <div className="Project">
        <h4>{this.props.name}</h4>
        <table><tbody><tr>
          <td className="Project-item">{this.props.roles}</td>
          <td className="Project-item">{this.props.company}</td>
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
  constructor(props) {
    super(props);
    this.state = {
      tags: {}
    };

    this.onTagClick = this.onTagClick.bind(this);
  }

  onTagClick(val) {
    const tags = {};
    for (var tag in this.state.tags) {
      tags[tag] = this.state.tags[tag];
    }
    if (tags[val]) {
      tags[val] = !tags[val];
    } else {
      tags[val] = true;
    }
    //console.log(val + ": " + tags[val]);
    this.setState({tags: tags});
    //console.log(val + ": " + tags[val]);
  }

  render() {
    return (
      <div className="Programming">
        <h3>Programming Resume</h3>
        <Project
          name="OK K.O.! Dynamite's Action News"
          roles="Project Lead, Lead Programmer, Designer"
          company={<a target="_blank" href="http://wakerobingames.com/">Wake Robin Games</a>}
          date="June 2016 - May 2017"
          tags={['C#', 'Unity3d', 'Mobile', 'Game']}
          onTagClick={this.onTagClick}
          tagStates={this.state.tags}
          desc={["I led our team of three (musician, artist, programmer) in making this ", <span className="Project-desc-tag">mobile</span>, " ",
          <span className="Project-desc-tag">game</span>, " with Cartoon Network. I programmed it in ", 
          <span className="Project-desc-tag">C#</span>, " with the ", <span className="Project-desc-tag">Unity3d</span>,
          " engine. Many of the design and programming challenges came from our desire to have an exciting narrative action in the style of a real cartoon. It was announced at PAX East and will be released for iOS, Android, and Amazon devices soon."]}
        />

        <Project
          name="Web Games"
          roles="Lead Programmer"
          company={<a target="_blank" href="http://wakerobingames.com/">Wake Robin Games</a>}
          date="March - May 2017"
          tags={['JavaScript', 'HTML5', 'CSS', 'Web', 'Mobile', 'Game']}
          onTagClick={this.onTagClick}
          tagStates={this.state.tags}
          desc={["I programmed a series of ", <span className="Project-desc-tag">JavaScript</span>, " ", <span className="Project-desc-tag">web</span>, " ", 
          <span className="Project-desc-tag">games</span>, " using the ", 
          <span className="Project-desc-tag">HTML5</span>, " canvas. They were optimized to run smoothly on ",
          <span className="Project-desc-tag">mobile</span>, " devices and across browsers and are pending release."]}
        />

        <Project
          name="TOCS Archive"
          roles="Project Lead, Developer"
          company={<a target="_blank" href="http://cass.oregonstate.edu/">CASS</a>}
          date="April 2015 - June 2016"
          tags={['SQL', 'SSIS', 'Python', 'SSMS']}
          onTagClick={this.onTagClick}
          tagStates={this.state.tags}
          desc={["I created an archive process for four 1,000,000+ row tables in a ", <span className="Project-desc-tag">SQL</span>, "Server database with ", <span className="Project-desc-tag">SQL</span>, " and ", <span className="Project-desc-tag">SSIS</span>, " processes that is currently in production at ODOT. I then lead and mentored a team of four student developers through the next phase in a scrum-like environment to extend the process to more than 200 other tables. I was involved with drafting the requirements with clients and helped draft the project budget. I utilized metaprogramming and generated many of the ", <span className="Project-desc-tag">SQL</span>, " scripts with ", <span className="Project-desc-tag">Python</span>, "."]}
        />

        <Project
          name={["Personal Website ", <i>(You're on it right now!)</i>]}
          roles="Designer, Developer"
          company=""
          date="May 2017"
          tags={['JavaScript', 'ReactJS', 'CSS', 'Web']}
          onTagClick={this.onTagClick}
          tagStates={this.state.tags}
          desc={["I've rebuilt this site many times over the years as a way to apply the lessons I've learned with UX, design, and ", <span className="Project-desc-tag">web</span>, " technologies. This latest incarnation was created with ", <span className="Project-desc-tag">ReactJS</span>, " to take advantage of its declarative integration of JS and the DOM. This 'Programming Resume' page is the most fun one since it includes the smart tagging feature. I tried my best to make this site feel fun and professional and work on any resolution."]}
        />

        <Project
          name="Other Game Development"
          roles="Programmer, Designer, Art Roles"
          company=""
          date="2006 - Present"
          tags={['C#', 'Unity3d', 'JavaScript', 'ActionScript', 'Web', 'Game']}
          onTagClick={this.onTagClick}
          tagStates={this.state.tags}
          desc={["Making ", <span className="Project-desc-tag">games</span>, " has been a long-time hobby of mine, and it's how I started programming in the first place. Publishing ", <span className="Project-desc-tag">game</span>, " after ", <span className="Project-desc-tag">game</span>, " online has helped me understand working through full project life-cycles, customer feedback, and creating polished user experiences."]}
        />
        
      </div>
    )
  }
}
