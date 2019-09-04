import React from 'react'
import { withRouter } from 'react-router-dom'
import useClipboard from "react-use-clipboard"
import { PRIMARY, BLACK } from 'constants/colors'
import Icon from 'components/Icon'
import * as styled from './styled'

const ShareMenu = ({match}) => {
    const roomUrl = `https://its-retro-time.web.app${match.url}`
    const roomId = match.params.id
    const params = { successDuration: 2000 }
    
    const [ isIdCopied, setIdCopied ] = useClipboard(roomId, params);
    const [ isUrlCopied, setUrlCopied ] = useClipboard(roomUrl, params);

    return (
        <styled.ShareMenuWrapper>
            <styled.Title>Share this room</styled.Title>

            <styled.ValueWrapper>
                <styled.Label>Url</styled.Label>
                <styled.Value onClick={() => setUrlCopied(roomUrl)}>
                    { roomUrl }
                    <Icon glyph="copy" size="10" color={BLACK}/>
                </styled.Value>
                <styled.Copied active={isUrlCopied} />
            </styled.ValueWrapper>

            <styled.ValueWrapper>
                <styled.Label>Room Id</styled.Label>
                <styled.Value onClick={() => setIdCopied(roomUrl)}>
                    { roomId }
                    <Icon glyph="copy" size="10" color={BLACK}/>
                </styled.Value>
                <styled.Copied active={isIdCopied} />
            </styled.ValueWrapper>
        </styled.ShareMenuWrapper>
    )
}

export default withRouter(ShareMenu)