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
            <Button icon text onClick={closeMenu}>
                <Icon glyph="close" color={GRAY} size="16" />
            </Button>
            <Link to="/create-room">
                <Button hollow fontSize="1.6rem">Create Room</Button>
            </Link>
            { options.map(option => <styled.MenuOption key={option.name}>{option.name}</styled.MenuOption>)}
        </styled.ResponsiveMenuWrapper>
    </Modal>
)

export default ResponsiveMenu