import React, { useState, useEffect } from 'react'
import Button from 'components/Button'
import Card from 'scenes/RetroRoom/components/Card'
import * as styled from './styled'

const Column = ({title, cards}) => {
    const [ columnTitle, setColumnTitle ] = useState('')

    useEffect(() => {
        setColumnTitle(title)
    }, [])

    const handleSetTitle = e => {
        setColumnTitle(e.target.value)
    }

    return ( 
        <styled.ColumnWrapper>
            <input value={columnTitle} onChange={handleSetTitle}/>
            <Button text>
                + ADD 
            </Button>
            <styled.CardsWrapper>
                { cards && cards.map(card => <Card user={card.user} message={card.message} />)}
            </styled.CardsWrapper>
        </styled.ColumnWrapper>
    )
}

export default Column