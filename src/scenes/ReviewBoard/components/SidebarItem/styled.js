import styled from 'styled-components'
import { MOBILE_QUERY } from 'constants/responsive'

export const SidebarItemWrapper = styled.div`
    display: flex;
    padding: 1rem 2rem;
    border-left: solid 0.5rem ${props => props.isActive ? props.theme.PRIMARY : 'white'};
    background-color: ${props => props.isActive ? '#f9f9f9' : 'white'};
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    @media ${MOBILE_QUERY.query} {
        flex: 1;
        border-left: none;
        border-bottom: solid 0.2rem ${props => props.isActive ? props.theme.PRIMARY : 'white'};
    }
`

export const NotificationsCountWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 1rem;
    height: 0.3rem;
    width: 0.3rem;
    background-color: ${props => props.theme.LIGHT_PURPLE};
    color: ${props => props.theme.PRIMARY};
    font-weight: 600;
    font-size: 1.1rem;
`