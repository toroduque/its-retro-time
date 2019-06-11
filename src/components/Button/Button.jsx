import React from 'react'
import * as styled from './styled'

const Button = ({ children, color, hollow, fontSize, onClick }) => (
    <styled.ButtonWrapper 
        color={color} 
        hollow={hollow}
        onClick={onClick}
        fontSize={fontSize}
    >
        {children}
    </styled.ButtonWrapper>
)

export default Button