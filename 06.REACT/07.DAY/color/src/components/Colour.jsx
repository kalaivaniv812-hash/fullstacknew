import React, { useState } from 'react'

const Colour = () => {
    const [data,setData]=useState()

    const handelclick =() =>{
        setData(!Dark)
    }
  return (<>
  <div className='flex justify-center '>

  <h1>{data?<p className='bg-black text-white '>Dark </p>:<p className='bg-green-200 text-black'>Light</p>}</h1>
  <button onClick={handelclick}>swich to{data? "Dark":"Light"}Mood</button>



  </div>
  
  
  </>
    
  )
}

export default Colour