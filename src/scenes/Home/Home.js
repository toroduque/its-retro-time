import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { DESKTOP_QUERY, MOBILE_QUERY } from 'constants/responsive'
import Header from 'components/Header'
import Button from 'components/Button'
import Footer from 'components/Footer'
import productExampleImage from '../../../public/img/product-example.svg'
import * as styled from './styled'

const Home = () => {
    const isDesktopOrLaptop = useMediaQuery(DESKTOP_QUERY)
    const isMobile = useMediaQuery(MOBILE_QUERY)

    return (
        <styled.HomeWrapper>
            <Header logoColor="white" />
            { isDesktopOrLaptop && (
                <styled.Container>
                    <styled.Left>
                        <styled.Hero>
                            Making retrospectives easier for remote teams
                        </styled.Hero>
                        <styled.SubHeading>
                            An easy-to-use tool to help your team run restrospective meetings in a simple and effective way.
                        </styled.SubHeading>
                        <Link to="/create-room">
                            <Button fontSize="2rem">Start now</Button>
                        </Link>
                    </styled.Left>
                    <styled.Right>
                        <styled.ProductImage src={productExampleImage} alt="Retro time example app image" />
                    </styled.Right>
                </styled.Container>
            )}

            { isMobile && (
                <styled.ContainerMobile>
                    <styled.Hero>
                        Making retrospectives easier for remote teams
                    </styled.Hero>
                    <styled.ProductImage src={productExampleImage} alt="Retro time example app image" />
                    <styled.SubHeading>
                        An easy-to-use tool to help your team run restrospective meetings in a simple and effective way.
                    </styled.SubHeading>
                    <Link to="/create-room">
                        <Button fontSize="2rem">Start now</Button>
                    </Link>
                </styled.ContainerMobile>
            )}
            
            <Footer marginTop="10"/>
        </styled.HomeWrapper>
    )
}

export default Home