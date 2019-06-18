import React from 'react'
import * as styled from './styled'

const UsersList = ({users}) => (
    <styled.UsersListWrapper>
        <ul>
            { users && users.map(user => <li>{user.name}</li>) }
        </ul>
    </styled.UsersListWrapper>
)

export default UsersList