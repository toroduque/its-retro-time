import styled from 'styled-components'
import { MOBILE_QUERY } from 'constants/responsive'
import { MODAL_WIDTH } from 'constants/layout'

export const EditMessageWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${ MODAL_WIDTH }rem;
    background-color: white;
    padding: 1rem 3rem 3rem 3rem;
    z-index: 4;
    box-sizing: border-box;

    h2 {
        color: ${ props => props.theme.PRIMARY };
        font-weight: 500;
    }

    @media ${MOBILE_QUERY.query}{
        top: 0;
        left: 0;
        transform: none;
        width: 100%;
        height: 100vh;
    }
`

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;

    @media ${MOBILE_QUERY.query}{
      margin-top: 3rem;
    }
`

export const BottomWrapper = styled.div`
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    margin-top: 3rem;

    @media ${MOBILE_QUERY.query}{
      display: block;
    }
`