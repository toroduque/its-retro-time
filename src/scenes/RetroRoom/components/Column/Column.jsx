import React, { useState, useEffect } from 'react'
import Button from 'components/Button'
import Card from 'scenes/RetroRoom/components/Card'
import AddMessageModal from 'scenes/RetroRoom/components/AddMessageModal'

import * as styled from './styled'

const Column = ({title, cards}) => {
    const [ columnTitle, setColumnTitle ] = useState('')
    const [ showAddModal, setShowAddModal ] = useState(false)

    useEffect(() => {
        setColumnTitle(title)
    }, [])

    const handleSetTitle = e => {
        setColumnTitle(e.target.value)
    }

    const toggleAddModal = () => setShowAddModal(!showAddModal)

    return ( 
        <styled.ColumnWrapper>
            <input value={columnTitle} onChange={handleSetTitle}/>
            <Button text onClick={toggleAddModal}>
                + ADD 
            </Button>
            <styled.CardsWrapper>
                { cards && cards.map(card => (
                    <Card key={card.id} 
                        columnTitle={columnTitle}
                        {...card} 
                    />) )}
            </styled.CardsWrapper>
            { showAddModal && <AddMessageModal title={columnTitle} type={columnTitle} toggleModal={toggleAddModal} /> }
        </styled.ColumnWrapper>
    )
}

export default Column