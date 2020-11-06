import React from 'react'
import Header from 'components/Header'
import * as styled from './styled'

function About() {
    return (
        <styled.AboutWrapper>
            <Header />
            <styled.ContentWrapper>
                <styled.AboutContent>
                    <h1>About</h1>
                    <p>RetroTime is a free and open-source tool to run restrospectives meetings for remote teams.</p>
                    <p>This idea was born to solve a very simple problem: How to run the retrospective meetings for our engineering team in an easy way while some of the team members were working remotely.</p>
                    <p>I wanted to share this simple and easy-to-use tool with anyone who wants to use it.</p>
                </styled.AboutContent>
            </styled.ContentWrapper>
        </styled.AboutWrapper>
    )
}

export default About
