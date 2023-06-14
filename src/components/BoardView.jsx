import React from 'react'

export default function BoardView({ board }) {

  return (
    <>
      <table>
        <tbody>
          <tr className="row">
            <td className="square negative">{board[0]}</td>
            <td className="square negative">{board[1]}</td>
            <td className="square negative">{board[2]}</td>
            <td className="square negative">{board[3]}</td>
          </tr>
          <tr className="row">
            <td className="square negative">{board[4]}</td>
            <td className="square negative">{board[5]}</td>
            <td className="square negative">{board[6]}</td>
            <td className="square negative">{board[7]}</td>
          </tr>
          <tr className="row">
            <td className="square negative">{board[8]}</td>
            <td className="square negative">{board[9]}</td>
            <td className="square negative">{board[10]}</td>
            <td className="square negative">{board[11]}</td>
          </tr>
          <tr className="row">
            <td className="square negative">{board[12]}</td>
            <td className="square negative">{board[13]}</td>
            <td className="square negative">{board[14]}</td>
            <td className="square negative">{board[15]}</td>
          </tr>
        </tbody>
      </table>
    </>
  )

}
