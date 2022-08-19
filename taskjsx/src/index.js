import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))

let i,j,array = [],count
const primenumber = () => {
  for (i = 1; i <= 100; i++) {
    count = 0
    for (j = 2; j < i; j++) {
      if (i % j === 0) {
        count = 1
      }
    }
    if (count === 0) {
      array.push(i)
    }
  }
}
primenumber()
const element = (
  <ul>{array.map((item) => {return <li>{item}</li>})}</ul>);
  root.render(element)
  reportWebVitals()



