import styled from 'styled-components'

export const SelectedEmojisWrapper = styled.div`
    display: flex;
    height: 3rem;
    margin-top: 4rem;
`

export const ReactionWrapper = styled.div`
    display: flex;
    background-color: ${ props => props.theme.LIGHT_PURPLE };
    padding: 1px;
    border: solid 1px ${ props => props.theme.PRIMARY };
    border-radius: 1.2rem;
    align-items: center;
    margin: 0.2rem 0.2rem 0 0;
    height: 2rem;
    cursor: pointer;
`

export const EmojiWrapper = styled.div`
    margin-left: 0.5rem;
`

export const ReactionCounter = styled.div`
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    color: ${ props => props.theme.PRIMARY };
`