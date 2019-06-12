import React from 'react'
import Logo from 'components/Logo'
import Button from 'components/Button'
import * as styled from './styled'

const Header = () => {
    const menuOptions = [
        { name: 'About', link: '/about' },
        { name: 'Sponsor', link: '/sponsor' }
    ]

    return (
        <styled.HeaderWrapper>
            <Logo color="white"/>
            <styled.NavlinksWrapper>
                { menuOptions.map(option => <styled.Navlink key={option.name}>{option.name}</styled.Navlink>)}
                <Button hollow fontSize="1.6rem">Create Room</Button>
            </styled.NavlinksWrapper>
        </styled.HeaderWrapper>
    )
}

export default Header