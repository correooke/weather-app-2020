import React, { useState, useCallback, useMemo } from 'react'
import { BrowserRouter as Router,
    Switch, 
    Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
    const [allWeather, setAllWeather] = useState({})
    const [chartData, onSetChartData] = useState(null)
    const [forecastItemList, onSetForecastItemList] = useState(null)

    const onSetAllWeather = useCallback((weatherCity) => {
        setAllWeather(allWeather => {
            return ({ ...allWeather, ...weatherCity })
        })
    }, [setAllWeather])

    const actions = useMemo(() => (
        { 
            onSetAllWeather,
            onSetChartData, 
            onSetForecastItemList
        }
    ), [onSetAllWeather, onSetChartData, onSetForecastItemList])

    const data = useMemo(() => (
        {
            allWeather,
            chartData, 
            forecastItemList
        }
    ), [allWeather, chartData, forecastItemList])
    
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <WelcomePage />
                </Route>
                <Route path="/main">
                    <MainPage data={data} actions={actions} />
                </Route>      
                <Route path="/city/:countryCode/:city">
                    <CityPage data={data} actions={actions} />
                </Route> 
                <Route>
                    <NotFoundPage />
                </Route>                                                           
            </Switch>
        </Router>
    )
}

export default App
