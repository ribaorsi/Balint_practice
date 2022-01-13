import React, { useState } from 'react';

const cars = [
  {brand: "Toyota", model: "yaris", topSpeed: "190km/h"},
  {brand: "Mercedes", model: "C63", topSpeed: "260km/h"},
  {brand: "Mazda", model: "6", topSpeed: "210km/h"},
  {brand: "Mazda", model: "Civic", topSpeed: "200km/h"},
  {brand: "Audi", model: "A4", topSpeed: "220km/h"},
]

let isHomePage = true;

const changePage = () => {
  console.log(isHomePage);
  isHomePage = !isHomePage
  console.log(isHomePage);
}
/*
const changePage = () => {
  if (isHomePage = true) {
    isHomePage.valueOf.toggle
    
  }
  
  console.log(isHomePage);
}
*/

const App= () => {

  const[value, setValue]=useState("Text")

  const transformToDiv = (carObject) => {
    return <div>{carObject.brand} - {carObject.model} ({carObject.topSpeed})</div>
  }

  return (
    <div>
      <h1>Hello world</h1>
      {
        <div>
          {
            isHomePage ? 
            <div>Home Page</div> : 
            <div>Landing Page</div>
          }
        </div>
      }  

      <button onClick={changePage}>Click</button>

      <hr />
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
      <button disabled={value.length <3}>Submit</button>
      {value.length <3 && <p>Min 3 char!</p>}

    {cars.map((transformToDiv)=>)}
    </div>
  );
  
}

export default App;
