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

export const Overlay = styled.div`
    position: fixed;
    background-color: rgba(0,0,0,0.2);
    bottom: 0;
    right: 0;
    top: 0;
    left: 0;
    pointer-events: none;
    overflow-x: hidden;
    z-index: 2;
`