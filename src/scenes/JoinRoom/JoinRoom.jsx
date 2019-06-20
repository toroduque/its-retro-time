import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from 'components/Header'
import Label from 'components/forms/Label'
import Input from 'components/forms/Input'
import Button from 'components/Button'
import Footer from 'components/Footer'
import * as styled from './styled'

const JoinRoom = () => { 
    const [ name, setName ] = useState('')
    const [ roomId, setRoomId ] = useState('')

    const handleSetName = e => setName(e.target.value)
    const handleSetRoomId = e => setRoomId(e.target.value)

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
                            <Link to="/room/1">
                                <Button>Join</Button>
                            </Link>
                        </styled.ButtonsWrapper>
                    </form>
                </styled.FormWrapper>
            </styled.Container>
            <Footer />
        </styled.JoinRoomWrapper>
    )
}

export default JoinRoom