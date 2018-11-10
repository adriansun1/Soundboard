import React, { Component } from 'react';
import { render } from 'react-dom';
import Row from './row.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('we in the bord');
    const appearance = {
      width: `${100 * this.props.squares}px`,
      height: `${100 * this.props.squares}px`,
      border: '1px solid black',
      textAlign: 'center',
      verticalAlign: 'middle',
      display: 'inline',
    };

    const rows = [];
    for (let i = 0; i < this.props.squares; i += 1) {
      let placeholder = this.props.marker.slice(
        i * this.props.squares,
        this.props.squares * (i + 1)
      );
      console.log(placeholder);
      rows.push(
        <Row
          style={appearance}
          marker={placeholder}
          squares={this.props.squares}
        />
      );
      console.log(rows[i]);
    }

    return (<div>{rows}</div>);
  }
}

export default Board;
