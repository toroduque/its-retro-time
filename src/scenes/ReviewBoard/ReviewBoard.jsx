import React, { useContext } from 'react'
import Modal from 'components/Modal'
import Button from 'components/Button'
import { RoomContext } from 'contexts'
import Icon from 'components/Icon'
import Sidebar from './components/Sidebar'
import MainBoard from './components/MainBoard'
import * as styled from './styled'

const ReviewBoard = () => {
    const roomContext = useContext(RoomContext)

    const closeReviewBoard = () => {
        roomContext.dispatch({type: 'HIDE_REVIEW_BOARD'})
    }

    return (
        <Modal>
            <styled.ReviewBoardWrapper>
                <styled.HeaderWrapper>
                    <h3>Review</h3>
                    <Button text icon onClick={closeReviewBoard}>
                        <Icon glyph="close" size="12" />
                    </Button>
                </styled.HeaderWrapper>
                <styled.ContentWrapper>
                    <Sidebar />
                    <MainBoard />
                </styled.ContentWrapper>
            </styled.ReviewBoardWrapper>
        </Modal>
    )
}

export default ReviewBoard