import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (<>
  <div className='bg-gray-800 text-zinc-100 p-3 flex justify-between'>
    <div className='font-bold mx-10' p-2>Login</div>
    <div className='mx-10  flex gap-10 text-center text-black font-extrabold' >
        <Link to ="/" className="hover:underline bg-cyan-300 rounded-md w-20">Home</Link>
        <Link to ="/logout" className="hover:underline  bg-cyan-300 rounded-md w-20">Logout</Link>
    </div>
  </div>
  
  
  
  
  </>
    
  )
}

export default Navbar