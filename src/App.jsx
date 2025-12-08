import React, { useState } from 'react'

const App = () => {

const [num, setnum] = useState(0)

function increaseNum(){
    console.log('Increase');
    setnum(num+1)
    

}
function decreaseNum(){
    console.log('Decrease');
    setnum(num-1)
}

function jumpNum(){
    console.log('Decrease');
    setnum(num+5)
    

}


    return (
        <div>
            <h1>{num}</h1>
            <button onClick={increaseNum}>Increase</button>
            <button onClick={decreaseNum}>Decrease</button>
            <button onClick={jumpNum}>Jump by 5</button>
        </div>
    )
}

export default App
