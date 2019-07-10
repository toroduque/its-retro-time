import styled from 'styled-components'
import { HEADER_HEIGHT, FOOTER_HEIGHT } from 'constants/layout'

export const RoomWrapper = styled.div`
    display: flex;
    height: ${100 - HEADER_HEIGHT - FOOTER_HEIGHT}vh;
`

export const HeaderWrapper = styled.div`
    padding: 0 3rem;
    border-bottom: solid 1px ${props => props.theme.LIGHT_GRAY};
`

export const ColumnsWrapper = styled.div`
    display: flex;
    flex: 1;
`