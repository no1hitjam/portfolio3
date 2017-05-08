import React, { Component } from 'react';

import './Games.css';
import canvasserImg from './img/game-canvasser.jpg';

class Game extends Component {
  render() {
    const tags = this.props.tags.map((val, idx) =>{
      return (
        <span className="tag">{val}</span>
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

    const roles = this.props.roles.map((val, idx) => {
      const commaText = idx < this.props.roles.length - 1 ? ', ' : '';
      return (
        <span>{val + commaText}</span>
      )
    });

    const quotes = this.props.quotes.map((val, idx) => {
      const ltext = idx > 0 ? ' l' + (idx + 1) : '';
      return (
        <a href={val.link}>
          <div className={"Game-link quote" + ltext}>
            {val.quote}
          </div>
        </a>
      )
    });

    return (
      <div className="Game">
        <div
          className="Game-img-container"
          style={{backgroundImage: 'url(' + this.props.img + ')'}}>
          <div className="Game-header">
            <h3>{this.props.name}</h3>
            <span className="date">({this.props.date})</span>
            {tags}
          </div>
        </div>
        <div className="Game-entry">
          <table><tbody><tr>{links}</tr></tbody></table>
          <div className="Game-info desc">{this.props.desc}</div>
          <div className="Game-info roles">
            <span style={{fontStyle: 'italic'}}>My Roles: </span> 
            {roles}
          </div>
          <div className="Game-info personal">{this.props.personal}</div>
          {quotes}
        </div>
      </div>
    )
  }
}



export class Games extends Component {
  render() {
    return (
      <div className="Games">
        <Game
          name="OK K.O.! Dynamite's Action News" 
          img={canvasserImg}
          date={2017}
          tags={['Unity', 'C#', 'Mobile', 'Casual', 'Kids', 'Story']} 
          links={['Android Download', 'iOS Download', 'Amazon Download']}
          desc={["This is a fast-paced casual game where you play as star reporter Dynamite Watkins in the universe of Cartoon Network's ", <a href='#'>OK K.O.! Let's Be Heroes</a>, "! Uncover the secrets of the evil fog by getting big question combos and don't let the bad guys get away with it!"]}
          roles={['Programmer', 'Writer', 'Game Design', 'UI Design']}
          personal={["I made this with ",  <a href="#">Conley Smith</a>, " and ", <a href="#">Nathan Franks</a>, 
            " and got the contract as a result of winning the 2016 Portland Cartoon Network ",
            " game jam competition with them. We formed ",<a href="#">Wake Robin Games</a>, 
            " to make a game we hoped would inspire kids to act justly and ask questions for themselves!"]}
          quotes={[]}
        />

        <Game
          name="Canvasser" 
          img={canvasserImg}
          date={2014}
          tags={['ActionScript\u00a03.0', 'Flash', 'Web', 'Strategy', 'Persuasion']} 
          links={['Play Online!']}
          desc="Grab your clipboard and brush up on your social skills: It’s time to raise money on the streets for charity! Canvasser is a persuasion game, and it’s all about getting the most donations possible before the day ends. Can you sustain interest, trust, and get your town to care about Evergreen Forest before it’s too late?"
          roles={['Programmer', 'Writer', 'Artist', 'Game Design', 'Music', 'Sound']}
          personal="I built this game after the unforgettable experience I had as a Canvasser. I wanted to take the lessons I learned and the paradoxes I faced in the short time I spent fundraising and teach them through this game."
          quotes={[
            { quote: ["\"Through its mechanics, Canvasser presents an unbiased perspective on the occupation of canvassing (on-foot fundraising), illustrating both the highs and lows of the job without being heavy-handed or overly critical.\"", <br />, "—Alexander Feigenbaum"],
              link: "http://amadeusgamezart.wordpress.com/2013/06/27/canvasser-subtlety-in-mechanics/" },
            { quote: ["\"...Just might make you think twice the next time you go to reflexively brush that person on the street corner with the clipboard off.\"", <br />, "—Dora at jayisgames.com"],
              link: "http://jayisgames.com/archives/2013/05/canvasser.php"},
            { quote: "Dom Plays Canvasser - Save The Forest! (video)",
              link: "https://www.youtube.com/watch?v=FIJ03aQ8Cyk" },
          ]}
        />  
      </div>
    )
  }
}