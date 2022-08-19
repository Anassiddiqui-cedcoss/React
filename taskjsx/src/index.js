import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
var cities=["Lucknow","Agra","Kanpur","Gorakhpur","Rajasthan","Goa","Nepal","Begusarai","Buxar","Bihar Sharif"]
var sortedcity=cities.filter((item) => item.startsWith("B"))
console.log(sortedcity)
const element = (<ul>{sortedcity.map((item) => {return <li>{item}</li>})}</ul>);
  root.render(
    <div>
    <ul>
       {element}
     </ul>
  </div>
  )
  reportWebVitals()



