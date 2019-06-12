import React from 'react'
import glyphs from './glyphs'

const Icon = ({ size = 32, color, glyph }) => (
    <svg viewBox="0 0 34 33" style={{ width: size, height: size }} fill={color} stroke={color}>
        {glyphs[glyph]}
    </svg>
)

export default Icon