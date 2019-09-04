import styled from 'styled-components'

export const LoadingWrapper = styled.div`
    display: flex;
    padding-top: 20%;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    svg {
        margin-bottom: 3rem;
        animation: spin 4s linear infinite;
    }

    @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
`