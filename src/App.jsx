import React from 'react'
import { BrowserRouter as Router,
    Switch, 
    Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
    return (
        <div>
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
        </div>
    )
}

export default App
