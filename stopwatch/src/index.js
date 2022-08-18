import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
const Stopwatch = ReactDOM.createRoot(document.getElementById('root1'))
const btns = ReactDOM.createRoot(document.getElementById('root2'))
var Hour = 0,
  Minutes = 0,
  Second = 0,
  miliseconds = 0
var flag = 0
const Stop = () => {
  clearInterval(stop)
}
const Start = () => {
  flag = 0
  stop = setInterval(StopWatch, 10)
}

const reset = () => {
  miliseconds = 0
  Second = 0
  Minutes = 0
  Hour = 0
  flag = 1
  //reset
}
const StopWatch = () => {
  Stopwatch.render(
    <div id="main-container">
      <div id="stopwatch">
        <h1>
          {Hour}:{Minutes}:{Second}:{miliseconds}
        </h1>
      </div>
      
    </div>,
  )
  if (flag === 1) {
    return
  }
  if (miliseconds < 99) {
    miliseconds++
  } else {
    miliseconds = 0
    if (Second < 59) {
      Second++
    } else {
      Second = 0
      if (Minutes < 59) {
        Minutes++
      } else {
        Minutes = 0
        if (Hour < 59) {
          Hour++
        }
      }
    }
  }
}
btns.render(
  <div id="stopwatchbtn">
    <button onClick={Start}>Start</button>
    <button onClick={Stop}>Stop</button>
    <button onClick={reset}>reset</button>
  </div>,
)

var stop

reportWebVitals()
