import React, { useState, useContext } from 'react'
import { getMessage } from 'firebaseApi'
import { RoomContext } from 'contexts'
import { collectIdsAndDocs } from 'utilities'
import Unread from './components/Unread'
import Read from './components/Read'
import * as styled from './styled'

const Card = ({ id, user, message}) => {
    const roomContext = useContext(RoomContext)
    const [ unread, setUnread ] = useState(true)

    const showEditModal = () => roomContext.dispatch({type: 'SHOW_EDIT_MODAL'})
    const selectMessage = (message) => roomContext.dispatch({type: 'SELECT_MESSAGE', payload: message})

    const handleShowEditModal = async () => {
        const doc = await getMessage(id)
        const selectedMessage = collectIdsAndDocs(doc)
        await selectMessage(selectedMessage)
        showEditModal()
    }

    return (
        <styled.CardWrapper onClick={handleShowEditModal}>
            <styled.MessageWrapper>
                <span onClick={() => setUnread(!unread) }>{message}</span>
                { unread ? <Unread /> : <Read /> }
            </styled.MessageWrapper>
            <h5>By {user}</h5>
        </styled.CardWrapper>
    )
}

export default Card