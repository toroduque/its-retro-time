import React from 'react'
import * as styled from './styled'

const Label = ({children, optional}) => (
    <span>
        <styled.LabelWrapper>{children}</styled.LabelWrapper>
        { optional && <styled.Optional>* Optional</styled.Optional> }
    </span> 
)

export default Label