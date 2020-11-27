import React, { useState, useEffect } from 'react'

const Timer = ({time, setTime, stop}) => {
  const initialTime = (new Date()).getTime()
  const updateTimer = () => {
    const currentTime = (new Date()).getTime()
    const seconds = (new Date(currentTime - initialTime)).getSeconds().toString().padStart(2, '0')
    const minutes = (new Date(currentTime - initialTime)).getMinutes().toString().padStart(2, '0')
    setTime(`${minutes}:${seconds}`)
  }

  useEffect(() => {
    if(!stop) {
      const intervalRef = setInterval(updateTimer, 1000)
      const stopTimer = () => clearInterval(intervalRef)
      return stopTimer
    }
  }, [stop])
  
  return(
    <p className="timer-component">Tempo: {time}</p>
  )
}

export default Timer
