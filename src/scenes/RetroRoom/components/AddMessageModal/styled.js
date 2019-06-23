import styled from 'styled-components'

export const AddMessageWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;
    width: 38rem;
    background-color: white;
    padding: 1rem 3rem 3rem 3rem;

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