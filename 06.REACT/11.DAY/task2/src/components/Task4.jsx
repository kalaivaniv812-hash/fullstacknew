import React, { useState, useRef, useEffect } from 'react'

function App() {

  const [count, setCount] = useState(0)

  const prevCount = useRef()

  useEffect(() => {
    prevCount.current = count
  }, [count])

  return (
    <div>

      <h1>Current Value : {count}</h1>

      <h1>Previous Value : {prevCount.current}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

    </div>
  )
}

export default App