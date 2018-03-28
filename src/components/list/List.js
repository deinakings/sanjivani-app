import React, { Component } from 'react';
import firebase from '../../firebase-db';
import './List.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount(){
    this.getListData(this.props.type);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.type !== nextProps.type) {
      this.getListData(nextProps.type);
    }
  }
  getListData(type) {
    // only get the data once since we are listening to child_added event.
    if (this.state[type]) return;

    firebase.database().ref(type)
      .orderByKey()
      .limitToLast(100)
      .on('child_added', snapshot => {
        // Update React state when child is added at Firebase Database.
        let data = { name: snapshot.val().name, id: snapshot.key };
        // send a function to state to not override the values
        // if we call it in the same update cycle.
        this.setState((previousState, currentProps) => {
          let newState = {},
              previous = previousState[currentProps.type] || [];
          newState[currentProps.type] = [...previous, data];
          return newState;
        });
      });
  }
  render() {
    if (this.state[this.props.type]) {
      return this.state[this.props.type]
        .filter((value, key) => value.name.toLowerCase().indexOf(this.props.filter) !== -1)
        .map((value, key) => {
          return (<div key={key + value}>{value.name}</div>);
        });
    } else {
      return <div>no elements..</div>;
    }
  }
}

export default List;

