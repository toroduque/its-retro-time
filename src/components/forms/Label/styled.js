import styled from 'styled-components'

export const LabelWrapper = styled.label`
    color: ${ props => props.theme.BLACK };
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 1rem;
    margin-bottom: 1rem;
`
export const Optional = styled.span`
    color: ${ props => props.theme.GRAY };
    font-size: 0.8rem;
    margin-left: 1rem;
`