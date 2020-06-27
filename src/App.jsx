import React, { useState, useMemo } from 'react'
import { BrowserRouter as Router,
    Switch, 
    Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
    const [allWeather, setAllWeather] = useState({})

    const onSetAllWeather = useMemo(() => ((weatherCity) => {
        setAllWeather(allWeather => {
            return ({ ...allWeather, ...weatherCity })
        })
    }), [setAllWeather])
    
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <WelcomePage />
                </Route>
                <Route path="/main">
                    <MainPage allWeather={allWeather} onSetAllWeather={onSetAllWeather}/>
                </Route>      
                <Route path="/city/:countryCode/:city">
                    <CityPage allWeather={allWeather} onSetAllWeather={onSetAllWeather}/>
                </Route> 
                <Route>
                    <NotFoundPage />
                </Route>                                                           
            </Switch>
        </Router>
    )
}

export default App
