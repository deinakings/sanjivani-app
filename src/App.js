import React, { Component } from 'react';
import './App.css';
import { slide as Menu } from 'react-burger-menu';
import ListView from './components/listView/ListView.js';
import Header from './components/header/Header.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  closeMenu() {
    this.setState({menuOpen: false})
  }
  render() {
    return (
      <Router basename="/sanjivani-app">
        <div className="App">
            <Menu isOpen={this.state.menuOpen}>
              <ul>
                <li onClick={() => this.closeMenu() }><Link className="menu-item" to="/">Home</Link></li>
                <li onClick={() => this.closeMenu() }><Link className="menu-item" to="/plants">Plantas</Link></li>
                <li onClick={() => this.closeMenu() }><Link className="menu-item" to="/diseases">Enfermedades</Link></li>
                <li onClick={() => this.closeMenu() }><Link className="menu-item" to="/symptoms">Sintomas</Link></li>
              </ul>
            </Menu>
            <Header></Header>
            <div className="content">
              <Route path="/:type" render={({match}) => <ListView type={match.params.type}></ListView>} />
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
