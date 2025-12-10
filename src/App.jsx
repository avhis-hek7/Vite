import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async () => {
    // axios.post('https://picsum.photos/v2/list?page=2&limit=100',{username:'sarthak',password:'sarthakishere'})
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}`)
    setUserData(response.data)
  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h3 className='text-gray-black text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading</h3>
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
        <a href={elem.url} target='_blnak'>

        <div className='h-40 w-44  overflow-hidden bg-white rounded-xl'>
          <img className='h-full w-full object-cover ' src={elem.download_url} alt="" />
        </div>
        <h2 className='font-bold text-1.5xl'>{elem.author}</h2>
        </a>
      </div>

    })
  }
  return (
    <div className='bg-black h-screen text-white'>
      <h1  className='fixed text-6xl'>{index}</h1>
     
      <div className='flex flex-wrap gap-4'>
        {printUserData}

      </div>
      <div className='flex justify-center gap-6items-center p-4'>
        <button className='bg-amber-400 text-black rounded px-4 py-2 font-semibold' onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }

        }}>Prev</button>
        <h4>Page{index}</h4>
        <button className='bg-amber-400 text-black rounded px-4 py-2 font-semibold' onClick={()=>{
          setIndex(index+1)
          setUserData([])
          

          
        }}>Next</button>
      </div>
    </div>
  )
}

export default App


