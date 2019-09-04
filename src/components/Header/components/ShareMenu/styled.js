import styled from 'styled-components'

export const ShareMenuWrapper = styled.div`
    background-color: white;
    z-index: 12;
    width: 47rem;
    position: absolute;
    box-shadow: 0 0.6rem 1.2rem rgba(0,0,0,.3);
    padding: 2rem;
    right: 3rem;
`
export const Label = styled.label`
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 1rem;
`

export const Title = styled.h4`
    font-size: 1.6rem;
    margin: 0;
    font-weight: 600;
    margin-bottom: 2rem;
    color: ${props => props.theme.PRIMARY};
`

export const Value = styled.div`
    background-color: ${props => props.theme.LIGHT_PURPLE};
    margin: 1rem 0;
    padding: 1rem 0.5rem;
    transition: 0.2s;
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
        margin: 0 1rem;
        opacity: 0;
    }

    &:hover {
        svg { opacity: 0.7; }
    }
`

export const ValueWrapper = styled.div`
`

export const Copied = styled.div`
    opacity: ${props => props.active ? 1 : 0 };
    transition: ${props => props.active ? '0.2s' : '0.7s' } ;
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    justify-content: flex-end;
    color: ${ props => props.theme.PRIMARY };

    &::before {
        content: 'Copied!'
    }
`