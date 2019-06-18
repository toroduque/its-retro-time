import styled from 'styled-components'

const Input = styled.input`
    border: none;
    background-color: ${props => props.theme.LIGHT_GRAY};
    width: 100%;
    height: 4rem;
    padding: 0 1rem;
    border-radius: 1rem;
    margin: 1rem 0;

    &:focus {
        outline-color: ${props => props.theme.PRIMARY}
    }

    &::placeholder {
        font-style: italic;
        color: ${props => props.theme.GRAY}
    }
`
export default Input