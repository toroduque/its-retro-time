import React, { Fragment } from 'react'
import { useMediaQuery } from 'react-responsive'
import { DESKTOP_QUERY, MOBILE_QUERY } from 'constants/responsive'
import Icon from 'components/Icon'
import { BLACK } from 'constants/colors'
import * as styled from './styled'

const Footer = ({marginTop}) => {
    const isDesktopOrLaptop = useMediaQuery(DESKTOP_QUERY) 
    const isMobile = useMediaQuery(MOBILE_QUERY)
    const currentYear = (new Date()).getFullYear()

    return (
        <styled.FooterWrapper marginTop={marginTop}>
            { isDesktopOrLaptop && (
                <Fragment>
                    <span>Made in Melbourne - {currentYear}</span>
                    <styled.SponsorWrapper>
                        <a href="https://github.com/toroduque/its-retro-time" target="_blank">
                            <Icon glyph="github" size="28" color={BLACK}/>
                        </a>
                        <a href="https://www.buymeacoffee.com/toroduque" target="_blank">Sponsor us</a>
                    </styled.SponsorWrapper>
                </Fragment>
            )}

            { isMobile && (
                <Fragment>
                    <span>Melbourne - 2019</span>
                    <styled.SponsorWrapper>
                        <a href="https://github.com/toroduque/its-retro-time" target="_blank">
                            <Icon glyph="github" size="22" color={BLACK}/>
                        </a>
                    </styled.SponsorWrapper>
                </Fragment>
            )}
        </styled.FooterWrapper>
    )
}

export default Footer