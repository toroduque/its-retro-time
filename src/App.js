import React, { Fragment, useReducer } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './globalStyle'
import { PRIMARY, DARKER, BLACK, LIGHT_GRAY, GRAY, GREEN, RED, LIGHT_PURPLE } from './constants/colors'
import { RoomContext } from 'contexts'
import roomReducer from 'reducers/roomReducer'
import Home from 'scenes/Home'
import CreateRoom from 'scenes/CreateRoom'
import JoinRoom from 'scenes/JoinRoom'
import RetroRoom from 'scenes/RetroRoom'


// Styled-Compoents injects the global styles
GlobalStyle

const theme = {
    PRIMARY,
    DARKER,
    BLACK,
    GRAY,
    LIGHT_GRAY,
    GREEN,
    RED,
    LIGHT_PURPLE
}

const App = () => { 
    const [ state, dispatch ] = useReducer(roomReducer, { isShowingReviewBoard: false })

    return (
    <RoomContext.Provider value={{state, dispatch}}>
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
    </RoomContext.Provider>
)}

export default App