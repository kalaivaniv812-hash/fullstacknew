import React, { useEffect, useState } from 'react'

const Webside = () => {
  const [food, setFood] = useState([])

  useEffect(() => {
    getdata()
  }, [])

  const getdata = async () => {
    const res = await fetch("https://dummyjson.com/recipes")
    const data = await res.json()
    setFood(data.recipes)   // ✅ correct key
  }

  return (
    <table border="1" cellPadding="10"  >
      <thead>
        <tr>
          <th>S.no</th>
          <th>ID</th>
          <th>Name</th>
          <th>Ingredients</th>
        </tr>
      </thead>

      <tbody>
        {food.map((e, i) => (
          <tr key={e.id}>
            
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.ingredients.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Webside