import React, { useEffect, useState, useRef } from 'react'
import '../styles/Timer.css'

const Timeing = () => {
  const [count, setCount] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setCount((prev) => prev + 1)
      }, 1000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isRunning])

  const startTimer = () => {
    setIsRunning(true)
  }

  const stopTimer = () => {
    setIsRunning(false)
  }

  const resetTimer = () => {
    setIsRunning(false)
    setCount(0)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="timer-container">
      <div className="timer-card">
        <h1 className="timer-title">⏱️ Timer</h1>
        
        <div className="timer-display">
          {formatTime(count)}
        </div>

        <div className="timer-info">
          <p>Seconds: {count}</p>
        </div>

        <div className="timer-buttons">
          <button 
            onClick={startTimer} 
            disabled={isRunning}
            className="btn btn-start"
          >
            ▶ Start
          </button>
          <button 
            onClick={stopTimer} 
            disabled={!isRunning}
            className="btn btn-stop"
          >
            ⏸ Stop
          </button>
          <button 
            onClick={resetTimer}
            className="btn btn-reset"
          >
            🔄 Reset
          </button>
        </div>

        <div className="timer-status">
          {isRunning ? (
            <span className="status-running">🟢 Running...</span>
          ) : count > 0 ? (
            <span className="status-paused">🟡 Paused</span>
          ) : (
            <span className="status-stopped">🔴 Stopped</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Timeing