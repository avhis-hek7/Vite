import React, { useEffect, useState } from 'react'


const App = () => {
  // const [num, setNum] = useState(0)
  // const [num2, setNum2] = useState(100)
  // useEffect(function(){
  //   console.log('use effect is running');

  // },[num])
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging(){
    console.log('A value changed');
    

  }

   function bChanging(){
    console.log('B value changed');
  }

  useEffect (function(){
   
    console.log('use Effect is running');
    
  },[a])
  return (
    <div>

      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button
      onClick={()=>{
        setA(a+1)
  
      }}
      >Change A</button>
      <button
         onClick={()=>{
        setB(b-1)
  
      }}
      >Change B</button>
      {/* <h1> Value of num1 is{num}</h1>
      <h1> Value of num2 is{num2}</h1>
      <button 
      // onClick={()=>{
      //   setNum(num+1)
        

      // }}
      // onDoubleClick={()=>{
      //   setNum2(num2+10)
      // }}
        

      onMouseEnter={()=>{
        setNum(num+1)
      }}
       onMouseLeave={()=>{
        setNum2(num2+10)

       }}


      >Click</button> */}
    </div>
  )
}

export default App

