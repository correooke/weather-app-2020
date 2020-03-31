import React from 'react'
import { BrowserRouter as Router,
    Switch, 
    Route } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
    return (
        <Grid container
            justify="center"
            direction="row">
            <Grid item sm={10}>
                <h1>App</h1>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <WelcomePage />
                        </Route>
                        <Route path="/main">
                            <MainPage />
                        </Route>      
                        <Route path="/city">
                            <CityPage />
                        </Route> 
                        <Route>
                            <NotFoundPage />
                        </Route>                                                           
                    </Switch>
                </Router>
            </Grid>
        </Grid>
    )
}

export default App
