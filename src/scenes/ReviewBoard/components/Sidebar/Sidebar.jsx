import React from 'react'
import SidebarItem from '../SidebarItem'
import * as styled from './styled'

const Sidebar = () => {
    return (
        <styled.SidebarWrapper>
            <SidebarItem title="Good" isActive/>
            <SidebarItem title="Not so good"/>
            <SidebarItem title="To improve"/>
        </styled.SidebarWrapper>
    )
}

export default Sidebar