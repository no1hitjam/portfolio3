import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';
import { Header } from './Header.js';
import { Home } from './Home.js';
import { Games } from './Games.js';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/games" component={Games} />

          <Route exact path="/portfolio3" component={Home} />
        </div>
      </Router> 
    );
  }
}

export default App;
