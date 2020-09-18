import React from 'react';

function Square(props){
		return (
			<button className="squares" onClick={() => props.onClick()}>
			{props.value}
			</button>
		)
}
export default Square;
