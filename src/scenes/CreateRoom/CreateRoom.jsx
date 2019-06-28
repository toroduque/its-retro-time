import React, { useState, useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { createRoom, getRoom } from 'firebaseApi'
import { RoomContext } from 'contexts'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Input from 'components/forms/Input'
import Label from 'components/forms/Label'
import Button from 'components/Button'
import * as styled from './styled'

const CreateRoom = ({history}) => {
    const [ name, setName ] = useState('')
    const [ team, seTeam ] = useState('')
    const [ organisation, setOrganisation ] = useState('')
    const roomContext = useContext(RoomContext)
    

    function handleName(e) {
        setName(e.target.value)
    }

    function handleTeam(e) {
        seTeam(e.target.value)
    }
    
    function handleOrganisation(e) {
        setOrganisation(e.target.value)
    }

    async function handleCreateRoom() {
        e.preventDefault()

        // TODO: Add validations
        if (!name) {
            return
        }

        const room = { creationTime: new Date(), users: [ name ]}
        const newRoom = await createRoom(room)
        const { id, users } = await getRoom(newRoom.id)
        roomContext.dispatch({type: 'SET_ROOM_ID', payload: id})
        roomContext.dispatch({type: 'SET_USERS', payload: users})

        history.push(`room/${newRoom.id}`)
    }

    return (
        <styled.CreateRoomWrapper>
            <Header />
            <styled.Container>
                <styled.FormWrapper>
                    <form>
                        <h1>Create new retro</h1>
                        <Label>Name</Label>
                        <Input 
                            value={name} 
                            onChange={handleName}
                            placeholder="John Smith"
                        />
                        <styled.HorizontalContainer>
                            <styled.Half>
                                <Label optional>Team</Label>
                                <Input 
                                    value={team} 
                                    onChange={handleTeam}
                                    placeholder="Infrastructure"
                                />
                            </ styled.Half> 

                            <styled.Half>
                                <Label optional>Organisation</Label>
                                <Input 
                                    value={organisation} 
                                    onChange={handleOrganisation} 
                                    placeholder="Kneebook"
                                />
                            </ styled.Half>  
                        </styled.HorizontalContainer>
                        <styled.ButtonsWrapper>
                            <Link to="/">
                                <Button text>Cancel</Button>
                            </Link>
                            <Button onClick={e => handleCreateRoom(e)}>Create</Button>
                        </styled.ButtonsWrapper>
                    </form>
                </styled.FormWrapper>
            </styled.Container>
            <Footer />
        </styled.CreateRoomWrapper>
    )
}

export default withRouter(CreateRoom)