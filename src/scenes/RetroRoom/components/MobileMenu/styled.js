import styled from 'styled-components'

export const MobileMenuWrapper = styled.div`
    display: flex;
    width: 100%;
    background-color: #f9f9f9;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    box-sizing: border-box;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
`

export const SectionTitle = styled.h3`
    font-size: 1.2rem;
    color: ${ props => props.theme.GRAY };
`

export const UsersCount = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: ${props => props.theme.LIGHT_PURPLE};
    margin: 0 1rem;
    font-size: 1.2rem;
`