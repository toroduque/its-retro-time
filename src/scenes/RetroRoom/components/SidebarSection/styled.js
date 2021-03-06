import styled from 'styled-components'

export const SidebarSectionWrapper = styled.div`
    display: block;
    width: 100%;
    box-sizing: border-box;
    text-transform: uppercase;
    color: ${props => props.theme.GRAY};
    padding: 1rem 2rem;
    border-bottom: 1px solid ${props => props.theme.LIGHT_GRAY};

    h3 {
        font-size: 1.2rem;
    }

    svg {
        margin-right: 2rem;
    }
`

export const Container = styled.div`
    display: flex; 
    align-items: center;
`