import { useState } from 'react'
import TodoAddItems from './TodoAddItems'


function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <TodoAddItems />
    </section>
  )
}

export default App
