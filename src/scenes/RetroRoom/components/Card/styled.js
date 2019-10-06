import styled from 'styled-components'

export const CardWrapper = styled.div`
    width: 100%;
    background-color: white;
    padding: 1rem;
    margin: 0.5rem 0;
    box-sizing: border-box;
    box-shadow: 0 .12rem 1rem rgba(0, 0, 0, .1);

    h5 {
        margin: 0;
        color: ${props => props.theme.GRAY}; 
    }
`
export const MessageWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    svg {
        fill: ${props => props.theme.GRAY};
        transition: 0.3s;

        &:hover {
            fill: ${props => props.theme.PRIMARY};
        }
    }
`

export const BottomSectionWrapper = styled.div`
    display: flex; 
    justify-content: space-between; 
    align-items: center;
`

