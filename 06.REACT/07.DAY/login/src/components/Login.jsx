import React, { useState } from 'react'

const Login = () => {
    const [data, setData]= useState(false)

const handlechange =()=>{
    


    setData(!data)

    }

  return (<>

  <div className='bg-gray-800 text-amber-200 font-bold flex justify-between  items-center p-3 '>
    <h1>{data ? "Welcome! You Are Logged In" : "Please Login"} </h1>
    <button className='bg-yellow-400 text-black rounded w-40' onClick={handlechange}>{data? "Login":"Logout"}</button>
  </div>
  
  </>
   
  )
}

export default Login