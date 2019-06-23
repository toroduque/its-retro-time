import React, { useState } from 'react'
import { postMessage } from 'firebaseApi'
import { GRAY } from 'constants/colors'
import Modal from 'components/Modal'
import Button from 'components/Button'
import Icon from 'components/Icon'
import TextArea from 'components/forms/TextArea'
import * as styled from './styled'

const AddMessageModal = ({title, type, toggleModal }) => {
    const [ message, setMessage ] = useState('')

    const handleSetMessage = e => setMessage(e.target.value)

    const handlePostMessage = async () => {
        const body = {
            user: 'Daniel',
            roomId: '/rooms/abcd',
            state: 'unread',
            type: 'Continue',
            creationTime: new Date(),
            message
        }

        await postMessage(body)
        toggleModal()
    }

    return (
        <Modal>
            <styled.Overlay>
                <styled.AddMessageWrapper>
                    <styled.TitleWrapper>
                        <h2>{title}</h2>
                        <Button icon text onClick={toggleModal}>
                            <Icon  glyph="close" size="14" color={GRAY} />
                        </Button>
                    </styled.TitleWrapper>
                    <TextArea 
                        rows="6" 
                        value={message} 
                        onChange={handleSetMessage}
                        placeholder="Keep up the good work..."
                    />
                    <styled.ButtonsWrapper>
                        <Button text onClick={toggleModal}>Cancel</Button>
                        <Button onClick={handlePostMessage}>Post</Button>
                    </styled.ButtonsWrapper>
                </styled.AddMessageWrapper>
            </styled.Overlay>
        </Modal>
    )
}



export default AddMessageModal