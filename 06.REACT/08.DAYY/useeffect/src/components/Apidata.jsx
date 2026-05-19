import React, { useEffect, useState } from 'react'

const Apidata = () => {
    const[dataget,setDataget]= useState([])
    useEffect(()=>{
        
        const fetchdata= async()=>{
            const getdata= await fetch("https://dummyjson.com/products")
            const changedata=await getdata.json()
            setDataget(changedata.products)
            //console.log(changedata);
            

        }
        fetchdata()
    },[])
  return (<>
   <table border="1" cellPadding="10" cellSpacing="0">
    <tr>
      <th>Title</th>
      <th>Price</th>
      <th>Description</th>

      </tr>
      <tbody>
       {dataget.map((e)=>{
  return (
    <tr key={e.id}>
      <td>{e.title}</td>
      <td>{e.price}</td>
      <td>{e.description}</td>
    </tr>
  )
})}
      </tbody>
  </table>



  </>
    
  )
}

export default Apidata