import React, { useState, useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { createRoom, getRoom, signUp } from 'firebaseApi'
import { RoomContext } from 'contexts'
import { FIRST, SECOND, THIRD } from 'constants/column'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Input from 'components/forms/Input'
import Label from 'components/forms/Label'
import Button from 'components/Button'
import * as styled from './styled'

const CreateRoom = ({history}) => {
    const [ name, setName ] = useState('')
    const [ team, seTeam ] = useState('')
    const [ company, setCompany ] = useState('')
    const roomContext = useContext(RoomContext)

    function handleName(e) {
        setName(e.target.value)
    }

    function handleTeam(e) {
        seTeam(e.target.value)
    }
    
    function handleOrganisation(e) {
        setCompany(e.target.value)
    }

    async function handleCreateRoom(e) {
        e.preventDefault()

        // TODO: Add validations
        if (!name) {
            return
        }

        const room = { 
            creationTime: new Date(), 
            users: [ name ],
            columnsName: {
                FIRST: 'Good',
                SECOND: 'Not so good',
                THIRD: 'To improve'
            }
        }

        const newRoom = await createRoom(room)
        const { users } = await getRoom(newRoom.id)
        signUp(name)
        roomContext.dispatch({type: 'SET_USERS', payload: users})

        history.push(`room/${newRoom.id}`)
    }

    return (
        <styled.CreateRoomWrapper>
            <Header />
            <styled.Container>
                <styled.FormWrapper>
                    <form onSubmit={e => handleCreateRoom(e)}>
                        <h1>Create new retro</h1>
                        <Label>Name</Label>
                        <Input 
                            value={name} 
                            onChange={handleName}
                            placeholder="John Smith"
                            required
                        />
                        <styled.HorizontalContainer>
                            <styled.Half>
                                <Label optional>Team</Label>
                                <Input 
                                    value={team} 
                                    onChange={handleTeam}
                                    placeholder="Mobile"
                                />
                            </ styled.Half> 

                            <styled.Half>
                                <Label optional>Company</Label>
                                <Input 
                                    value={company} 
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