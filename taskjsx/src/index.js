import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
const factorial = (num) => {
  for (var fact = 1; num > 1; num--) {
    fact = fact * num
  }
  return fact;
}
const ele = (<h1>{factorial(6)}</h1>)
console.log(ele)

root.render(ele)

reportWebVitals()
