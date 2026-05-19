import React, { useState } from 'react'

const Rendering = () => {
    const [count,setCount]=useState(false)

    const handleclick=()=>{
        setCount(!count)
    }
    
  return (<>


  <div className='bg-amber-700 text-black p-10 mx-10  flex flex-col gap-5  text-center ' >
    <h1>conditional</h1>
    <p> {count?<p className='bg-purple-600 text-black w-40 rounded-2xl  '>This is true </p>:<p className='bg-purple-950 text-white w-40 rounded-2xl  '>This is false</p>}</p>
    
    <button onClick={handleclick} className='bg-pink-500 text-black w-40 rounded-2xl'>clike</button>
  </div>



  </>
    
  )
} 

export default Rendering