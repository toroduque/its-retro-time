import styled from 'styled-components'
import { MOBILE_QUERY } from 'constants/responsive'

export const SidebarWrapper = styled.div`
    height: 30rem;
    width: 25rem;
    border-right: solid 1px ${props => props.theme.LIGHT_GRAY};

    @media ${MOBILE_QUERY.query} {
        display: flex;
        width: 100%;
        height: 5rem;
        border-bottom: solid 1px ${props => props.theme.LIGHT_GRAY};
    }
`