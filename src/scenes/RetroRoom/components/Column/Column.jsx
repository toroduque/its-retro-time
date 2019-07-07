import React, { useState, useEffect, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import { updateColumnName } from 'firebaseApi'
import { RoomContext } from 'contexts'
import Button from 'components/Button'
import Card from 'scenes/RetroRoom/components/Card'
import ColumnNameInput from './components/ColumnNameInput'
import * as styled from './styled'

const Column = ({title = '', cards, position, match}) => {
    const [ columnTitle, setColumnTitle ] = useState('')
    const roomContext = useContext(RoomContext)
    const { id } = match.params

    useEffect(() => {
        setColumnTitle(title)
    }, [title])

    const handleSetTitle = e => {
        setColumnTitle(e.target.value)
    }

    const showAddModal = () => {
        const payload = { position, title }
        roomContext.dispatch({type: 'SHOW_ADD_MODAL', payload })
    }

    const handleUpdateColumnName = async e => {
        e.preventDefault()
        await updateColumnName(id, position, columnTitle)
    }

    const filterCardsByColumnNumber = () => {
        return cards && cards.filter(card => card.columnNumber === position)
    }

    const filteredCards = filterCardsByColumnNumber()

    return ( 
        <styled.ColumnWrapper>
            <ColumnNameInput 
                value={columnTitle} 
                onChange={handleSetTitle} 
                onSubmit={handleUpdateColumnName}
            />
            <Button text onClick={showAddModal}>
                + ADD 
            </Button>
            <styled.CardsWrapper>
                { filteredCards && filteredCards.map(card => <Card key={card.id} {...card} />)}
            </styled.CardsWrapper>
        </styled.ColumnWrapper>
    )
}

export default withRouter(Column)