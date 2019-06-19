import React, { useState } from 'react'
import Unread from './components/Unread'
import Read from './components/Read'
import * as styled from './styled'

const Card = ({user, message}) => {
    const [ unread, setUnread ] = useState(true)

    return (
        <styled.CardWrapper>
            <styled.MessageWrapper>
                <span onClick={() => setUnread(!unread) }>{message}</span>
                { unread ? <Unread /> : <Read /> }
            </styled.MessageWrapper>
            <h5>By {user}</h5>
        </styled.CardWrapper>
    )
}

export default Card