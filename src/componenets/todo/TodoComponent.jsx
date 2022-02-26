import React, { Component } from 'react'



export default class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.params.id,
    };
  }

  render() {
    return (
      <div>
        <h1>You are update {this.state.id} </h1>
      </div>
    );
  }
}
