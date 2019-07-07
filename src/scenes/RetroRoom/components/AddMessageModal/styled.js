import styled from 'styled-components'
import { MODAL_WIDTH } from 'constants/layout'

export const AddMessageWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;
    width: ${ MODAL_WIDTH }rem;
    background-color: white;
    padding: 1rem 3rem 3rem 3rem;

    h2 {
        color: ${ props => props.theme.PRIMARY };
        font-weight: 500;
        text-transform: capitalize;
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
    margin-top: 1rem;
`