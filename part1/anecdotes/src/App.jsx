import { useState } from 'react'


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function maxIndex(arr) {
  let maxIndex = 0
  for (let i =  1; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i
    }
  }
  return maxIndex
} 


const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
 
  const initVotes = Array(anecdotes.length).fill(0)

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(initVotes)
  const [top, setTop] = useState(null)
  

  const randomDote = () => setSelected(getRandomInt(anecdotes.length))
  const voteDote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1 
    console.log('Vote Matrix' , newVotes)
    setVotes(newVotes)
    setTop(maxIndex(newVotes))
    console.log('Top',top)
  }


  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <Button onClick = {randomDote}  text="New Anecdote" /> 
      <Button onClick = {voteDote} text="Updoot" /> 
      <p>{votes[selected]} Votes for this 'Dote</p>
      <h1>The Most Voted 'Dote</h1>
      <p>{anecdotes[top]}</p>
    </div>
  )
}

export default App