import { useState } from 'react'


const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticsLine = ({ stat, value, ispct= false }) => {
  if (ispct === false) {
  return(
    <tr><td>{stat}:</td> <td>{value}</td></tr>
  )
  }

  return (
    <tr><td>{stat}:</td> <td>{value}%</td></tr>
  )
}


const Statistics = (props) => { 
  if (props.allClicks === 0) {
    return(
      <div>
      <h1>Statistics</h1>
      <p>No Feedback Given</p>
      </div>
    )

  }

  return(
    <div>
    <h1>Statistics</h1>
    <table>
    <StatisticsLine stat = "Good Count" value = {props.good} /> 
    <StatisticsLine stat = "Neutral Count" value = {props.neutral} />
    <StatisticsLine stat = "Bad Count" value = {props.bad} />
    <StatisticsLine stat = "Total Clicks" value = {props.allClicks} />
    <StatisticsLine stat = "Average Score" value = {(props.good*1 + props.bad*-1)/props.allClicks} />
    <StatisticsLine stat = "Percent Positive" value = {(props.good/props.allClicks)} ispct = {true} />
    </table>
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
      <Statistics 
      good = {good}
      neutral = {neutral}
      bad = {bad}
      allClicks = {allClicks}
      />
    </div>
  )
}

export default App