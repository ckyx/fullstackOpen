import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  
  // function for get a random int
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

  const randomInt =  getRandomInt(0,anecdotes.length)

 
  const nextAnecdotes = () => setSelected(randomInt)

  const voteArr = new Array(anecdotes.length).fill(0)
  const [voteResult, setResult] = useState(voteArr)

  const vote = () =>{
    let copy = [...voteResult]
    copy[selected] += 1
    setResult(copy)
  }

  // get the max vote value
  const maxVote = Math.max(...voteResult)

  // get the index of max vote value
  const maxVoteIndex = voteResult.indexOf(maxVote)

  // get the max vote anecdote from array
  const mostVoteAnecdote = anecdotes[maxVoteIndex]


  return (
    <div>
      <h1>Anecdotes of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {voteResult[selected]} votes</p>
      <Button onClick={nextAnecdotes} text={'next anecdote'} />
      <Button onClick={vote} text={'vote'} />
      <h1>Anecdotes with most votes</h1>
      <p>{mostVoteAnecdote}</p>
      <p>has {maxVote} votes</p>
    </div>
  )
}

export default App