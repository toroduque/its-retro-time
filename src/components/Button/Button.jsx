import React from 'react'
import * as styled from './styled'

const Button = ({ children, color, hollow, text, fontSize, onClick }) => (
    <styled.ButtonWrapper 
        color={color} 
        hollow={hollow}
        text={text}
        onClick={onClick}
        fontSize={fontSize}
    >
        {children}
    </styled.ButtonWrapper>
)

export default Button