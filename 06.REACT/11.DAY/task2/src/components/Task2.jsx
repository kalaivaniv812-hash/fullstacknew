import React, { useRef } from 'react'

function App() {

  const inputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(inputRef.current.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          ref={inputRef}
          placeholder="Enter Name"
        />

        <button type="submit">
          Submit
        </button>

      </form>
    </div>
  )
}

export default App