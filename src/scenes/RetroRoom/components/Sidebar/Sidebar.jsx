import React, { useState } from 'react'
import Button from 'components/Button'
import * as styled from './styled'
import SidebarSection from 'scenes/RetroRoom/components/SidebarSection';
import UsersList from 'scenes/RetroRoom/components/UsersList';

const Sidebar = ({users}) => {
    const [ activeMode, setActiveMode ] = useState('entry')

    return (
        <styled.SidebarWrapper>
            <SidebarSection title="Mode" icon="github">
                <div style={{display: 'flex'}}>
                    <Button 
                        hollow={activeMode !== 'entry'}
                        onClick={() => setActiveMode('entry')}
                    >
                        Entry
                    </Button>
                    <Button 
                        hollow={activeMode !== 'review'}
                        onClick={() => setActiveMode('review')}
                    >
                        Review
                    </Button>
                </div>
            </SidebarSection>
            <SidebarSection title="Participants" icon="github">
                <UsersList users={users}/>
            </SidebarSection>
        </styled.SidebarWrapper>
    )
}

export default Sidebar