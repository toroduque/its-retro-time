import React from 'react'
import { withRouter } from 'react-router-dom'
import Button from 'components/Button'
import * as styled from './styled'

const ShareMenu = ({match}) => (
    <styled.ShareMenuWrapper>
        <h4>Share this room</h4>
        <div style={{backgroundColor: 'lightgray', padding: '1rem', margin: '1rem 0'}}>
            <h5>Url</h5>
            {match.url}
            <h5>Room Id</h5>
            {match.params.id}
        </div>
        <Button>Copy link</Button>
    </styled.ShareMenuWrapper>
)

export default withRouter(ShareMenu)