import React, { useContext } from 'react'
import { RoomContext } from 'contexts'
import * as styled from './styled'
import SidebarSection from 'scenes/RetroRoom/components/SidebarSection';
import UsersList from 'scenes/RetroRoom/components/UsersList';

const Sidebar = () => {
    const roomContext = useContext(RoomContext)
    const { isShowingReviewBoard } = roomContext.state
    
    const showReviewBoard = () => {
        roomContext.dispatch({ type: 'SHOW_REVIEW_BOARD' })
    }

    return (
        <styled.SidebarWrapper>
            <SidebarSection title="Mode" icon="mode">
                <styled.ModeButton 
                    hollow={!isShowingReviewBoard}
                    onClick={showReviewBoard}
                >
                    Review
                </styled.ModeButton>
        </SidebarSection>
            <SidebarSection title="Participants" icon="users">
                <UsersList />
            </SidebarSection>
        </styled.SidebarWrapper>
    )
}

export default Sidebar