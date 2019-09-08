import styled from 'styled-components'

export const AddEmojiButtonWrapper = styled.div`
    position: relative;
`

export const EmojiMenuWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    background-color: white;
    position: absolute;
    padding: 0.1rem 1rem;
    top: -3.2rem;
    box-shadow: 0 1.2rem 2.4rem rgba(0, 0, 0, 0.2);
    transition: 0.2s;
    opacity: 0;

    ${AddEmojiButtonWrapper}:hover & {
        opacity: 1;
    }
`

export const EmojiWrapper = styled.div`
    padding: 0.1rem;
    background-color: white;
    border-radius: 50%;
    margin: 0 0.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    width: 2.5rem;
    height: 2.5rem;

    &:hover {
        background-color: ${props => props.theme.LIGHT_GRAY};
        cursor: pointer;
    }
`