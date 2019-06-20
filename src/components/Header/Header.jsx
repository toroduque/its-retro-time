import React from 'react'
import { Link } from 'react-router-dom'
import Logo from 'components/Logo'
import Button from 'components/Button'
import { PRIMARY } from 'constants/colors'
import * as styled from './styled'

const Header = ({logoColor = PRIMARY}) => {
    const menuOptions = [
        { name: 'About', path: '/' },
        { name: 'Sponsor', path: '/' },
        { name: 'Join Room', path: '/join-room' }
    ]

    return (
        <styled.HeaderWrapper>
            <Link to="/">
                <Logo color={logoColor}/>
            </Link>
            <styled.NavlinksWrapper>
                { menuOptions.map(option => (
                    <styled.Navlink key={option.name}>
                        <Link to={option.path}>{option.name}</Link>
                    </styled.Navlink>))}
                <Link to="/create-room">
                    <Button hollow fontSize="1.6rem">Create Room</Button>
                </Link>
            </styled.NavlinksWrapper>
        </styled.HeaderWrapper>
    )
}

export default Header