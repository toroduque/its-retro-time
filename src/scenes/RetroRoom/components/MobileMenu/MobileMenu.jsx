import React, { useContext, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { RoomContext } from 'contexts'
import { subscribeRoom } from 'firebaseApi'
import Button from 'components/Button'
import * as styled from './styled'

const MobileMenu = ({match}) => {
    const roomContext = useContext(RoomContext)
    const { users } = roomContext.state
    const { id } = match.params
    
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

    const showReviewBoard = () => {
        roomContext.dispatch({ type: 'SHOW_REVIEW_BOARD' })
    }

    return (
        <styled.MobileMenuWrapper>
            <styled.Container>
                <Button text icon onClick={showReviewBoard}>Review</Button>
            </styled.Container>
            <styled.Container>
                <styled.SectionTitle>Users:</styled.SectionTitle> 
                <styled.UsersCount>{users && users.length}</styled.UsersCount>
            </styled.Container>
        </styled.MobileMenuWrapper>
    )
}

export default withRouter(MobileMenu)