import React from 'react'
import glyphs from './glyphs'

const Icon = ({ size = 33, color, glyph }) => (
    <svg viewBox="0 0 33 33" height={size} width={size} style={{ width: size, height: size }} fill={color} stroke={color}>
        {glyphs[glyph]}
    </svg>
)

export default Icon