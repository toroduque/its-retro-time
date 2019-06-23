import styled from 'styled-components'

export const Overlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background-color: rgba(0,0,0,0.2);
    bottom: 0;
    right: 0;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 1;
`

export const EditMessageWrapper = styled.div`
    width: 38rem;
    background-color: white;
    padding: 1rem 3rem 3rem 3rem;
    z-index: 2;
    pointer-events: none;

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
    margin-top: 1rem;
`