import React from 'react'
import Logo from 'components/Logo'
import * as styled from './styled'

const Loading = () =>  (
    <styled.LoadingWrapper>
        <Logo iconOnly width="40"/>
        <div>... Loading</div>
    </styled.LoadingWrapper>
)

export default Loading