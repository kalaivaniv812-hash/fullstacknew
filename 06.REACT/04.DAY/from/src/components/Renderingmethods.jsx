import React from 'react'


const Renderingmethods = () => {
const [count, setCount] = useState(0)

  return (<>
    setCount(count+1)
    <div>
        <div>
        <h1>Home</h1>
        <h2>Rendering Methods</h2>
        <button onClick ={countchange}>increase </button>

        </div>

    </div>

    </>

  )
}

export default Renderingmethods