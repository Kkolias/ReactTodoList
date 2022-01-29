import React, { Component } from 'react';

export class Display extends Component {
  render() {
    return (
        <div>
        <h3>class component</h3>
        <p>countt: {this.props.count}</p>
      </div>   
    );
  }
}

export default Display;
