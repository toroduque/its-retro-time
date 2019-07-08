import React, { useState, useEffect, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import { getRoom, addUserToRoom, signUp } from 'firebaseApi'
import { RoomContext } from 'contexts'
import Header from 'components/Header'
import Label from 'components/forms/Label'
import Input from 'components/forms/Input'
import Button from 'components/Button'
import Footer from 'components/Footer'
import * as styled from './styled'

const JoinRoom = ({history, match}) => { 
    const roomContext = useContext(RoomContext)
    const [ name, setName ] = useState('')
    const [ roomId, setRoomId ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        const { id } = match.params
        if (id) setRoomId(id)
    }, [])

    const handleSetName = e => setName(e.target.value)
    const handleSetRoomId = e => setRoomId(e.target.value)
    const redirectHome = () => history.push('/')

    const handleJoinRoom = async e => {
        e.preventDefault()

        // TODO: Add validations
        if (!roomId || !name) return

        setIsLoading(true)
        const room = await getRoom(roomId)
        if (!room) return setIsLoading(false)

        const newUser = await signUp(name)
        await roomContext.dispatch({type: 'SET_CURRENT_USER', payload: newUser})
        await addUserToRoom(roomId, name)
        history.push(`/room/${roomId}`)
    }

    return (
        <styled.JoinRoomWrapper>
            <Header />
            <styled.Container>
                <styled.FormWrapper>
                    <form onSubmit={e => handleJoinRoom(e) }>
                        <h1>Join room</h1>
                        <Label>Name</Label>
                        <Input 
                            value={name} 
                            onChange={handleSetName}
                            placeholder="John Smith"
                            name="username"
                            required
                        />
                        <Label>Room Id</Label>
                        <Input 
                            value={roomId} 
                            onChange={handleSetRoomId}
                            placeholder="12345"
                            name="roomId"
                            required
                        />
                        <styled.ButtonsWrapper>
                            <Button type="button" onClick={redirectHome} text>Cancel</Button>
                            <Button type="submit" isLoading={isLoading}>Join</Button>
                        </styled.ButtonsWrapper>
                    </form>
                </styled.FormWrapper>
            </styled.Container>
            <Footer />
        </styled.JoinRoomWrapper>
    )
}

export default withRouter(JoinRoom)