import styled from 'styled-components'
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

    h2 {
        color: ${ props => props.theme.PRIMARY };
        font-weight: 500;
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
`

export const BottomWrapper = styled.div`
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    margin-top: 1rem;
`