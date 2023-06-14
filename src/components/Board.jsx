import React, { useEffect, useState } from 'react'

export default function Board() {
  const [board, setBoard] = useState(Array(16).fill(null))
  const [score, setScore] = useState(0);



  useEffect(() => {
    const keyHandler = (event) => {
      const key = event.key
      console.log('key event!', event)
      if (key === 'ArrowUp') {
        // CODE HERE
        console.log('up arrow!')
      } else if (key === 'ArrowDown') {
        console.log('down arrow!')
      } else if (key === 'ArrowLeft') {

        console.log('left arrow!')

      } else if (key === 'ArrowRight') {
        console.log('right arrow!')

      }
    }
    window.addEventListener('keydown', keyHandler)

    return () => {
      window.removeEventListener('keydown', keyHandler)
    }
  }, [])




  useEffect(() => {
    const clickHandler = (event) => {
      // CODE HERE
      console.log('window click!')
    }

    window.addEventListener('mouseup', clickHandler)

    return () => {
      window.removeEventListener('mouseup', clickHandler)
    }
  }, [])



  useEffect(() => {
    const moveHandler = (event) => {
      // CODE HERE
      console.log('window move!?')
    }

    window.addEventListener('mouseup', moveHandler)

    return () => {
      window.removeEventListener('mouseup', moveHandler)
    }

  }, [])


  const addRandomTile = () => {
    // CODE HERE
  }
  useEffect(() => {
    addRandomTile()
  }, [])


  const moveTiles = (tiles) => {
    const newBoard = [...board]
    tiles.forEach((tile) => {
      let currentTile = tile;
      let newTile = currentTile - 4;
      while (newTile >= 0) {
        // CODE HERE
      }

      // Code here
      if (true) {
        addRandomTile();
      }

      setBoard(newBoard)
    })
  }




  return (
    <>
      <div>square</div>
      <div>{board}</div>

      <table>
        <tr class="row">
          <td class="square negative"></td>
          <td class="square negative"></td>
          <td class="square negative"></td>
          <td class="square negative"></td>
        </tr>
        <tr class="row">
          <td class="square negative"></td>
          <td class="square negative"></td>
          <td class="square negative"></td>
          <td class="square negative"></td>
        </tr>
        <tr class="row">
          <td class="square negative"></td>
          <td class="square negative"></td>
          <td class="square negative"></td>
          <td class="square negative"></td>
        </tr>
        <tr class="row">
          <td class="square negative"></td>
          <td class="square negative"></td>
          <td class="square negative"></td>
          <td class="square negative"></td>
        </tr>
      </table>
    </>
  )

}
