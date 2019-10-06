import React from 'react'
import { LIKE, LOVE, SMILE, OCTOPUS } from 'constants/reactions'
import * as styled from './styled'

const SelectedEmojis = ({reactions}) => {
    const emojisMap = {
        [LIKE] : '👍',
        [LOVE] : '💙',
        [SMILE] : '😀',
        [OCTOPUS] : '🐙'
    }   

    console.log('reactions', reactions)

    return (
        <styled.SelectedEmojisWrapper>
            { 
                Object.keys(reactions).map(reaction => {
                    if (reactions[reaction].length) {
                        return <span>{emojisMap[reaction]}</span>
                    }
                })
            }
        </styled.SelectedEmojisWrapper>
    )
}

export default SelectedEmojis