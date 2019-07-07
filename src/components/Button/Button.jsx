import React from 'react'
import { StageSpinner } from 'react-spinners-kit'
import * as styled from './styled'

const Button = ({ children, color, hollow, text, icon, fontSize, onClick, isLoading, type }) => (
    <styled.ButtonWrapper 
        color={color} 
        hollow={hollow}
        text={text}
        icon={icon}
        onClick={onClick}
        fontSize={fontSize}
        disabled={isLoading}
        type={type}
    >
        { isLoading ? <StageSpinner size={18} /> : children }
    </styled.ButtonWrapper>
)

export default Button