import React from 'react'
import { GRAY } from 'constants/colors'
import Icon from 'components/Icon'
import * as styled from './styled'

const ColumnNameInput = ({value, onChange, onSubmit}) => (
    <form onSubmit={onSubmit}>
        <styled.ColumnNameInputWrapper>
            <input value={value} onChange={onChange} />
            <Icon glyph="pencil" size="15" color={GRAY} />
        </styled.ColumnNameInputWrapper>
    </form>
)

export default ColumnNameInput