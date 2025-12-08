import { useState } from "react"



const App = () => {
const [a, seta] = useState(20);
const [username, setusername] = useState('Avhishek')
const [users, setusers] = useState([10,20,30,40])



function changeNum(){
    seta(30)
    setusername('Arjun')
    setusers([50,60,70,80])
}
    


  return (
    <div>
      <h1>Value of a is {a} <br /> {users} <br />Value of user name is {username}</h1>
      <button onClick={changeNum}>Click</button>

    </div>
  )

}

export default App
