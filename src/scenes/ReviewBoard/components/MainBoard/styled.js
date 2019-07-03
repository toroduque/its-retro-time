import styled from 'styled-components'

export const MainBoardWrapper = styled.div`
    display: block;
    width: 100%;
`

export const NavigationWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    border-bottom: solid 1px ${props => props.theme.LIGHT_GRAY};
`

export const ContentWrapper = styled.div`
    padding: 3rem 7rem;
`

export const Title = styled.h3`
    color: ${props => props.theme.GRAY};
    margin: 0 0 2rem 0;
`

export const Message = styled.span`
    font-size: 2rem;
    font-weight: 300;
    line-height: 3rem;
`

export const Author = styled.span`
    color: ${props => props.theme.GRAY};
    display: flex;
    justify-content: flex-end;
    font-weight: 600;
    margin-top: 4rem;
`