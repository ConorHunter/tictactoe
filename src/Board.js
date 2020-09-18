import React from 'react';

import Square from './Square';

class Board extends React.Component {
  
  renderSquare(i) {
    return <Square value={this.props.square[i]} onClick={() => this.props.onClick(i)}/>;
  }
  render() {
    return (
      // rendering tictactoe board
      <div>
        <div>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
export default Board;