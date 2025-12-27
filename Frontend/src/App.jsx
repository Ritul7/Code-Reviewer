import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <div className="top">Code-Reviewer</div>
        <div className="bottom">
          <div className="left">
            <div className="code"></div>
            <div className="review-btn">Review</div>
          </div>
          <div className="right"></div>
        </div>
        
      </main>
    </>
  )
}

export default App
