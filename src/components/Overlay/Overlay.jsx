import styled from 'styled-components'

const Overlay = styled.div`
    position: fixed;
    background-color: rgba(0,0,0,0.2);
    bottom: 0;
    right: 0;
    top: 0;
    left: 0;
    pointer-events: visible;
    overflow-x: hidden;
    z-index: 2;
`
export default Overlay