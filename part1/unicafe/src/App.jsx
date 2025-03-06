import { useState } from 'react'


const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = () => { 
  return(
    <div>
    <h1>Statistics</h1>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>All: {allClicks}</p>
    <p>Average: {(good*1 + bad*-1)/allClicks}</p>
    <p>Positive: {(good/allClicks)*100}%</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)


const goodClick = () => {
  console.log('Good button clicked, current value:', good)
  setGood(good + 1)
  setAll (allClicks +1)
}

const neutralClick = () => {
  setNeutral(neutral + 1)
  setAll (allClicks +1)
}

const badClick = () => {
  setBad(bad + 1)
  setAll (allClicks +1)
}



  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick = {goodClick} text="Good" />
      <Button onClick = {neutralClick} text="Neutral" />
      <Button onClick = {badClick} text="Bad" />
      <Statistics />
    </div>
  )
}

export default App