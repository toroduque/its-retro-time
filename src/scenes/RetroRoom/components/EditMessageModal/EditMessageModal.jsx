import React, { useState, useEffect } from 'react'
import { updateMessage } from 'firebaseApi'
import { GRAY } from 'constants/colors'
import Modal from 'components/Modal'
import Button from 'components/Button'
import Icon from 'components/Icon'
import TextArea from 'components/forms/TextArea'
import * as styled from './styled'

const EditMessageModal = ({title, id, message, type, toggleModal }) => {
    const [ currentMessage, setCurrentMessage ] = useState('')

    useEffect(() => {
        setCurrentMessage(message)
    }, [])

    const handleSetNewMessage = e => setCurrentMessage(e.target.value)

    const handleUpdateMessage = () => {
        updateMessage(id, currentMessage)
        toggleModal()
    }

    return (
        <Modal>
            <styled.Overlay>
                    <styled.EditMessageWrapper>
                        <styled.TitleWrapper>
                            <h2>{title}</h2>
                            <Button icon text onClick={toggleModal}>
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
                            <Button text onClick={toggleModal}>Cancel</Button>
                            <Button onClick={handleUpdateMessage}>Update</Button>
                        </styled.ButtonsWrapper>
                    </styled.EditMessageWrapper>
                </styled.Overlay>
        </Modal>
    )
}

export default EditMessageModal