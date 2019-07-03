import React from 'react'
import Modal from 'components/Modal'
import Icon from 'components/Icon'
import Sidebar from './components/Sidebar'
import MainBoard from './components/MainBoard'
import * as styled from './styled'

const ReviewBoard = () => {
    return (
        <Modal>
            <styled.ReviewBoardWrapper>
                <styled.HeaderWrapper>
                    <h3>Review</h3>
                    <Icon glyph="close" size="12" />
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