import styled from 'styled-components'

export const UsersListWrapper = styled.div`
    display: flex;
    flex-direction: column;

    li {
        list-style-type: none;
        color: ${props => props.theme.BLACK};
        margin-bottom: 2rem;
        text-transform: none;
        font-size: 1.6rem;
    }
`