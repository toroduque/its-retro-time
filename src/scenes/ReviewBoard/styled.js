import styled from 'styled-components'

export const ReviewBoardWrapper = styled.div`
    background-color: white;
    width: 80rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;
`

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    border-bottom: solid 1px ${props => props.theme.LIGHT_GRAY};
    color: ${ props => props.theme.PRIMARY };
`

export const ContentWrapper = styled.div`
    display: flex;
`