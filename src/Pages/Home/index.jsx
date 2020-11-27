import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

const fakeData = [
  {
    id: 0,
    player: 'Kelvin lorran',
    moviments: 3,
    time: 15
  },
  {
    id: 1,
    player: 'Lorran',
    moviments: 5,
    time: 32
  }
]

const Home = () => {
  const [rankingData, setRankingData] = useState(fakeData)

  return(
    <main className="home-page">
      <a target="_blank" rel="noopener noreferrer" href="#">Visitar GitHub do desenvolvedor</a>
      <h1>Bem-vindo ao Jogo da Velha</h1>
      <h3>Ranking</h3>
      <table>
        <thead>
          <tr>
            <th>Posição</th>
            <th>Jogador</th>
            <th>Movimentos</th>
            <th>Tempo</th>
          </tr>
        </thead>
        <tbody>
          {
            rankingData
              .sort((a, b) => {
                const fator = a.moviments - b.moviments
                return fator !== 0 ? fator : a.time - b.time
              })
              .filter((e, i) => i < 10)
              .map((row, i) => (
                <tr key={row.id}>
                  <td>{i + 1}</td>
                  <td>{row.player}</td>
                  <td>{row.moviments}</td>
                  <td>{row.time}s</td>
                </tr>
              ))
          }
        </tbody>
      </table>
      <Link className="router-button" to="/to-play">Jogar</Link>
    </main>
  )
}

export default Home
