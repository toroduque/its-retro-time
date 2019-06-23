import React, { useState, useEffect, useContext } from 'react'
import { RoomContext } from 'contexts'
import Button from 'components/Button'
import Card from 'scenes/RetroRoom/components/Card'
import * as styled from './styled'

const Column = ({title, cards}) => {
    const [ columnTitle, setColumnTitle ] = useState('')
    const roomContext = useContext(RoomContext)

    useEffect(() => {
        setColumnTitle(title)
    }, [])

    const handleSetTitle = e => {
        setColumnTitle(e.target.value)
    }

    const showAddModal = () => {
        roomContext.dispatch({type: 'SHOW_ADD_MODAL'})
    }

    return ( 
        <styled.ColumnWrapper>
            <input value={columnTitle} onChange={handleSetTitle}/>
            <Button text onClick={showAddModal}>
                + ADD 
            </Button>
            <styled.CardsWrapper>
                { cards && cards.map(card => <Card key={card.id} {...card} /> )}
            </styled.CardsWrapper>
        </styled.ColumnWrapper>
    )
}

export default Column