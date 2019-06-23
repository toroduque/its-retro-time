import React, { useState, useEffect, useContext } from 'react'
import { updateMessage } from 'firebaseApi'
import { RoomContext } from 'contexts'
import { GRAY } from 'constants/colors'
import Modal from 'components/Modal'
import Button from 'components/Button'
import Icon from 'components/Icon'
import TextArea from 'components/forms/TextArea'
import * as styled from './styled'

const EditMessageModal = () => {
    const [ currentMessage, setCurrentMessage ] = useState('')
    const roomContext = useContext(RoomContext)
    const { selectedMessage } = roomContext.state

    useEffect(() => {
        setCurrentMessage(selectedMessage.message)
    }, [])

    const handleSetNewMessage = e => setCurrentMessage(e.target.value)

    const handleUpdateMessage = () => {
        updateMessage(selectedMessage.id, currentMessage)
        hideEditModal()
    }

    const hideEditModal = () => {
        roomContext.dispatch({type: 'HIDE_EDIT_MODAL'})
    }

    return (
        <Modal>
            <styled.EditMessageWrapper>
                <styled.TitleWrapper>
                    <h2>EDIT</h2>
                    <Button icon text onClick={hideEditModal}>
                        <Icon  glyph="close" size="14" color={GRAY} />
                    </Button>
                </styled.TitleWrapper>
                <TextArea 
                    rows="6" 
                    value={currentMessage} 
                    onChange={handleSetNewMessage}
                    placeholder="Keep up the good work..."
                />
                <styled.ButtonsWrapper>
                    <Button text onClick={hideEditModal}>Cancel</Button>
                    <Button onClick={handleUpdateMessage}>Update</Button>
                </styled.ButtonsWrapper>
            </styled.EditMessageWrapper>
        </Modal>
    )
}

export default EditMessageModal