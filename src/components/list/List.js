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
    /* Create reference in Firebase Database */
    let dataRef = firebase.database().ref(this.props.type).orderByKey().limitToLast(100);
    dataRef.on('child_added', snapshot => {
      /* Update React state when child is added at Firebase Database */
      let data = { name: snapshot.val().name, id: snapshot.key };
      /* send a function to state to not override the values
       if we call it in the same update cycle */
      this.setState((previousState, currentProps) => {
        let newState = {};
        newState[currentProps.type] = [data].concat(previousState[currentProps.type]);
        return newState;
      });
    })
  }
  render() {
    return this.state[this.props.type].map((value, key) => {
      return (<div key={key + value}>{value.name}</div>);
    });
  }
}

export default List;

