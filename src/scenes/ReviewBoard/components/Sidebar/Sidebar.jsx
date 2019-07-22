import React, { useEffect, useContext } from 'react'
import { RoomContext, ReviewBoardContext } from 'contexts'
import { FIRST, SECOND, THIRD } from 'constants/column'
import { countMessagesByType } from 'utilities'
import SidebarItem from '../SidebarItem'
import * as styled from './styled'

const Sidebar = () => {
    const reviewContext = useContext(ReviewBoardContext)
    const roomContext = useContext(RoomContext)
    const { selectedColumn } = reviewContext.state
    const { messages } = roomContext.state
    let count = countMessagesByType(messages)
    const { columnsName } = roomContext.state

    useEffect(() => {
        count = countMessagesByType(messages)
    }, [messages])

    const setSelectedColumn = (title, number) => {
        reviewContext.dispatch({ type: 'SET_SELECTED_COLUMN', payload: { title, number } })
        reviewContext.dispatch({ type: 'RESET_INDEX' })
    }

    return (
        <styled.SidebarWrapper>
            <SidebarItem 
                title={columnsName.FIRST}
                count={count.firstColumn} 
                onClick={setSelectedColumn}
                columnNumber={FIRST}
                isActive={selectedColumn.number === FIRST}
            />
            <SidebarItem 
                title={columnsName.SECOND}
                count={count.secondColumn}
                onClick={setSelectedColumn}
                columnNumber={SECOND}
                isActive={selectedColumn.number === SECOND}
            />
            <SidebarItem 
                title={columnsName.THIRD}
                count={count.thirdColumn} 
                onClick={setSelectedColumn}
                columnNumber={THIRD}
                isActive={selectedColumn.number === THIRD}/>
        </styled.SidebarWrapper>
    )
}

export default Sidebar