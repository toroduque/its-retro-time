import React from 'react'
import Button from 'components/Button'
import Icon from 'components/Icon'
import * as styled from './styled'

const EmojiMenu = ({selectEmoji}) => {
    return (
        <styled.AddEmojiButtonWrapper>
            <Button icon text>
                <Icon glyph="face" size="14" color="lightgray"/>
            </Button>
            <styled.EmojiMenuWrapper>
                <styled.EmojiWrapper icon text onClick={() => selectEmoji('👍')}> 👍</styled.EmojiWrapper>
                <styled.EmojiWrapper icon text onClick={() => selectEmoji('😀')}> 😀</styled.EmojiWrapper>
                <styled.EmojiWrapper icon text onClick={() => selectEmoji('🐙')}> 🐙</styled.EmojiWrapper>
            </styled.EmojiMenuWrapper>
        </styled.AddEmojiButtonWrapper>
    )
}

export default EmojiMenu

