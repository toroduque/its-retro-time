import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    align-items: center;

    h6 {
        color: ${props => props.theme.GRAY };
        font-size: 1.2rem;
        font-weight: 500;
        margin: 0 0.5rem 0 0;
        text-decoration: line-through;
        font-style: italic;
    }
`

const Read = () => (
    <Wrapper>
        <h6>Read</h6>
    </Wrapper>
)

export default Read