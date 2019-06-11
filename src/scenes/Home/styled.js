import styled from 'styled-components'
import bgImage from '../../../public/img/background.svg';


export const HomeWrapper = styled.div`
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    padding: 5rem 6rem;
`
export const Container = styled.div`
    display: flex;
`

export const Left = styled.div`
    flex: 1;
    padding-right: 4rem;
`

export const Right = styled.div`
    flex: 1;
`

export const Hero = styled.h1`
    color: ${ props => props.theme.DARKER };
    letter-spacing: -0.1rem;
    font-size: 6rem;
    margin-top: 8rem;
`