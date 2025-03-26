import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter(counter + 1)
  }

  useEffect(() => {
    document.body.onclick = () => {
      console.log(counter)
    }
  }, [counter]);

  return (
    <>
      <p>counter value: {counter}</p>
      <button onClick={handleClick}>click me</button>
    </>
  )
}

export default App
