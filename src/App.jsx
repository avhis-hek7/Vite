import React, { useState } from 'react'
import axios from 'axios';

const App = () => {

  const [data, setData] = useState([])


  // async  function getData(){
  //   const response =  await fetch('https://jsonplaceholder.typicode.com/todos')

 const getData =   async () =>{
  // const response = await fetch('https://jsonplaceholder.typicode.com/users')
  // const data =  await response.json()
  // console.log(data)

  // const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  // console.log(response.data);
  

  const response = await axios.get('https://picsum.photos/v2/list')
  // console.log(response.data);  
    
  setData(response.data)
  }
  
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem,idx){
          return <h3>{elem.author}, {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App
