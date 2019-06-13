import React, { useState } from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Input from 'components/forms/Input'
import Label from 'components/forms/Label'
import Button from 'components/Button'
import * as styled from './styled'

const CreateRoom = () => {
    const [ name, setName ] = useState('')
    const [ team, seTeam ] = useState('')
    const [ organisation, setOrganisation ] = useState('')

    function handleName(e) {
        setName(e.target.value)
    }

    function handleTeam(e) {
        seTeam(e.target.value)
    }
    
    function handleOrganisation(e) {
        setOrganisation(e.target.value)
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
                            <Button hollow>Cancel</Button>
                            <Button>Create</Button>
                        </styled.ButtonsWrapper>
                    </form>
                </styled.FormWrapper>
            </styled.Container>
            <Footer />
        </styled.CreateRoomWrapper>
    )
}

export default CreateRoom