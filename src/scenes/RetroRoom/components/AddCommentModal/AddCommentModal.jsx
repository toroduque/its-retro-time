import React from 'react'
import { GRAY } from 'constants/colors'
import Modal from 'components/Modal'
import Button from 'components/Button'
import Icon from 'components/Icon'
import TextArea from 'components/forms/TextArea'
import * as styled from './styled'

const AddCommentModal = ({title, type, toggleModal }) => (
    <Modal>
        <styled.Overlay>
            <styled.AddCommentWrapper>
                <styled.TitleWrapper>
                    <h2>{title}</h2>
                    <Button icon text onClick={toggleModal}>
                        <Icon  glyph="close" size="14" color={GRAY} />
                    </Button>
                </styled.TitleWrapper>
                <TextArea rows="6" placeholder="Keep up the good work..."/>
                <styled.ButtonsWrapper>
                    <Button text onClick={toggleModal}>Cancel</Button>
                    <Button>Post</Button>
                </styled.ButtonsWrapper>
            </styled.AddCommentWrapper>
        </styled.Overlay>
    </Modal>
)



export default AddCommentModal