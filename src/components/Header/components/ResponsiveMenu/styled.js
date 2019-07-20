import styled from 'styled-components'

export const ResponsiveMenuWrapper = styled.div`
    width: 20rem;
    height: 100vh;
    background-color: white;
    padding: 2rem;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 4;
`

export const MenuOption = styled.div`
    display: flex;
    border-bottom: solid 1px ${props => props.theme.GRAY};
    padding: 2rem 0;
    margin: 0 0.5rem;
`

export const CloseMenuWrapper = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    margin-bottom: 3rem;
    align-content: center;
`

export const CreateRoomWrapper = styled.div`
    display: flex;
    border-bottom: solid 1px ${props => props.theme.GRAY};
    padding-bottom: 2rem;

    a, button {
        width: 100%;
    }
`