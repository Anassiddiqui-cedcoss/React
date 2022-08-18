import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))

function Tick() {
  root.render(
    <div className="App">
      <div className="clock">
        <h1>My Clock</h1>
        <h1>{new Date().toLocaleTimeString()}</h1>
      </div>
    </div>,
  )

  return 'tListener'
}
setInterval(() => {
  Tick()
}, 1000)
reportWebVitals()


