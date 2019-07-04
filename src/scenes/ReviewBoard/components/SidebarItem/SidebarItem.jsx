import React from 'react'
import * as styled from './styled'

const SidebarItem = ({isActive, title, count, columnNumber, onClick}) => {
    return (
        <styled.SidebarItemWrapper isActive={isActive} onClick={() => onClick(title, columnNumber)}>
            {title}
            <styled.NotificationsCountWrapper>
               {count}
            </styled.NotificationsCountWrapper>
        </styled.SidebarItemWrapper>
    )
}

export default SidebarItem