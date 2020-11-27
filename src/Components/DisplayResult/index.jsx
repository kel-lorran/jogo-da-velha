import React from 'react'
import './index.scss'

const DisplayResult = ({result, stats}) => {
  const resetGame = () => window.location.reload()
  
  switch (result) {
    case 'vitoria':
      return (
        <div className="display-result-component">
          <p className="title">Você venceu!!!</p>
          <p className="sub-title">Conquistou o {5}º lugar</p>
          <form className="my-input-group">
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