import styled from 'styled-components'

export const FooterWrapper = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 5rem;
    bottom: 0;
    height: 6rem;
    margin-top: ${ props => props.marginTop || 0 }rem;
    background-color: rgba(255, 255, 255, 0.5);
`

export const SponsorWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    a {
        color: ${ props => props.theme.BLACK };
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    p {
        margin-left: 2rem;
    }
`