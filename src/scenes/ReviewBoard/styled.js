import styled from 'styled-components'
import { MOBILE_QUERY } from 'constants/responsive'

export const ReviewBoardWrapper = styled.div`
    background-color: white;
    width: 80rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;

    @media ${MOBILE_QUERY.query}{
        top: 0;
        left: 0;
        transform: none;
        width: 100%;
        height: 100vh;
    } 
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