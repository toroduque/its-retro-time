import styled from 'styled-components'

export const ButtonWrapper = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${ props => {
        if (props.color) return props.color
        return props.hollow || props.text ? props.theme.PRIMARY : 'white'
    } };
    border: solid 0.1rem ${props => props.text ? 'transparent' : props.theme.PRIMARY};
    padding: ${ props => props.icon ? '0rem' : '1rem 4rem' };
    cursor: pointer;
    font-size: ${ props => props.fontSize };
    font-weight: 500;
    background-color: ${ props => {
        if (props.hollow || props.text) return 'transparent'
        return props.background || props.theme.PRIMARY
    }};

    &:focus {
        outline: 0;
    }
`