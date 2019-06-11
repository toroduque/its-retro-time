import React from 'react'
import Header from '../../components/Header'
import Button from '../../components/Button'
import productExampleImage from '../../../public/img/product-example.svg'
import * as styled from './styled'

const Home = () => (
    <styled.HomeWrapper>
        <Header />
        <styled.Container>
            <styled.Left>
                <styled.Hero>
                    Making retrospectives easier for remote teams
                </styled.Hero>
                <styled.SubHeading>
                    An easy tool to help your team run your restrospective meetings in a simple and effective way
                </styled.SubHeading>
                <Button fontSize="2rem">Start now</Button>
            </styled.Left>
            <styled.Right>
                <styled.ProductImage src={productExampleImage} alt="Retro time example app image" />
            </styled.Right>
        </styled.Container>
    </styled.HomeWrapper>
)

export default Home