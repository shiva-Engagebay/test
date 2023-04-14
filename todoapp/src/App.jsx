import { useState } from 'react'
import TodoAddItems from './TodoAddItems'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='todo-app'>
      <TodoAddItems />
    </section>
  )
}

export default App
