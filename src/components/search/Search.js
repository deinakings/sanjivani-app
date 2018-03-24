import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: ''
    };
  }
  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.onFilter(event.target.value);
  }
  render() {
    return (
        <div className="search">
            <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} placeholder="Search.." />
        </div>
    );
  }
}

export default Search;

