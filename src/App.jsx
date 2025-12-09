import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setdDetails] = useState('')

  const [task, setTask] = useState([])


  const submitHandle = (e) => {
    e.preventDefault()

    const copyTask = [...task];
    copyTask.push({ title, details })
    setTask(copyTask)


    setTitle('')
    setdDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1)
    setTask(copyTask)


  }


  return (
    <div className='h-screen bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandle(e)
      }} className='flex items-start p-10 flex-col gap-5'>

        {/*First input for Headings*/}
        <input type="text"
          placeholder='Enter Notes Heading'
          className='w-1/2 px-5 py-2 border-2 rounded '
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)

          }}

        />

        {/*Details Input*/}
        <textarea type="text"
          placeholder='Write details'
          className='w-1/2 px-5 py-2 h-20 border-2 rounded '
          value={details}
          onChange={(e) => {
            setdDetails(e.target.value)
          }}

        />
        <button className='bg-white text-black px-5 py-2 rounded'> Add Notes</button>

      </form>
      <div className='flex flex-wrap gap-10 p-10'>
        <h1>Your Notes</h1>
        {task.map(function (elem, idx) {
          return <div key={idx} className='h-52 w-40 rounded-xl p-4 text-black bg-white'>
            <div>
              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p>{elem.details}</p>
            </div>
            <button onClick={() => {
              deleteNote(idx)
            }} className='w-full bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
          </div>

        })}
      </div>
    </div>
  )
}

export default App
