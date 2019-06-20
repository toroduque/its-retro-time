import styled from 'styled-components'

export const JoinRoomWrapper = styled.div`
    padding: 5rem 6rem;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid ${ props => props.theme.LIGHT_GRAY };
`

export const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 6rem;
    width: 100%;
    max-width: 50rem;

    h1 {
        margin-bottom: 7rem;
    }
`

export const ButtonsWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin: 3rem 0;
`