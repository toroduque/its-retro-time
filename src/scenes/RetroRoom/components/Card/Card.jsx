import React, { useContext, useState } from 'react'
import { getMessage } from 'firebaseApi'
import { RoomContext } from 'contexts'
import { truncateString } from 'utilities'
import Button from 'components/Button';
import Icon from 'components/Icon';
import EmojiMenu from './components/EmojiMenu'
import * as styled from './styled'

const Card = ({ id, user, userId, message}) => {
    const roomContext = useContext(RoomContext)
    const { uid } = roomContext.state.currentUser
    const isCurrentUserMessage = userId === uid

    const [ selectedEmoji, setSelectedEmoji ] = useState('')

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
                        <Icon glyph="pencil" size="14" color="lightgray"/>
                    </Button>
                )}
            </styled.MessageWrapper>
            <div>{selectedEmoji}</div>
            <styled.BottomSectionWrapper>
                <h5>By {user}</h5>
                <EmojiMenu selectEmoji={setSelectedEmoji} />
            </styled.BottomSectionWrapper>
        </styled.CardWrapper>
    )
}

export default Card