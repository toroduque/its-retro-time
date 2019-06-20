import styled from 'styled-components'

const TextArea = styled.textarea`
    border: none;
    background-color: ${props => props.theme.LIGHT_GRAY};
    width: 100%;
    padding: 1rem;
    border-radius: 1rem;
    margin: 1rem 0;
    resize: none;

    &:focus {
        outline-color: ${props => props.theme.PRIMARY}
    }

    &::placeholder {
        font-style: italic;
        color: ${props => props.theme.GRAY}
    }
`

export default TextArea