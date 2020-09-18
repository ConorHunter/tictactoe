import React from 'react';
import Board from './Board';

function calculateWinner(square) {
  // possible winning outcomes
  const outcomes = [
    // horizontal outcomes
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // vertical outcomes
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // diagonal outcomes
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < outcomes.length; i++) {
    const [a, b, c] = outcomes[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
}

class Game extends React.Component {
  constructor(){
    super();
    this.state = {
      history: [{
        square: Array(9).fill(null)
      }],
      xTurn: true,
      moves: 0,
    };
  }

  // Starts new game
  newGame() {  
      this.setState({
        moves: 0,
        xTurn: true,
      });
    }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.moves+1)
    const current = history[history.length - 1];
    const square = current.square.slice();
    if (calculateWinner(square) || square[i]) {
      return;
    }
    square[i] = this.state.xTurn ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        square: square
      }]),
      xTurn: !this.state.xTurn,
      moves: history.length,
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.moves];
    const winner = calculateWinner(current.square);
    let result;
    if(winner){
      result = 'Winner is: ' + winner;
    }
    else if(this.state.moves > 8){
      result = 'Draw'
    }
    else{
      result = 'Current Turn: ' + (this.state.xTurn ? 'X' : 'O');
    };;

    return (
      <div className="game">
        <div>
          <h1>TicTacToe Game</h1>
          <Board square={current.square} onClick={(i)=>this.handleClick(i)}/>
          <button id="newgame" onClick={() => {this.newGame()}}>New Game</button>
        </div>
        <div>
          <div id="result">{result}</div>
        </div>
      </div>
    );
  }
}
export default Game;