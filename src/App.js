import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase-db';
import MenuWrapper from './MenuWrapper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plants: []
    };
  }
  componentWillMount(){
    
    /* Create reference to messages in Firebase Database */
    let plantsRef = firebase.database().ref('plants').orderByKey().limitToLast(100);
    console.log(plantsRef);
    plantsRef.on('child_added', snapshot => {
      
      /* Update React state when message is added at Firebase Database */
      let plant = { name: snapshot.val().name, id: snapshot.key };
      this.setState({ plants: [plant].concat(this.state.plants) });
    })
  }
  render() {
    console.log(this.state.plants);
    return (
      <div className="App">
        <MenuWrapper></MenuWrapper>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
