import { useMediaQuery } from 'react-responsive'

export const isDesktopOrLaptop = useMediaQuery({query: '(min-device-width: 841px)'})
export const isMobile = useMediaQuery({ query: '(max-width: 840px)' })
