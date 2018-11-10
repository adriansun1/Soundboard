import React, { Component } from 'react';
import { render } from 'react-dom';
import Box from './box.jsx';

class Row extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const appearance = {
      width: `${100 * this.props.squares}px`,
      height: '100px',
      border: '1px solid black',
    };
    let boxes = [];
    for (let i = 0; i < this.props.squares; i += 1) {
      boxes.push(<Box marker={this.props.marker[i]} />);
    }
    console.log(boxes[0]);

    return (
      <div style={appearance}>
      {boxes};
      </div>
    );
  }
}

export default Row;
