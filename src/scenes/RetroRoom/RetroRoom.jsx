import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Sidebar from 'scenes/RetroRoom/components/Sidebar'
import * as styled from './styled'

const mockUsers = [
    { name: 'John' },
    { name: 'Sansa' },
    { name: 'Rob' },
    { name: 'Bran' },
]

const RetroRoom = () => (
    <div>
        <styled.HeaderWrapper>
            <Header />
        </styled.HeaderWrapper>
        <styled.RoomWrapper>
            <Sidebar users={mockUsers} />
        </styled.RoomWrapper>
        <Footer />
    </div>
)

export default RetroRoom