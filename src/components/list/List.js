import React, { Component } from 'react';
import firebase from '../../firebase-db';
import './List.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
      plants: [],
      diseases: [],
      symptoms: [],
      list: [],
    };
  }
  componentWillMount(){
    console.log('componentWillMount', this.props.type);
    /* Create reference in Firebase Database */
    let dataRef = firebase.database().ref(this.props.type).orderByKey().limitToLast(100);
    dataRef.on('child_added', snapshot => {
      console.log('child_added', this.props.type, snapshot.val().name);
      /* Update React state when child is added at Firebase Database */
      let data = { name: snapshot.val().name, id: snapshot.key };
      let newState = {};
      debugger;
      console.log(JSON.stringify(this.state[this.props.type]));
      newState[this.props.type] = [data].concat(this.state[this.props.type]);
      this.setState(newState);
      console.log(JSON.stringify(this.state));
      
    })
  }
  render() {
    console.log('render');
    return this.state[this.props.type].map((value, key) => {
      return (<div>{value.name}</div>);
    });
  }
}

export default List;

