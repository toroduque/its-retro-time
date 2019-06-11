import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { PRIMARY, DARKER } from './constants/colors'
import Home from '../src/scenes/Home'

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

    button {
        font-family: 'Raleway', Arial, Helvetica, sans-serif;
        font-size: 1.4rem;
    }
`

const theme = {
    PRIMARY,
    DARKER
}

const App = () => (
    <ThemeProvider theme={theme}>
        <Fragment>
            {/* This styled-component inserts the global styles */}
            <GlobalStyle /> 
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </BrowserRouter>
        </Fragment>
    </ThemeProvider>
)

export default App