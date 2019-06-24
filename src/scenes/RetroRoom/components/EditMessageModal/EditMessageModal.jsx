import React, { useState, useEffect, useContext } from 'react'
import { updateMessage, deleteMessage } from 'firebaseApi'
import { RoomContext } from 'contexts'
import { GRAY } from 'constants/colors'
import Modal from 'components/Modal'
import Button from 'components/Button'
import Icon from 'components/Icon'
import TextArea from 'components/forms/TextArea'
import InlineDelete from 'components/InlineDelete'
import * as styled from './styled'

const EditMessageModal = () => {
    const [ currentMessage, setCurrentMessage ] = useState('')
    const roomContext = useContext(RoomContext)
    const { selectedMessage } = roomContext.state

    useEffect(() => {
        setCurrentMessage(selectedMessage.message)
    }, [])

    const handleSetNewMessage = e => setCurrentMessage(e.target.value)

    const handleUpdateMessage = async () => {
        await updateMessage(selectedMessage.id, currentMessage)
        hideEditModal()
    }

    const handleDeleteMessage = async () => {
       await deleteMessage(selectedMessage.id)
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
                    rows="8" 
                    value={currentMessage} 
                    onChange={handleSetNewMessage}
                    placeholder="Keep up the good work..."
                />
                <styled.BottomWrapper >
                    <InlineDelete onDelete={handleDeleteMessage}/>
                    <styled.ButtonsWrapper>
                        <Button text onClick={hideEditModal}>Cancel</Button>
                        <Button onClick={handleUpdateMessage}>Update</Button>
                    </styled.ButtonsWrapper>
                </styled.BottomWrapper>
            </styled.EditMessageWrapper>
        </Modal>
    )
}

export default EditMessageModal