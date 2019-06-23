import React, { Fragment, useState, useEffect } from 'react'
import { subscribeMessages } from 'firebaseApi';
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

const RetroRoom = () => {
    const [ messages, setMessages ] = useState([])
    let unsubscribe = null

    useEffect(() => {
        subscribeMessages(setMessages).then(response => unsubscribe = response)
        return function cleanUp() { unsubscribe() }
    }, [])

    return (
        <Fragment>
            <styled.HeaderWrapper>
                <Header />
            </styled.HeaderWrapper>
            <styled.RoomWrapper>
                <Sidebar users={mockUsers} />
                <styled.ColumnsWrapper>
                    <Column title="Good" cards={messages} />
                    <Column title="Not so good" cards={messages} />
                    <Column title="To improve" cards={messages} />
                </styled.ColumnsWrapper>
            </styled.RoomWrapper>
            <Footer />
        </Fragment>
    )
}

export default RetroRoom