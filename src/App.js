import React, { Fragment, Suspense, lazy, useReducer } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './globalStyle'
import { PRIMARY, DARKER, BLACK, LIGHT_GRAY, GRAY, GREEN, RED, LIGHT_PURPLE } from './constants/colors'
import { RoomContext } from 'contexts'
import roomReducer from 'reducers/roomReducer'
import Home from 'scenes/Home'

const CreateRoom = lazy(() => import(
    /* webpackChunkName: "createRoom" */
    /* webpackPreload: true */
    './scenes/CreateRoom'));

const JoinRoom = lazy(() => import(
    /* webpackChunkName: "joinRoom" */
    /* webpackPreload: true */
    './scenes/JoinRoom'));

const RetroRoom = lazy(() => import(
    /* webpackChunkName: "retroRoom" */
    /* webpackPreload: true */
    './scenes/RetroRoom'));
    
const FourOFour = lazy(() => import(
    /* webpackChunkName: "FourOFour" */
    /* webpackPreload: true */
    './scenes/FourOFour'));

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
    const [ state, dispatch ] = useReducer(roomReducer, { isShowingReviewBoard: false, users: [] })

    return (

    <RoomContext.Provider value={{state, dispatch}}>
        <ThemeProvider theme={theme}>
            <Fragment>
                <GlobalStyle /> 
                <Suspense fallback={<div>Loading...</div>}>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/create-room" component={CreateRoom}/>
                            <Route path="/join-room/:id?" component={JoinRoom}/>
                            <Route path="/room/:id" component={RetroRoom} />
                            <FourOFour />
                        </Switch>
                    </BrowserRouter>
                </Suspense>
            </Fragment>
        </ThemeProvider>
    </RoomContext.Provider>
)}

export default App