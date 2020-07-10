import React, { useReducer } from 'react'


const WeatherStateContext = React.createContext()

const WeatherDispatchContext = React.createContext()


const initialValue = {
    allWeather: {},
    allChartData: {}, 
    allForecastItemList: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_ALL_WEATHER':
            const weatherCity = action.payload
            const newAllWeather = { ...state.allWeather, ...weatherCity }
            return { ...state, allWeather: newAllWeather }
        case 'SET_CHART_DATA':
            const chartDataCity = action.payload 
            const newAllChartData = { ...state.allChartData, ...chartDataCity }
            return { ...state, allChartData: newAllChartData }
        case 'SET_FORECAST_ITEM_LIST':
            const forecastItemListCity = action.payload
            const newAllForecastItemListCity = { ...state.allForecastItemList, ...forecastItemListCity }
            return { ...state, allForecastItemList: newAllForecastItemListCity }
        default:
            return state 
    }
}

const WeatherContext = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialValue)
    return (
        <WeatherDispatchContext.Provider value={dispatch}>
            <WeatherStateContext.Provider value={state}>
                {children}
            </WeatherStateContext.Provider>
        </WeatherDispatchContext.Provider>    )
}

export { 
    WeatherContext, 
    WeatherDispatchContext, 
    WeatherStateContext
}