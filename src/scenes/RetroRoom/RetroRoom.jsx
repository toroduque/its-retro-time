import React, { Fragment, useContext, useEffect } from 'react'
import { subscribeMessages } from 'firebaseApi';
import { RoomContext } from 'contexts'
import { FIRST, SECOND, THIRD } from 'constants/column'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Sidebar from 'scenes/RetroRoom/components/Sidebar'
import Column from 'scenes/RetroRoom/components/Column'
import AddMessageModal from 'scenes/RetroRoom/components/AddMessageModal'
import EditMessageModal from 'scenes/RetroRoom/components/EditMessageModal'
import * as styled from './styled'

const RetroRoom = ({match}) => {
    const roomContext = useContext(RoomContext)
    const { messages, showAddModal, showEditModal } = roomContext.state
    const { id } = match.params
    let unsubscribe = null

    useEffect(() => {
        subscribeMessages(id, setMessages).then(response => unsubscribe = response)        
        return function cleanUp() { unsubscribe() }
    }, [])

    const setMessages = messages => {
        roomContext.dispatch({
            type: 'SET_MESSAGES',
            payload: messages
        })
    }

    return (
        <Fragment>
            <styled.HeaderWrapper>
                <Header />
            </styled.HeaderWrapper>
            <styled.RoomWrapper>
                <Sidebar />
                <styled.ColumnsWrapper>
                    <Column title="Good" position={FIRST} cards={messages} />
                    <Column title="Not so good" position={SECOND} cards={messages} />
                    <Column title="To improve" position={THIRD} cards={messages} />
                </styled.ColumnsWrapper>
            </styled.RoomWrapper>
            <Footer />
            { showAddModal && <AddMessageModal /> }
            { showEditModal && <EditMessageModal /> }
            { (showAddModal || showEditModal) && <styled.Overlay /> }
        </Fragment>
    )
}

export default RetroRoom