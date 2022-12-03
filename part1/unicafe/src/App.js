import { useState } from 'react'

const Header = ({tittle}) => <p>{tittle}</p>
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const Statistics = (props) => {

    const average = () => (props.good + props.neutral + props.bad)/3
    const all = () => (props.good + props.neutral + props.bad)
    const positive = () => ((props.good/all())*100.00).toFixed(2) + '%'
    
    if(all() === 0){
        return (
            <div>
                No feedback given!
            </div>
        )
    }
    return (
        <div>
        <table>
        <tbody>
        <tr><th>Statistics</th></tr>  
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={all()}/>
        <StatisticLine text="average" value={average()} />
        <StatisticLine text="positive" value={positive()} />
        </tbody>
        </table>
        </div>
    )
}

const StatisticLine = (props) => <tr><td>{props.text}</td><td>{props.value}</td></tr>



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good+1)
  const increaseNeutral = () => setNeutral(neutral+1)
  const increaseBad = () => setBad(bad+1)

  const tittle = 'Give Feedback'

  return (
    <div>
        <Header tittle={tittle} />
        <Button onClick={increaseGood} text='Good'/>
        <Button onClick={increaseNeutral} text='Neutral'/>
        <Button onClick={increaseBad} text='Bad'/>
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App