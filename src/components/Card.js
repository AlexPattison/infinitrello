import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <li>
        <h1>{this.props.title}</h1>
        <p>{this.props.body}</p>
      </li>
    )
  }
}
