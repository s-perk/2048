import React, { useCallback, useEffect, useState, useMemo } from 'react'
import BoardView from './BoardView';

export default function Board() {
  const [board, setBoard] = useState(Array(16).fill(null))
  const [score, setScore] = useState(0);

  const upTiles = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  const leftTiles = [0, 4, 8, 12, 1, 5, 9, 13, 2, 6, 10, 14, 3, 7, 11, 15]
  const rightTiles = [3, 7, 11, 15, 2, 6, 10, 14, 1, 5, 9, 13, 0, 4, 8, 12]



  const moveTiles = (tiles) => {
    setBoard(prevBoard => {
      let newBoard = [...prevBoard]

      tiles.forEach((tile, i) => {
        // if nothing here already, then ignore
        if (prevBoard[tile] === null) {
          return;
        }

        let currentTile = tiles[i];
        i -= 4


        // Continue moving tile until we reach a new number or edge of grid
        while ((i >= 0) && (i <= 15)) {
          let newTile = tiles[i];
          console.log('moving tiles -', currentTile, newTile)// board, newBoard)
          // if newTile is null, set position on board
          if (newBoard[newTile] === null) {
            newBoard[newTile] = newBoard[currentTile]
            newBoard[currentTile] = null
            currentTile = newTile
            i -= 4

          } else {
            // if has a value, then check if same value
            // if yes, then set to new score and combine numbers
            // if no, then break loop (current position is appropriate)
            if (newBoard[newTile] === newBoard[currentTile]) {
              // currScore += newBoard[newTile]
              newBoard[newTile] = prevBoard[tile] * 2
              newBoard[currentTile] = null
            } else {
              break
            }
          }
        }

        // Add a random tile at the end
        if (currentTile !== tile) {
          let position = getRandomTile(newBoard)
          newBoard[position] = 2
        }
      })


      return newBoard
    })
  }



  useEffect(() => {
    const keyHandler = (event) => {
      const key = event.key
      if (key === 'ArrowUp') {
        // CODE HERE
        console.log('up arrow!')
        moveTiles(upTiles)
      } else if (key === 'ArrowDown') {
        console.log('down arrow!')
        moveTiles(upTiles.reverse())
      } else if (key === 'ArrowLeft') {
        console.log('left arrow!')
        moveTiles(leftTiles)

      } else if (key === 'ArrowRight') {
        console.log('right arrow!')
        moveTiles(rightTiles)

      }
    }
    window.addEventListener('keydown', keyHandler)

    return () => {
      window.removeEventListener('keydown', keyHandler)
    }
  }, [moveTiles])




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


  // Add random tile
  const getRandomTile = (newBoard = [...board], min = 0, max = 15) => {
    let position = Math.floor(Math.random() * (max - min + 1)) + min;
    // Check if we already have a value in that position
    while (board[position] !== null) {
      position = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return position
  }
  const addRandomTile = (newBoard = [...board]) => {
    let position = getRandomTile(newBoard)
    newBoard[position] = 2
    setBoard(newBoard)
    return
  }

  useEffect(() => {
    addRandomTile()
  }, [])

  useEffect(() => console.log(board), [board])




  return (
    <>
      <div>Score: {score}</div>
      <BoardView board={board} />
    </>
  )

}
