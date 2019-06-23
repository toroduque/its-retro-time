import React, { useState } from 'react'
import EditMessageModal from 'scenes/RetroRoom/components/EditMessageModal'
import Unread from './components/Unread'
import Read from './components/Read'
import * as styled from './styled'

const Card = ({columnTitle, id, user, message}) => {
    const [ unread, setUnread ] = useState(true)
    const [ showEditModal, setShowEditModal ] = useState(false)

    const toggleEditModal = (e) => {
        e.stopPropagation()
        setShowEditModal(!showEditModal)
    }

    return (
        <styled.CardWrapper onClick={toggleEditModal}>
            <styled.MessageWrapper>
                <span onClick={() => setUnread(!unread) }>{message}</span>
                { unread ? <Unread /> : <Read /> }
            </styled.MessageWrapper>
            <h5>By {user}</h5>
            { showEditModal && (
                <EditMessageModal 
                    title={columnTitle} 
                    type={columnTitle} 
                    toggleModal={toggleEditModal}
                    id={id}
                    message={message} 
                /> 
            )}
        </styled.CardWrapper>
    )
}

export default Card