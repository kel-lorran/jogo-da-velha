import React from 'react'
import './index.scss'

import { setHistory } from '../../utils/historyActions'

const DisplayResult = ({result, stats, rankingPosition}) => {
  const resetGame = () => window.location.reload()

  const saveResult = (e) => {
    const playerStatsComplete = {
      player: e.target[0].value,
      ...stats()
    }
    setHistory(playerStatsComplete)
  }
  
  switch (result) {
    case 'vitoria':
      return (
        <div className="display-result-component">
          <p className="title">Você venceu!!!</p>
          <p className="sub-title">Conquistou o {rankingPosition()}º lugar</p>
          <form className="my-input-group" onSubmit={saveResult}>
            <input type="text" required placeholder="Informe o seu nome" defaultValue="" />
            <button type="submit">Finalizar</button>
          </form>
        </div>
      )
    case 'derrota':
      return (
        <div className="display-result-component">
          <p className="title">
            Você perdeu!!!
          </p>
          <button  type="button" onClick={resetGame}>Tentar novamente</button>
        </div>
      )
    case 'empate':
      return (
        <div className="display-result-component">
          <p className="title">
            Houve um empate!!!
          </p>
          <button type="button" onClick={resetGame}>Tentar novamente</button>
        </div>
      )
    default:
      return null
  }
}

export default DisplayResult