import styled from 'styled-components'

export const ButtonWrapper = styled.button`
    display: flex;
    align-content: center;
    justify-content: center;
    color: ${ props => props.hollow ? props.theme.PRIMARY : 'white' };
    border: ${ props => props.hollow ? `solid 1px ${props.theme.PRIMARY}` : 'none'};
    padding: 1rem 4rem;
    cursor: pointer;
    font-size: ${ props => props.fontSize };
    font-weight: 500;
    background-color: ${ props => {
        if (props.hollow) return 'transparent'
        return props.background || props.theme.PRIMARY
    }};

    &:focus {
        outline: 0;
    }
`