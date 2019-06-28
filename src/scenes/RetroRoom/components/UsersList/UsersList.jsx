import React, { useContext, useEffect } from 'react'
import { RoomContext } from 'contexts'
import { subscribeUsers } from 'firebaseApi'
import { withRouter } from 'react-router-dom'
import * as styled from './styled'

const UsersList = ({match}) => {
    const roomContext = useContext(RoomContext)
    const users = roomContext.state.users || []
    const { id } = match.params
    
    let unsubscribe = null;

    useEffect(() => {
        subscribeUsers(id, setUsers).then(response => unsubscribe = response)
        return function cleanUp() { unsubscribe() }
    }, [])

    const setUsers = users => {
        roomContext.dispatch({
            type: 'SET_USERS',
            payload: users
        })
    }

    return (
        <styled.UsersListWrapper>
            <ul>
                { users && users.map(user => <li key={user}>{user}</li>) }
            </ul>
        </styled.UsersListWrapper>
    )
}

export default withRouter(UsersList)