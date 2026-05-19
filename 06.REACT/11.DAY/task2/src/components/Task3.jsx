import React, { useRef } from 'react'

function App() {

  const inputRef = useRef()

  const clearInput = () => {
    inputRef.current.value = ""
  }

  return (
    <div>

      <input
        type="text"
        ref={inputRef}
        placeholder="Enter Text"
      />

      <button onClick={clearInput}>
        Clear
      </button>

    </div>
  )
}

export default App