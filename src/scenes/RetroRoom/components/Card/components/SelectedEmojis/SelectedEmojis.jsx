import React, { useContext } from 'react'
import { updateReactions } from 'firebaseApi'
import { RoomContext } from 'contexts'
import { LIKE, LOVE, SMILE, OCTOPUS } from 'constants/reactions'
import * as styled from './styled'

const SelectedEmojis = ({reactions, messageId}) => {
    const roomContext = useContext(RoomContext)
    const { uid, displayName } = roomContext.state.currentUser

    const emojisMap = {
        [LIKE] : '👍',
        [LOVE] : '💙',
        [SMILE] : '😀',
        [OCTOPUS] : '🐙'
    }   

    return (
        <styled.SelectedEmojisWrapper>
            { 
                reactions && Object.keys(reactions).map(reaction => {
                    if (reactions[reaction].length) {
                        return (
                            <styled.ReactionWrapper key={reaction} onClick={() => updateReactions(messageId, uid, displayName, reaction)}>
                                <styled.EmojiWrapper>{emojisMap[reaction]}</styled.EmojiWrapper>
                                <styled.ReactionCounter>{reactions[reaction].length}</styled.ReactionCounter>
                            </styled.ReactionWrapper>
                        )
                    }
                })
            }
        </styled.SelectedEmojisWrapper>
    )
}

export default SelectedEmojis