import styled from 'styled-components'

export const UsersListWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const User = styled.li`
    list-style-type: none;
    color: ${ props => props.isActive ? props.theme.PRIMARY : props.theme.BLACK };
    font-weight: ${ props => props.isActive ? '500' : '400' };
    margin-bottom: 2rem;
    text-transform: none;
    font-size: 1.6rem;
`