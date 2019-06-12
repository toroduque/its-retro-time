import React from 'react'
import Icon from 'components/Icon'
import { BLACK } from 'constants/colors'
import * as styled from './styled'

const Footer = () => (
    <styled.FooterWrapper>
        <span>Made in Melbourne - 2019</span>
        <styled.SponsorWrapper>
            <Icon glyph="github" size="28" color={BLACK}/>
            <p>Sponsor us</p>
        </styled.SponsorWrapper>
    </styled.FooterWrapper>
)

export default Footer