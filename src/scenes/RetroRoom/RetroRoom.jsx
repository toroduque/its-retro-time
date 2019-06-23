import React, { useReducer, useEffect, createContext } from 'react'
import { subscribeMessages } from 'firebaseApi';
import { RoomContext } from 'contexts'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Sidebar from 'scenes/RetroRoom/components/Sidebar'
import Column from 'scenes/RetroRoom/components/Column'
import AddMessageModal from 'scenes/RetroRoom/components/AddMessageModal'
import EditMessageModal from 'scenes/RetroRoom/components/EditMessageModal'
import roomReducer from './roomReducer'
import * as styled from './styled'

const mockUsers = [
    { name: 'John' },
    { name: 'Sansa' },
    { name: 'Rob' },
    { name: 'Bran' },
]

const RetroRoom = () => {
    const [ state, dispatch ] = useReducer(roomReducer, {})
    let unsubscribe = null

    useEffect(() => {
        subscribeMessages(setMessages).then(response => unsubscribe = response)
        return function cleanUp() { unsubscribe() }
    }, [])

    const setMessages = messages => {
        dispatch({
            type: 'SET_MESSAGES',
            payload: messages
        })
    }

    return (
        <RoomContext.Provider value={{state, dispatch}}>
            <styled.HeaderWrapper>
                <Header />
            </styled.HeaderWrapper>
            <styled.RoomWrapper>
                <Sidebar users={mockUsers} />
                <styled.ColumnsWrapper>
                    <Column title="Good" cards={state.messages} />
                    <Column title="Not so good" cards={state.messages} />
                    <Column title="To improve" cards={state.messages} />
                </styled.ColumnsWrapper>
            </styled.RoomWrapper>
            <Footer />
            { state.showAddModal && <AddMessageModal /> }
            { state.showEditModal && <EditMessageModal /> }
            { (state.showAddModal || state.showEditModal) && <styled.Overlay />}
        </RoomContext.Provider>
    )
}

export default RetroRoom