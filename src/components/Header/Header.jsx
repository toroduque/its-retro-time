import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { PRIMARY } from 'constants/colors'
import Logo from 'components/Logo'
import Button from 'components/Button'
import Icon from 'components/Icon'
import Overlay from 'components/Overlay'
import ResponsiveMenu from './components/ResponsiveMenu'
import * as styled from './styled'

const Header = ({logoColor = PRIMARY}) => {
    const [ showResponsiveMenu, setResponsiveMenu ] = useState(false)

    const menuOptions = [
        { name: 'About', path: '/' },
        { name: 'Sponsor', path: '/' },
        { name: 'Join Room', path: '/join-room' }
    ]

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 841px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 840px)' })
    const toggleMenu = () => setResponsiveMenu(!showResponsiveMenu)

    return (
        <styled.HeaderWrapper>
            <Link to="/">
                <Logo color={logoColor}/>
            </Link>

            { isDesktopOrLaptop && (
                <styled.NavlinksWrapper>
                    { 
                        menuOptions.map(option => (
                            <styled.Navlink key={option.name}>
                                <Link to={option.path}>{option.name}</Link>
                            </styled.Navlink>))
                    }
                <Link to="/create-room">
                    <Button hollow fontSize="1.6rem">Create Room</Button>
                </Link>
            </styled.NavlinksWrapper>
            )}

            { isMobile && (
                <Fragment>
                    <Button icon text onClick={toggleMenu}>
                        <Icon glyph="hamburger" size="22" color={logoColor} />
                    </Button>
                    { 
                        showResponsiveMenu && (
                            <ResponsiveMenu options={menuOptions} closeMenu={toggleMenu}/>
                        )
                    }
                </Fragment>  
            )}
            { showResponsiveMenu && <Overlay onClick={toggleMenu} />}
        </styled.HeaderWrapper>
    )
}

export default Header