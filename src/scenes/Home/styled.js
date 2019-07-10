import styled from 'styled-components'
import bgImage from '../../../public/img/background.svg';

export const HomeWrapper = styled.div`
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 2rem 6rem;
`

export const Container = styled.div`
    display: flex;
`

export const Left = styled.div`
    flex: 1;
    padding-right: 4rem;
`;

export const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Hero = styled.h1`
    color: ${ props => props.theme.DARKER };
    letter-spacing: -0.1rem;
    font-size: 6rem;
    margin-top: 8rem;
`

export const SubHeading = styled.div`
    border-left: solid 1px ${props => props.theme.DARKER};
    font-size: 2.4rem;
    padding: 1rem 2rem;
    margin-bottom: 4rem;
    color: ${ props => props.theme.BLACK };
`

export const ProductImage = styled.img`
    width: 100%;
    margin: 10rem 0;
    max-width: 60rem;
    min-width: 30rem;
`