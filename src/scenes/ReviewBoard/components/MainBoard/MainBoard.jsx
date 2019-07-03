import React from 'react'
import Button from 'components/Button'
import * as styled from './styled'

const MainBoard = () => {
    return (
        <styled.MainBoardWrapper>
            <styled.NavigationWrapper>
                <Button text icon>Previous</Button>
                <Button text icon>Next</Button>
            </styled.NavigationWrapper>
            <styled.ContentWrapper>
                <styled.Title>Good</styled.Title>
                <styled.Message>This is a very cool message that I want to it to be displayed in the review board</styled.Message>
                <styled.Author>by Ryan</styled.Author>
            </styled.ContentWrapper>
        </styled.MainBoardWrapper>
    )
}

export default MainBoard