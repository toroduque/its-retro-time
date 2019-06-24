import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import { BLACK, GRAY, RED } from 'constants/colors'
import Icon from 'components/Icon'
import Button from 'components/Button'
import * as styled from './styled'

const InlineDelete = ({onDelete}) => {
    const [ showConfirmDelete, setShowConfirmDelete ] = useState(false)

    const transitions = useTransition(showConfirmDelete, null, {
        from: { position: 'absolute', opacity: 0, display: 'flex', alignItems: 'center' },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    return (
        <styled.InlineDeleteWrapper>
            {
                transitions.map(({ item, key, props }) => item ? (
                    <animated.div style={props} key={key}>
                        <Icon 
                            glyph="delete" 
                            color={ RED } 
                            size="14" 
                            onClick={() => setShowConfirmDelete(true)}
                        />
                        <styled.ConfirmMenu style={props}>
                            <span> Are you sure? </span>
                            <Button text icon onClick={onDelete} color={RED}>Yes</Button>
                            <Button text icon onClick={() => setShowConfirmDelete(false)} color={BLACK}>No</Button>
                        </styled.ConfirmMenu>
                    </animated.div>
                    ) : ( 
                    <animated.div style={props} key={key}>
                         <Icon 
                            glyph="delete" 
                            color={ GRAY } 
                            size="14" 
                            onClick={() => setShowConfirmDelete(true)}
                        />
                        <Button text icon color={GRAY} onClick={() => setShowConfirmDelete(true)}>Delete</Button>
                    </animated.div>)
                )
            }
        </styled.InlineDeleteWrapper>
    )
}

export default InlineDelete