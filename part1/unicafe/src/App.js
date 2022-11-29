import { useState } from "react"

const History = (props) => {
    if(props.allClicks.length === 0){
        return (
            <div>
                the app is used by pressing the button
            </div>
        )
    }
    return (
        <div>
            button press history : {props.allClicks.join(' ')}
        </div>
    )
}

const App = () => {

    const [clicks, setClicks] = useState({left:0 , right:0})
    const [allClicks, setAll] = useState([])

    const leftClick = () => setClicks({...clicks, left: clicks.left + 1})
    const rightClick = () => setClicks({...clicks, right: clicks.right +1})
    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        leftClick()
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        rightClick()
    }


    return (
        <div>
            {clicks.left}
            <button onClick={handleLeftClick}>
                left
            </button>

            {clicks.right}
            <button onClick={handleRightClick}>
                right
            </button>
            <History allClicks={allClicks} />
        </div>
    )
}

export default App