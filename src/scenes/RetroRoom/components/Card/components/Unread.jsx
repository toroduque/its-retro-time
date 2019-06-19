import React from 'react'
import styled from 'styled-components'
import { GREEN } from 'constants/colors'
import Icon from 'components/Icon'

const Wrapper = styled.div`
    display: flex;
    align-items: center;

    h6 {
        color: ${props => props.theme.GREEN };
        font-size: 1.2rem;
        font-weight: 500;
        margin: 0 0.5rem 0 0;
    }
`

const Unread = () => (
    <Wrapper>
        <h6>Unread</h6>
        <Icon 
            glyph="circle"
            color={GREEN}
            size="10"
        />
    </Wrapper>
)

export default Unread