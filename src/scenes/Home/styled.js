import styled from 'styled-components'
import { MOBILE_QUERY } from 'constants/responsive'
import bgImage from '../../../public/img/background.svg';

export const HomeWrapper = styled.div`
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 2rem 6rem;
    height: 100%;
`

export const Container = styled.div`
    display: flex;
`

export const ContainerMobile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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

    @media ${MOBILE_QUERY.query} {
        font-size: 4rem;
        text-align: center;
        margin-top: 4rem;
    }
`

export const SubHeading = styled.div`
    border-left: solid 1px ${props => props.theme.DARKER};
    font-size: 2.4rem;
    padding: 1rem 2rem;
    margin-bottom: 4rem;
    color: ${ props => props.theme.BLACK };

    @media ${MOBILE_QUERY.query} {
        margin-bottom: 2rem;
        border: none;
        text-align: center;
        padding: 0;
    }
`

export const ProductImage = styled.img`
    width: 100%;
    margin: 10rem 0;
    max-width: 60rem;
    min-width: 25rem;

    @media ${MOBILE_QUERY.query} {
        margin: 2rem 0;
    }
`