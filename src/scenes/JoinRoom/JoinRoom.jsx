import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { addUserToRoom, signUp } from 'firebaseApi'
import Header from 'components/Header'
import Label from 'components/forms/Label'
import Input from 'components/forms/Input'
import Button from 'components/Button'
import Footer from 'components/Footer'
import * as styled from './styled'

const JoinRoom = ({history, match}) => { 
    const [ name, setName ] = useState('')
    const [ roomId, setRoomId ] = useState('')

    useEffect(() => {
        const { id } = match.params
        if (id) setRoomId(id)
    }, [])

    const handleSetName = e => setName(e.target.value)
    const handleSetRoomId = e => setRoomId(e.target.value)

    const handleJoinRoom = async e => {
        e.preventDefault()

        // TODO: Add validations
        if (!roomId || !name) {
            return
        }

        await signUp(name)
        await addUserToRoom(roomId, name)
        history.push(`room/${roomId}`)
    }

    return (
        <styled.JoinRoomWrapper>
            <Header />
            <styled.Container>
                <styled.FormWrapper>
                    <form>
                        <h1>Join room</h1>
                        <Label>Name</Label>
                        <Input 
                            value={name} 
                            onChange={handleSetName}
                            placeholder="John Smith"
                        />
                        <Label>Room Id</Label>
                        <Input 
                            value={roomId} 
                            onChange={handleSetRoomId}
                            placeholder="12345"
                        />
                
                        <styled.ButtonsWrapper>
                            <Link to="/" >
                                <Button text>Cancel</Button>
                            </Link>
                            <Button onClick={e => handleJoinRoom(e)}>Join</Button>
                        </styled.ButtonsWrapper>
                    </form>
                </styled.FormWrapper>
            </styled.Container>
            <Footer />
        </styled.JoinRoomWrapper>
    )
}

export default withRouter(JoinRoom)