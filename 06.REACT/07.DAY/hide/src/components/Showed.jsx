import React, { useState } from 'react'

const Showed = () => {
    const [main,setMain] = useState()
    const handelclick =() => {
        setMain(!main)
    }

  return (<>

  <div className='bg-pink-700 text-black p-3 flex justify-center font-extrabold border'>
    <p className='bg-purple-500 flex  rounded'>{main ?"Hi lovely":""}</p>

    <button className='bg-purple-950 text-amber-50 rounded w-30 ' onClick={handelclick}>{main? "Hide":"Show"}</button>
  </div>

    
    </>
  )
}

export default Showed