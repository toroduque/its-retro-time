import React, { useState, useEffect } from 'react'
import Button from 'components/Button'
import Card from 'scenes/RetroRoom/components/Card'
import AddCommentModal from 'scenes/RetroRoom/components/AddCommentModal'
import * as styled from './styled'

const Column = ({title, cards}) => {
    const [ columnTitle, setColumnTitle ] = useState('')
    const [ showModal, setShowModal ] = useState(false)

    useEffect(() => {
        setColumnTitle(title)
    }, [])

    const handleSetTitle = e => {
        setColumnTitle(e.target.value)
    }

    const toggleModal = () => setShowModal(!showModal)

    return ( 
        <styled.ColumnWrapper>
            <input value={columnTitle} onChange={handleSetTitle}/>
            <Button text onClick={toggleModal}>
                + ADD 
            </Button>
            <styled.CardsWrapper>
                { cards && cards.map(card => <Card user={card.user} message={card.message} />)}
            </styled.CardsWrapper>
            { showModal && <AddCommentModal title={columnTitle} type={columnTitle} toggleModal={toggleModal} /> }
        </styled.ColumnWrapper>
    )
}

export default Column