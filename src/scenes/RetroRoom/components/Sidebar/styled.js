import styled from 'styled-components'
import { ButtonWrapper } from 'components/Button/styled'

export const SidebarWrapper = styled.div`
    display: block;
    width: 25rem;
    height: 100%;
`

export const ModeButtonsWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 1rem 0;
`

export const ModeButton = styled(ButtonWrapper)`
    width: 9rem;
    padding: 0.8rem 0;
`