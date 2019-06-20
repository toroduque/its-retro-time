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
`

export const AddCommentWrapper = styled.div`
    width: 38rem;
    background-color: white;
    padding: 2rem;

    h2 {
        color: ${ props => props.theme.PRIMARY }
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