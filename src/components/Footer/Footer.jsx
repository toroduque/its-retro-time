import React, { Fragment } from 'react'
import { useMediaQuery } from 'react-responsive'
import { DESKTOP_QUERY, MOBILE_QUERY } from 'constants/responsive'
import Icon from 'components/Icon'
import { BLACK } from 'constants/colors'
import * as styled from './styled'

const Footer = ({marginTop}) => {
    const isDesktopOrLaptop = useMediaQuery(DESKTOP_QUERY) 
    const isMobile = useMediaQuery(MOBILE_QUERY)

    return (
        <styled.FooterWrapper marginTop={marginTop}>
            { isDesktopOrLaptop && (
                <Fragment>
                    <span>Made in Melbourne - 2019</span>
                    <styled.SponsorWrapper>
                        <Icon glyph="github" size="28" color={BLACK}/>
                        <p>Sponsor us</p>
                    </styled.SponsorWrapper>
                </Fragment>
            )}

            { isMobile && (
                <Fragment>
                    <span>Melbourne - 2019</span>
                    <styled.SponsorWrapper>
                        <Icon glyph="github" size="22" color={BLACK}/>
                    </styled.SponsorWrapper>
                </Fragment>
            )}
        </styled.FooterWrapper>
    )
}

export default Footer