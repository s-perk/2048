import React, { useEffect, useState } from 'react'
import BoardView from './BoardView';

export default function Board() {
  const [board, setBoard] = useState(Array(16).fill(null))
  const [score, setScore] = useState(0);



  useEffect(() => {
    const keyHandler = (event) => {
      const key = event.key
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


  const addRandomTile = (min, max) => {
    let position = Math.floor(Math.random() * (max - min + 1)) + min;
    let newBoard = [...board]
    newBoard[position] = 2
    setBoard(newBoard)
    return
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
      <BoardView board={board} />
    </>
  )

}
