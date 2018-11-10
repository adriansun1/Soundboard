import React, { Component } from 'react';
import { render } from 'react-dom';
import Row from './row.jsx';
import Box from './box.jsx';
import Board from './board.jsx';

const colors = ['red', 'blue'];
const offColor = 'yellow';
const sounds = [0, 1, 2];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: [],
      squares: 4,
    };
    for (let i = 0; i < this.squares * this.squares; i += 1) {
      this.state.marker.push({ backgroundColor: offColor, sounds: sounds[0], on: false });
    }
    this.playerClick = this.playerClick.bind(this);
  }

  // rotate() {
  //   setTimeout(() => {
  //     if (this.state.marker === 'X') {
  //       this.setState({ marker: 'Y' });
  //     }
  //     else {
  //       this.setState({ marker: 'X' });
  //     }
  //   }, 3000);
  // }

  playerClick(num) {
    const arr = this.state.marker;
    if (this.state.turn) {
      arr[num] = 'X';
    } else {
      arr[num] = 'Y';
    }
    this.setState({ marker: arr });
  }

  // flipTurn() {
  //   if (this.state.turn) {
  //     this.state.turn = false;
  //   } else {
  //     this.state.turn = true;
  //   }
  // }

  render() {
    console.log(this.state.marker);
    return (
      <div>
        <h1>SoundBoard</h1>
        <Board marker={this.state.marker} squares={this.state.squares} playerClick={this.playerClick} />
      </div>
    );
  }
}

render(<App />, document.getElementById('content'));
