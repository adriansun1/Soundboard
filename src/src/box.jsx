import React, { Component } from 'react';
import { render } from 'react-dom';

class Box extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const appearance = {
      width: '100px',
      height: '100px',
      border: '1px solid black',
      textAlign: 'center',
      verticalAlign: 'middle',
      fontSize: '50px',
      display: 'inline',
      backgroundColor: this.props.marker.backgroundColor,
    };
    console.log('hey we in the box');
    return (
      <span>
        <button style={appearance}></button>
      </span>
    );
  }
}

export default Box;
