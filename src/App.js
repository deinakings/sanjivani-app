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
                <li onClick={() => this.closeMenu() }><Link className="menu-item" exact={"true"} to="/">Home</Link></li>
                <li onClick={() => this.closeMenu() }><Link className="menu-item" to="/plantas">Plantas</Link></li>
                <li onClick={() => this.closeMenu() }><Link className="menu-item" to="/enfermedades">Enfermedades</Link></li>
                <li onClick={() => this.closeMenu() }><Link className="menu-item" to="/sintomas">Sintomas</Link></li>
              </ul>
            </Menu>
            <Header></Header>
            <div className="content">
              <Route path="/plantas" render={() => <ListView type={'plants'}></ListView>} />
              <Route path="/enfermedades" render={() => <ListView type={'diseases'}></ListView>} />
              <Route path="/sintomas" render={() => <ListView type={'symptoms'}></ListView>} />
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
