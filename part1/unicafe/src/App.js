import { useState } from "react"

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
            <p>{allClicks.join(' ')}</p>
        </div>
    )
}

export default App