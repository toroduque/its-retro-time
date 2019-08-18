import styled from 'styled-components'
import Button from 'components/Button'
import Icon from 'components/Icon'

export const HeaderWrapper = styled.div`
    height: 6rem;
    display: flex;
    background-color: transparent;
    padding: 1rem 0;
    align-items: center;
    justify-content: space-between;
`

export const NavlinksWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const Navlink = styled.p`
    margin-right: 4rem;
    font-size: 1.6rem;
    font-weight: 500;

    a {
        color: black;
    }
`

export const ShareButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: tomato;

    svg {
        fill: ${props => props.theme.PRIMARY}
    }
`