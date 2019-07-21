import React, { useContext, useReducer } from 'react'
import { useMediaQuery } from 'react-responsive'
import { RoomContext, ReviewBoardContext } from 'contexts'
import reviewBoardReducer from 'reducers/reviewBoardReducer'
import { DESKTOP_QUERY, MOBILE_QUERY } from 'constants/responsive'
import { FIRST } from 'constants/column'
import Modal from 'components/Modal'
import Button from 'components/Button'
import Icon from 'components/Icon'
import Sidebar from './components/Sidebar'
import MainBoard from './components/MainBoard'
import * as styled from './styled'

const ReviewBoard = () => {
    const defaultState = { selectedColumn: { title: 'Good', number: FIRST }, index: 0 }
    const [ state, dispatch ] = useReducer(reviewBoardReducer, defaultState)
    const roomContext = useContext(RoomContext)
    const isDesktop = useMediaQuery(DESKTOP_QUERY)
    const isMobile = useMediaQuery(MOBILE_QUERY)

    const closeReviewBoard = () => {
        roomContext.dispatch({type: 'HIDE_REVIEW_BOARD'})
    }

    return (
        <ReviewBoardContext.Provider value={{state, dispatch}}>
            <Modal>
                <styled.ReviewBoardWrapper>
                    <styled.HeaderWrapper>
                        <h3>Review</h3>
                        <Button text icon onClick={closeReviewBoard}>
                            <Icon glyph="close" size="12" />
                        </Button>
                    </styled.HeaderWrapper>
                    { isMobile &&  <Sidebar />}
                    <styled.ContentWrapper>
                        { isDesktop &&  <Sidebar />}
                        <MainBoard />
                    </styled.ContentWrapper>
                </styled.ReviewBoardWrapper>
            </Modal>
        </ReviewBoardContext.Provider>
    )
}

export default ReviewBoard