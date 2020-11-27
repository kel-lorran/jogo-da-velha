import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Timer from '../../Components/Timer'
import DisplayResult from '../../Components/DisplayResult'

import { initCells, initChoices, victoryScenarios } from './helper'
import './index.scss'

const PlayGround = () => {
  const [playerLabel, setPlayerLabel] = useState(true)
  const [gameCells, setGameCells] = useState(initCells())
  const [choices, setChoices] = useState(initChoices().sort(() => 0.5 - Math.random()))
  const [gameOver, setGameOver] = useState()
  const [time, setTime] = useState('00:00')

  const deepClone = variable => JSON.parse(JSON.stringify(variable))
  
  const removeChoice = (...cord) => {
    const choicesClone = deepClone(choices)
    const targetIndex = choicesClone.findIndex(e => e.toString() === cord.toString())
    choicesClone.splice(targetIndex, 1)
    setChoices(choicesClone)
  }

  const handlePlay = (x, y, label) => {
    if (gameOver) return
    const cellClone = deepClone(gameCells)
    cellClone[y][x] = label
    setGameCells(cellClone)
    setPlayerLabel(!playerLabel)
    removeChoice(x, y)
  }

  useEffect(() => {
    if(victoryScenarios(gameCells)) {
      setGameOver(playerLabel ? 'derrota' : 'vitoria')
    } else if(!choices.length) {
      setGameOver('empate')
    } else if(!playerLabel) {
      const [x, y] = choices[0]
      setTimeout(() => handlePlay(x, y, false), 2000)
    }
  }, [playerLabel])

  return (
    <main className="playground-page">
      <Link to='/'>Voltar para a página inicial</Link>
      <h1>Partida</h1>
      <div className="main-content">
        <p className={playerLabel && !gameOver ? 'd-show' : 'd-hide'}>É a sua vez!</p>
        <table>
          <tbody>
            {
              gameCells
                .map((row, i) => (
                  <tr key={`tr_${i}`}>
                    {row.map((cell, j) => (
                      <td key={`td_${i}_${j}`} className="game-cell-input">
                        <input id={`cell_${i}_${j}`} type="checkbox" checked={cell !== null} onChange={() => playerLabel && cell === null && handlePlay(j, i, true) } />
                        <label htmlFor={`cell_${i}_${j}`} className={(cell === false && 'p2_choice')||(cell === true && 'p1_choice') || ''}></label>
                      </td>
                    ))}
                  </tr>
                ))
            }
          </tbody>
        </table>
        <p className={!playerLabel && !gameOver ? 'd-show' : 'd-hide'}>É a vez do computador</p>
      </div>
      <Timer time={time} setTime={setTime} stop={gameOver} />
      <DisplayResult result={gameOver} stats={{}} />
    </main>
  )
}

export default PlayGround
