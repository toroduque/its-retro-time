import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './globalStyle'
import { PRIMARY, DARKER, BLACK, LIGHT_GRAY, GRAY, GREEN, RED } from './constants/colors'
import Home from 'scenes/Home'
import CreateRoom from 'scenes/CreateRoom'
import JoinRoom from 'scenes/JoinRoom'
import RetroRoom from 'scenes/RetroRoom/RetroRoom';

// Styled-Compoents injects the global styles
GlobalStyle

const theme = {
    PRIMARY,
    DARKER,
    BLACK,
    GRAY,
    LIGHT_GRAY,
    GREEN,
    RED
}

const App = () => (
    <ThemeProvider theme={theme}>
        <Fragment>
            <GlobalStyle /> 
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/create-room" component={CreateRoom}/>
                    <Route path="/join-room" component={JoinRoom}/>
                    <Route path="/room/:id" component={RetroRoom} />
                </Switch>
            </BrowserRouter>
        </Fragment>
    </ThemeProvider>
)

export default App