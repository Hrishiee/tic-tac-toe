import React, { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button
      className={`w-24 h-24 border border-gray-400 text-4xl font-bold flex items-center justify-center
                  ${value === 'X' ? 'text-blue-600' : value === 'O' ? 'text-red-600' : ''}
                  hover:bg-gray-100 transition-colors duration-200`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <div className="text-2xl font-semibold">{status}</div>
      <div className="grid grid-cols-3 gap-1">
        {squares.map((value, i) => (
          <Square key={i} value={value} onSquareClick={() => handleClick(i)} />
        ))}
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function App() {
  return (
    <main className="h-screen flex items-center justify-center bg-gray-50">
      <Board />
    </main>
  );
}
