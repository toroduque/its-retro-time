import React from 'react'
import * as styled from './styled'

const SidebarItem = ({isActive, title}) => {
    return (
        <styled.SidebarItemWrapper isActive={isActive}>
            {title}
            <styled.NotificationsCountWrapper>
                4
            </styled.NotificationsCountWrapper>
        </styled.SidebarItemWrapper>
    )
}

export default SidebarItem