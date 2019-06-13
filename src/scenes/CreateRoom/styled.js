import styled from 'styled-components'

export const CreateRoomWrapper = styled.div`
    padding: 5rem 6rem;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const HorizontalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
`

export const Half = styled.div`
    width: 45%;
`

export const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-top: 1px solid ${ props => props.theme.LIGHT_GRAY };
    margin: 6rem;
    width: 100%;
    max-width: 50rem;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
`