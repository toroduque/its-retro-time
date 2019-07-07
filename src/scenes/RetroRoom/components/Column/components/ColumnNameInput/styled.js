import styled from 'styled-components'

export const ColumnNameInputWrapper = styled.div`
    display: flex;

    svg {
        opacity: 0;
        transition: 0.3s;
    }

    &:hover {
        svg {
            opacity: 1;
        }
    }
`