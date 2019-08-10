import React, { useContext } from 'react'
import { getMessage } from 'firebaseApi'
import { RoomContext } from 'contexts'
import { truncateString } from 'utilities'
import Button from 'components/Button';
import Icon from 'components/Icon';
import * as styled from './styled'

const Card = ({ id, user, userId, message}) => {
    const roomContext = useContext(RoomContext)
    const { uid } = roomContext.state.currentUser
    const isCurrentUserMessage = userId === uid

    const showEditModal = () => roomContext.dispatch({type: 'SHOW_EDIT_MODAL'})
    const selectMessage = (message) => roomContext.dispatch({type: 'SELECT_MESSAGE', payload: message})

    const handleShowEditModal = async () => {
        if (isCurrentUserMessage) {
            const selectedMessage = await getMessage(id)
            await selectMessage(selectedMessage)
            showEditModal()
        }
    }

    return (
        <styled.CardWrapper >
            <styled.MessageWrapper>
                <span>{truncateString(message)}</span>
                { isCurrentUserMessage && (
                    <Button icon text onClick={handleShowEditModal}>
                        <Icon glyph="pencil" size="14"/>
                    </Button>
                )}
            </styled.MessageWrapper>
            <h5>By {user}</h5>
        </styled.CardWrapper>
    )
}

export default Card