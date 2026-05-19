import React from "react";

const MapExample = () => {
  const fruits = ["Apple", "Orange", "Mango", "Banana"];

  return (
    <div>
      <h1>Array Looping using map()</h1>

      {fruits.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}
    </div>
  );
};

export default MapExample;