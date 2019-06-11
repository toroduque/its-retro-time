import styled from 'styled-components'

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const LogoText = styled.span`
    font-weight: 700;
    font-size: 2rem;
    letter-spacing: -0.1rem;
    color: ${ props => props.color };
    margin-left: 2rem;
`