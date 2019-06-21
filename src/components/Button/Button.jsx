import React from 'react'
import * as styled from './styled'

const Button = ({ children, color, hollow, text, icon, fontSize, onClick }) => (
    <styled.ButtonWrapper 
        color={color} 
        hollow={hollow}
        text={text}
        icon={icon}
        onClick={onClick}
        fontSize={fontSize}
    >
        {children}
    </styled.ButtonWrapper>
)

export default Button