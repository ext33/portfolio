import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import MainPage from './pages/Main'
import AboutPage from './pages/About'
import WorkPage from './pages/Work'
import ErrorPage from './pages/Error'

function RouterView() {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path='/'
                    exact
                    component={MainPage}
                />
                <Route
                    path='/about'
                    exact
                    component={AboutPage}
                />
                <Route
                    path='/work'
                    exact
                    component={WorkPage}
                />
                <Route
                    path='/error'
                    exact
                    component={ErrorPage}
                />
                <Redirect
                    from='*'
                    to='/error'
                />
            </Switch>
        </BrowserRouter>
    )
}

export default RouterView
