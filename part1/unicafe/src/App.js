import { useState } from "react"

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Display = ({counter}) => <div>{counter}</div>


const App = () => {
    const [ counter , setcounter] = useState(0)

    const increaseByOne = () => setcounter(counter + 1)
    const setZero = () => setcounter(0)
    
    return (
        <div>
            <Display counter={counter}/>
            <Button onClick={increaseByOne} text="plus" />
            <Button onClick={setZero}  text='zero'/>
        </div>
)
}

export default App