import React, { Fragment, useContext, useEffect } from 'react'
import { subscribeMessages, subscribeAuth } from 'firebaseApi'
import { RoomContext } from 'contexts'
import { FIRST, SECOND, THIRD } from 'constants/column'
import Header from 'components/Header'
import Footer from 'components/Footer'
import ReviewBoard from 'scenes/ReviewBoard'
import Sidebar from 'scenes/RetroRoom/components/Sidebar'
import Column from 'scenes/RetroRoom/components/Column'
import AddMessageModal from 'scenes/RetroRoom/components/AddMessageModal'
import EditMessageModal from 'scenes/RetroRoom/components/EditMessageModal'
import * as styled from './styled'

const RetroRoom = ({ match }) => {
    const roomContext = useContext(RoomContext)
    const { messages, showAddModal, showEditModal, isShowingReviewBoard } = roomContext.state
    const { id } = match.params
    let unsubscribeFromMessages = null
    let unsubscribeFromAuth = null

    useEffect(() => {
        subscribeMessages(id, setMessages).then(response => unsubscribeFromMessages = response)
        subscribeAuth(setCurrentUser).then(response => unsubscribeFromAuth = response) 

        return function cleanUp() { 
                unsubscribeFromMessages()
                unsubscribeFromAuth() 
            }
    }, [])

    const setMessages = messages => {
        roomContext.dispatch({
            type: 'SET_MESSAGES',
            payload: messages
        })
    }

    const setCurrentUser = user => {
        roomContext.dispatch({
            type: 'SET_CURRENT_USER',
            payload: user
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
            { isShowingReviewBoard && <ReviewBoard />}
            { (showAddModal || showEditModal || isShowingReviewBoard) && <styled.Overlay /> }
        </Fragment>
    )
}

export default RetroRoom