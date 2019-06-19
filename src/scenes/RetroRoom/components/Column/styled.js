import styled from 'styled-components'

export const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    padding: 3rem 1rem;
    background-color: ${props => props.theme.LIGHT_GRAY};

    &:first-child {
        padding-right: 0;
    }

    &:last-child {
        padding-left: 0;
    }

    input {
        text-align: center;
        text-transform: uppercase;
        border: none;
        font-weight: 500;
        background-color: ${props => props.theme.LIGHT_GRAY};
    }
`
export const CardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`