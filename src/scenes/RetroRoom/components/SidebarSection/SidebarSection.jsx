import React from 'react'
import { GRAY } from 'constants/colors'
import Icon from 'components/Icon'
import * as styled from './styled'

const SidebarSection = ({icon, title, children}) => (
    <styled.SidebarSectionWrapper>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Icon glyph={icon} size="15" color={GRAY} />
            <h3>{title}</h3>
        </div>
        {children}
    </styled.SidebarSectionWrapper>
)

export default SidebarSection