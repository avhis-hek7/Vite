import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Abishek' age={21} img='https://images.unsplash.com/photo-1764767168158-9f05d34e3881?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTh8fHxlbnwwfHx8fHw%3D' />
      <Card user='Hari' age={22} img='https://plus.unsplash.com/premium_photo-1764536654639-8c69698fabf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTd8fHxlbnwwfHx8fHw%3D' />
      <Card user='Bishal' age={23} img='https://images.unsplash.com/photo-1764708844823-00d2188dafd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNTJ8fHxlbnwwfHx8fHw%3D' />
    </div>
  )
}

export default App

