import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Home from '../src/scenes/Home'

const GlobalStyle = createGlobalStyle`
  body { margin: 0; }
`

const App = () => (
    <ThemeProvider theme={{margin: 0}}>
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