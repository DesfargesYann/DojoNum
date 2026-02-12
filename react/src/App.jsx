import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quiz from './components/quiz.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p>Test</p>
    <Quiz/>
    </>
  )
}

export default App
