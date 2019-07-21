import React, { useContext, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { RoomContext } from 'contexts'
import { subscribeRoom } from 'firebaseApi'
import * as styled from './styled'

const UsersList = ({match}) => {
    const roomContext = useContext(RoomContext)
    const { users, currentUser } = roomContext.state
    const { id } = match.params
    const userName = currentUser && currentUser.displayName
    
    let unsubscribe = null;

    useEffect(() => {
        subscribeRoom(id, setRoomInfo).then(response => unsubscribe = response)
        return function cleanUp() { 
            if (unsubscribe) {
                unsubscribe() 
            }
        }
    }, [])

    const setRoomInfo = roomInfo => {
        const { users, columnsName } = roomInfo

        roomContext.dispatch({
            type: 'SET_ROOM_INFO',
            payload: { users, columnsName }
        })
    }

    return (
        <styled.UsersListWrapper>
            <ul>
                { users && users.map(user => (
                    <styled.User key={user} isActive={user === userName}>{user}</styled.User>
                    )) 
                }
            </ul>
        </styled.UsersListWrapper>
    )
}

export default withRouter(UsersList)