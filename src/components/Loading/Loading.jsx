import React, { useState, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'
import Logo from 'components/Logo'
import * as styled from './styled'

const Loading = () => {
    const [ isToggling, setIsToggling ] = useState(false)

    useEffect(() => {
        setIsToggling(true)
        return setIsToggling(false)
    }, [])
    
    const transitions = useTransition(isToggling, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: {duration: 50}
    })
    
    return (
        <styled.LoadingWrapper>
            <Logo iconOnly width="40"/>
            <div>... Loading</div>
        </styled.LoadingWrapper>
    )
}

export default Loading