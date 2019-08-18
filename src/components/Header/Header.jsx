import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { PRIMARY } from 'constants/colors'
import { DESKTOP_QUERY, MOBILE_QUERY } from 'constants/responsive'
import Logo from 'components/Logo'
import Button from 'components/Button'
import Icon from 'components/Icon'
import Overlay from 'components/Overlay'
import ResponsiveMenu from './components/ResponsiveMenu'
import ShareMenu from './components/ShareMenu'
import * as styled from './styled'

const Header = ({logoColor = PRIMARY, insideRoom }) => {
    const [ showResponsiveMenu, setResponsiveMenu ] = useState(false)
    const [ showShareMenu, setShowShareMenu ] = useState(false)

    const menuOptions = [
        { name: 'About', path: '/' },
        { name: 'Sponsor', path: '/' },
        { name: 'Join Room', path: '/join-room' }
    ]

    const isDesktopOrLaptop = useMediaQuery(DESKTOP_QUERY)
    const isMobile = useMediaQuery(MOBILE_QUERY)
    const toggleMenu = () => setResponsiveMenu(!showResponsiveMenu)
    const toggleShareMenu = () => setShowShareMenu(!showShareMenu) 

    return (
        <styled.HeaderWrapper>
            <Link to="/">
                <Logo color={logoColor}/>
            </Link>

            { insideRoom && (
                <div>  
                    <styled.ShareButton text fontSize="1.6rem" onClick={toggleShareMenu}>
                        <span>Share Room</span>
                        <Icon glyph="share" size="16" />
                    </styled.ShareButton>
                    { showShareMenu && <ShareMenu />}
                </div>
            )}

            { isDesktopOrLaptop && !insideRoom && (
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
            { showResponsiveMenu && <Overlay onClick={toggleMenu} /> }
            { showShareMenu && <Overlay onClick={toggleShareMenu} /> }
        </styled.HeaderWrapper>
    )
}

export default Header