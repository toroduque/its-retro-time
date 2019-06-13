import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { PRIMARY, DARKER, BLACK, LIGHT_GRAY, GRAY } from './constants/colors'
import Home from 'scenes/Home'
import CreateRoom from 'scenes/CreateRoom'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i&display=swap');

    /* Set rem base to 10px */
    html { 
        font-size: 62.5%;
    } 

    body { 
        margin: 0;
        font-family: 'Raleway', Arial, Helvetica, sans-serif;
        font-size: 1.4rem;
    }

    button, input {
        font-family: 'Raleway', Arial, Helvetica, sans-serif;
        font-size: 1.4rem;
    }

    h1 {
        color: ${PRIMARY};
        letter-spacing: -0.09rem;
        font-size: 2.4rem;
    }

    a {
        text-decoration: none;
    }
`

const theme = {
    PRIMARY,
    DARKER,
    BLACK,
    GRAY,
    LIGHT_GRAY
}

const App = () => (
    <ThemeProvider theme={theme}>
        <Fragment>
            <GlobalStyle /> 
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/create-room" component={CreateRoom}/>
                </Switch>
            </BrowserRouter>
        </Fragment>
    </ThemeProvider>
)

export default App