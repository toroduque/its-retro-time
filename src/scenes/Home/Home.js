import React from 'react'
import Header from '../../components/Header'
import * as styled from './styled'

const Home = () => {
    return (
        <styled.HomeWrapper>
            <Header />
            <styled.Container>
                <styled.Left>
                    <styled.Hero>
                        Making retrospectives easier for remote teams
                    </styled.Hero>
                </styled.Left>
                <styled.Right>
                
                </styled.Right>
            </styled.Container>
        </styled.HomeWrapper>
    )
}

export default Home