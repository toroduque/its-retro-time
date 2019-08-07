import React, { Fragment, Suspense, lazy, useContext, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { subscribeMessages, subscribeAuth } from 'firebaseApi'
import { RoomContext } from 'contexts'
import { FIRST, SECOND, THIRD } from 'constants/column'
import { DESKTOP_QUERY, MOBILE_QUERY } from 'constants/responsive'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Overlay from 'components/Overlay'
import Sidebar from 'scenes/RetroRoom/components/Sidebar'
import MobileMenu from 'scenes/RetroRoom/components/MobileMenu'
import Column from 'scenes/RetroRoom/components/Column'
import * as styled from './styled'

const AddMessageModal = lazy(() => import(
    /* webpackChunkName: "AddMessageModal" */
    /* webpackPreload: true */
    '../RetroRoom/components/AddMessageModal'));

const EditMessageModal = lazy(() => import(
    /* webpackChunkName: "EditMessageModal" */
    /* webpackPreload: true */ 
    '../RetroRoom/components/EditMessageModal'));

const ReviewBoard = lazy(() => import(
    /* webpackChunkName: "ReviewBoard" */
    /* webpackPreload: true */ 
    '../ReviewBoard'));


const RetroRoom = ({ history, match }) => {
    const roomContext = useContext(RoomContext)
    const { messages, showAddModal, showEditModal, isShowingReviewBoard, currentUser, columnsName } = roomContext.state
    const { id } = match.params
    let unsubscribeFromMessages = null
    let unsubscribeFromAuth = null

    useEffect(() => {
        subscribeMessages(id, setMessages).then(response => unsubscribeFromMessages = response)
        subscribeAuth(setCurrentUser).then(response => unsubscribeFromAuth = response)

        return function cleanUp() {
                if (unsubscribeFromMessages && unsubscribeFromAuth) {
                    unsubscribeFromMessages()
                    unsubscribeFromAuth() 
                }
            }
    }, [])

    useEffect(() => {
        if (currentUser === null) {
            history.push(`/join-room/${id}`)
        }
    }, [currentUser])

    const isDesktop = useMediaQuery(DESKTOP_QUERY)
    const isMobile = useMediaQuery(MOBILE_QUERY)

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
                <Header showShareButton />
            </styled.HeaderWrapper>
                { isMobile && <MobileMenu />}
            <styled.RoomWrapper>
                { isDesktop && <Sidebar /> }
                <styled.ColumnsWrapper>
                    <Column title={columnsName && columnsName.FIRST} position={FIRST} cards={messages} />
                    <Column title={columnsName && columnsName.SECOND} position={SECOND} cards={messages} />
                    <Column title={columnsName && columnsName.THIRD} position={THIRD} cards={messages} />
                </styled.ColumnsWrapper>
            </styled.RoomWrapper>
            <Footer />
            <Suspense fallback={<div>Loading...</div>}>
                { showAddModal && <AddMessageModal /> }
                { showEditModal && <EditMessageModal /> }
                { isShowingReviewBoard && <ReviewBoard />}
                { (showAddModal || showEditModal || isShowingReviewBoard) && <Overlay /> }
            </Suspense>
        </Fragment>
    )
}

export default RetroRoom