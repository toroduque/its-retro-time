import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Sidebar from 'scenes/RetroRoom/components/Sidebar'
import Column from 'scenes/RetroRoom/components/Column'
import * as styled from './styled'

const mockUsers = [
    { name: 'John' },
    { name: 'Sansa' },
    { name: 'Rob' },
    { name: 'Bran' },
]

const mockCards = [
    { user: 'John', message: 'Keep it up man!'},
    { user: 'Sansa', message: 'Please keep buying cheese'},
    { user: 'Rob', message: 'I liked the new curtain'},
]

const RetroRoom = () => (
    <div>
        <styled.HeaderWrapper>
            <Header />
        </styled.HeaderWrapper>
        <styled.RoomWrapper>
            <Sidebar users={mockUsers} />
            <styled.ColumnsWrapper>
                <Column title="Good" cards={mockCards} />
                <Column title="Not so good" cards={mockCards} />
                <Column title="To improve" cards={mockCards} />
            </styled.ColumnsWrapper>
        </styled.RoomWrapper>
        <Footer />
    </div>
)

export default RetroRoom