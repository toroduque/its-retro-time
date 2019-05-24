import React, { useState, useEffect } from 'react'
import openSocket from 'socket.io-client'
const socket = openSocket('http://localhost:3030');

const App = () => {
    const [ things, setThings ] = useState([])
    const [ currentThing, setCurrentThing ] = useState("")

    useEffect(() => {
        socket.on('things', setThings)
    });

    const addCurrentThings = e => {
        const newThing = e.target.value
        setCurrentThing(newThing)
    }

    const addToThings = () => {
        const newThings = [...things, currentThing]
        socket.emit('things', newThings)

        setThings(newThings)
        setCurrentThing("")
    }

    return (
        <div>
            <div>
                <input type="text" onChange={addCurrentThings} value={currentThing}></input>
                <button onClick={addToThings} >Add thing</button>
            </div>

            Learning Websockets
            
            <ul>
                { things && things.map(x => <li>{x}</li>) }
            </ul>
            
        </div>
    )
}

export default App