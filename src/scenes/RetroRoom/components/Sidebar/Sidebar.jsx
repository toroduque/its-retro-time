import React, { useState } from 'react'
import * as styled from './styled'
import SidebarSection from 'scenes/RetroRoom/components/SidebarSection';
import UsersList from 'scenes/RetroRoom/components/UsersList';

const Sidebar = () => {
    const [ activeMode, setActiveMode ] = useState('entry')

    return (
        <styled.SidebarWrapper>
            <SidebarSection title="Mode" icon="mode">
                <styled.ModeButtonsWrapper>
                    <styled.ModeButton 
                        hollow={activeMode !== 'entry'}
                        onClick={() => setActiveMode('entry')}
                    >
                        Entry
                    </styled.ModeButton>
                    <styled.ModeButton 
                        hollow={activeMode !== 'review'}
                        onClick={() => setActiveMode('review')}
                    >
                        Review
                    </styled.ModeButton>
                </styled.ModeButtonsWrapper>
            </SidebarSection>
            <SidebarSection title="Participants" icon="users">
                <UsersList />
            </SidebarSection>
        </styled.SidebarWrapper>
    )
}

export default Sidebar