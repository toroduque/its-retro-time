import React from 'react'
import { Link } from 'react-router-dom'
import Logo from 'components/Logo'
import Button from 'components/Button'
import { PRIMARY } from 'constants/colors'
import * as styled from './styled'

const Header = ({logoColor = PRIMARY}) => {
    const menuOptions = [
        { name: 'About', link: '/about' },
        { name: 'Sponsor', link: '/sponsor' }
    ]

    return (
        <styled.HeaderWrapper>
            <Logo color={logoColor}/>
            <styled.NavlinksWrapper>
                { menuOptions.map(option => <styled.Navlink key={option.name}>{option.name}</styled.Navlink>)}
                <Link to="/create-room">
                    <Button hollow fontSize="1.6rem">Create Room</Button>
                </Link>
            </styled.NavlinksWrapper>
        </styled.HeaderWrapper>
    )
}

export default Header