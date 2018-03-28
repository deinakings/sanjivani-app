import React, { Component } from 'react';
import Search from '../search/Search.js';
import List from '../list/List.js';
import './ListView.css';

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        filter: ''
    };
  }
  handleFilter(filter) {
    this.setState({filter: filter});
  }
  render() {
    return (
        <div className="list-view">
            <Search filter={this.state.filter} onFilter={(value) => {this.handleFilter(value)}}></Search>
            <List type={this.props.type} filter={this.state.filter}></List>
        </div>
    );
  }
}

export default ListView;

