import React from 'react'
import { GRAY } from 'constants/colors'
import Icon from 'components/Icon'
import * as styled from './styled'

const SidebarSection = ({icon, title, children}) => (
    <styled.SidebarSectionWrapper>
        <styled.Container>
            <Icon glyph={icon} size="18" color={GRAY} />
            <h3>{title}</h3>
        </styled.Container>
        {children}
    </styled.SidebarSectionWrapper>
)

export default SidebarSection