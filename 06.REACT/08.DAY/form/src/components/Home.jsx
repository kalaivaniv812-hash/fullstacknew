import React,{useState} from 'react'

const Home = () => {
    const [data,setData]= useState("")

    const handlechange =(i)=>{

        setData(i.target.value);
        
    }



  return (<>

  <div className='bg-orange-400 text-black  p-4  h-100 flex justify-center items-center '>
    <div>
        <h1 className='mb-5 text-center'>
            Enter the Form
        </h1>
        <form>
            <input className='bg-green-400 rounded border ' type="text" onChange={handlechange} placeholder='Enter the value' />
        </form>
        <h1>{data}</h1>
    </div>
  </div>
  
  
  
  </>
    
  )
}

export default Home