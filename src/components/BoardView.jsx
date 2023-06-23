import React from 'react'

export default function BoardView({ board }) {

  return (
    <>
      <table>
        <tbody>
          <tr className="row">
            <td className={`square color-${board[0]}`}>{board[0]}</td>
            <td className={`square color-${board[1]}`}>{board[1]}</td>
            <td className={`square color-${board[2]}`}>{board[2]}</td>
            <td className={`square color-${board[3]}`}>{board[3]}</td>
          </tr>
          <tr className="row">
            <td className={`square color-${board[4]}`}>{board[4]}</td>
            <td className={`square color-${board[5]}`}>{board[5]}</td>
            <td className={`square color-${board[6]}`}>{board[6]}</td>
            <td className={`square color-${board[7]}`}>{board[7]}</td>
          </tr>
          <tr className="row">
            <td className={`square color-${board[8]}`}>{board[8]}</td>
            <td className={`square color-${board[9]}`}>{board[9]}</td>
            <td className={`square color-${board[10]}`}>{board[10]}</td>
            <td className={`square color-${board[11]}`}>{board[11]}</td>
          </tr>
          <tr className="row">
            <td className={`square color-${board[12]}`}>{board[12]}</td>
            <td className={`square color-${board[13]}`}>{board[13]}</td>
            <td className={`square color-${board[14]}`}>{board[14]}</td>
            <td className={`square color-${board[15]}`}>{board[15]}</td>
          </tr>
        </tbody>
      </table >
    </>
  )

}
