import React from 'react'
import { PRIMARY } from 'constants/colors'
import * as styled from './styled'

const Logo = ({width = 18, color = PRIMARY, iconOnly = false }) => (
    <styled.LogoWrapper>
        <svg viewBox="0 0 183 312" style={{width}}>
            <path d="M172 33v96h-22v-11h11V33H22v85h11v11H11V33H0V0h183v33h-11zM11 279v-85h21v11H22v74h42v-11h11v11h11v-11h11v11h11v-11h11v11h42v-74h-10v-11h21v85h11v33H0v-33h11zM22 11v11h139V11H22zm0 279v11h139v-11H22zm85-139v21H97v-32h31v11h-21zm-21 0v21H76v-21H55v-11h31v11zm11-44h11v11H97v-11zm-22 0h11v11H75v-11zm11-11h11v11H86V96zm22 0h11v11h-11V96zm-44 0h11v11H64V96zm22 22h11v11H86v-11zm0 150H75v-11h11v11zm22 0H97v-11h11v11zm-11-11H86v-11h11v11zm-11-74h11v11H86v-11zm-10 22h11v11H76v-11zm21 11h11v11H97v-11zm-64-87h22v11H33v-11zm95 0h22v11h-22v-11zm-74 43h22v11H54v-11zm53 0h22v11h-22v-11zm-75 11h22v11H32v-11zm97 0h22v11h-22v-11z" fill={color} fillRule="evenodd"/>
        </svg>
        { !iconOnly && <styled.LogoText color={color}>It's Retro Time</styled.LogoText>}
    </styled.LogoWrapper>
)
export default Logo
