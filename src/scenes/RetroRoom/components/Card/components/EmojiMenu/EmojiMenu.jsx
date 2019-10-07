import React, { useContext } from 'react'
import { updateReactions } from 'firebaseApi'
import { RoomContext } from 'contexts'
import { LIKE, LOVE, SMILE, OCTOPUS } from 'constants/reactions'
import Button from 'components/Button'
import Icon from 'components/Icon'
import * as styled from './styled'


const EmojiMenu = ({messageId}) => {
    const roomContext = useContext(RoomContext)
    const { uid, displayName } = roomContext.state.currentUser

    return (
        <styled.AddEmojiButtonWrapper>
            <Button icon text>
                <Icon glyph="face" size="14" color="lightgray"/>
            </Button>
            <styled.EmojiMenuWrapper>
                <styled.EmojiWrapper icon text onClick={() => updateReactions(messageId, uid, displayName, LIKE)}> 👍</styled.EmojiWrapper>
                <styled.EmojiWrapper icon text onClick={() => updateReactions(messageId, uid, displayName, LOVE)}> 💙</styled.EmojiWrapper>
                <styled.EmojiWrapper icon text onClick={() => updateReactions(messageId, uid, displayName, SMILE)}> 😀</styled.EmojiWrapper>
                <styled.EmojiWrapper icon text onClick={() => updateReactions(messageId, uid, displayName, OCTOPUS)}> 🐙</styled.EmojiWrapper>
            </styled.EmojiMenuWrapper>
        </styled.AddEmojiButtonWrapper>
    )
}

export default EmojiMenu

