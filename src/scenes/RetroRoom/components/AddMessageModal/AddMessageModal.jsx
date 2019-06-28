import React, { useState, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import { firestore } from '../../../../firebase'
import { postMessage } from 'firebaseApi'
import { RoomContext } from 'contexts'
import { GRAY } from 'constants/colors'
import Modal from 'components/Modal'
import Button from 'components/Button'
import Icon from 'components/Icon'
import TextArea from 'components/forms/TextArea'
import * as styled from './styled'

const AddMessageModal = ({title = "Good", match }) => {
    const [ message, setMessage ] = useState('')
    const roomContext = useContext(RoomContext)
    const { id } = match.params

    const handleSetMessage = e => setMessage(e.target.value)

    const handlePostMessage = async () => {
        const body = {
            user: 'Daniel',
            roomRef: firestore.doc(`rooms/${id}`),
            state: 'unread',
            type: 'Continue',
            creationTime: new Date(),
            message
        }

        await postMessage(body)
        hideAddModal()
    }

    const hideAddModal = () => {
        roomContext.dispatch({type: 'HIDE_ADD_MODAL'})
    }

    return (
        <Modal>
            <styled.AddMessageWrapper>
                <styled.TitleWrapper>
                    <h2>{title}</h2>
                    <Button icon text onClick={hideAddModal}>
                        <Icon  glyph="close" size="14" color={GRAY} />
                    </Button>
                </styled.TitleWrapper>
                <TextArea 
                    rows="8" 
                    value={message} 
                    onChange={handleSetMessage}
                    placeholder="Keep up the good work..."
                />
                <styled.ButtonsWrapper>
                    <Button text onClick={hideAddModal}>Cancel</Button>
                    <Button onClick={handlePostMessage}>Post</Button>
                </styled.ButtonsWrapper>
            </styled.AddMessageWrapper>
        </Modal>
    )
}



export default withRouter(AddMessageModal)