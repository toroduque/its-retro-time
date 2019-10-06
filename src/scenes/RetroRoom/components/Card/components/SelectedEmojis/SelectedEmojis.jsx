import React from 'react'
import * as styled from './styled'

const SelectedEmojis = ({reactions}) => {
    const emojisMap = {
        LIKE : '👍',
        LOVE : '💙',
        SMILE : '😀',
        OCTOPUS : '🐙'
    }    

    return (
        <styled.SelectedEmojisWrapper>
            { Object.keys(reactions).map(reaction => {
                if (reactions[reaction].length) {
                    return <span>{emojisMap[reaction]}</span>
                }
            })
            }
        </styled.SelectedEmojisWrapper>
    )
}

export default SelectedEmojis