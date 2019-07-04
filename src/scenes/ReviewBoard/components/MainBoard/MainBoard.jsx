import React, { useContext, useEffect } from 'react'
import { RoomContext, ReviewBoardContext } from 'contexts'
import { filterMessagesByColumnNumber } from 'utilities'
import Button from 'components/Button'
import * as styled from './styled'

const MainBoard = () => {
    const roomContext = useContext(RoomContext)
    const reviewContext = useContext(ReviewBoardContext)
    const { messages } = roomContext.state
    const { selectedColumn, index } = reviewContext.state

    let filteredMessages = filterMessagesByColumnNumber(messages, selectedColumn.number)

    useEffect(() => {
        filteredMessages = filterMessagesByColumnNumber(messages, selectedColumn.number)
    }, [messages])

    const nextMessage = async () => {
        if (index < (filteredMessages.length - 1)) {
            reviewContext.dispatch({type: 'INCREMENT_INDEX'})
        }
    }

    const prevMessage = () => {
        if (index > 0) {
            reviewContext.dispatch({type: 'DECREMENT_INDEX'})
        }
    }

    return (
        <styled.MainBoardWrapper>
            <styled.NavigationWrapper>
                <span>
                    { index !== 0 && (<Button text icon onClick={prevMessage}>Previous</Button> )}
                </span>
                <span>
                    { index < ( filteredMessages && filteredMessages.length - 1) && <Button text icon onClick={nextMessage}>Next</Button>}
                </span>
            </styled.NavigationWrapper>
            <styled.ContentWrapper>
                <styled.Title>{selectedColumn.title}</styled.Title>
                <styled.Message>{filteredMessages && filteredMessages[index].message}</styled.Message>
                <styled.Author>by {filteredMessages && filteredMessages[index].user}</styled.Author>
            </styled.ContentWrapper>
        </styled.MainBoardWrapper>
    )
}

export default MainBoard