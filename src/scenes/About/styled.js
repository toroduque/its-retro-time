import styled from 'styled-components'

export const AboutWrapper = styled.div`
    padding: 2rem 6rem;

`

export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const AboutContent = styled.div`
    margin: 4rem 0;
    max-width: 60rem;

    p {
        font-size: 1.8rem;
        line-height: 3rem;
        margin-top: 2rem;    


        &:first-of-type {
            margin-top: 4rem;
        }
    }
`