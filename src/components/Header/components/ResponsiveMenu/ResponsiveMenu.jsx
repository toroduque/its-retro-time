import React from 'react'
import { Link } from 'react-router-dom'
import { GRAY } from 'constants/colors'
import Modal from 'components/Modal'
import Button from 'components/Button'
import Icon from 'components/Icon'
import * as styled from './styled'

const ResponsiveMenu = ({options, closeMenu}) => (
    <Modal>
        <styled.ResponsiveMenuWrapper>
            <styled.CloseMenuWrapper>
                <Button icon text onClick={closeMenu}>
                    <Icon glyph="close" color={GRAY} size="16" />
                </Button>
            </styled.CloseMenuWrapper>
            <styled.CreateRoomWrapper>
                <Link to="/create-room">
                    <Button hollow fontSize="1.6rem">Create Room</Button>
                </Link>
            </styled.CreateRoomWrapper>
            { options.map(option => (
                <Link to={option.path} key={option.name}>
                    <styled.MenuOption >{option.name}</styled.MenuOption>
                </Link>)
            )}
        </styled.ResponsiveMenuWrapper>
    </Modal>
)

export default ResponsiveMenu