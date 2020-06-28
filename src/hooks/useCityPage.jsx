import { useEffect, useDebugValue } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { getForecastUrl } from './../utils/urls'
import getChartData from './../utils/transform/getChartData'
import getForecastItemList from './../utils/transform/getForecastItemList'
import { getCityCode } from './../utils/utils'

const useCityPage = (allChartData, allForecastItemList, actions) => {
    const { city, countryCode } = useParams()

    useDebugValue(`useCityPage ${city}`)

    useEffect(() => {
        const getForecast = async () => {
            const url = getForecastUrl({ city, countryCode })
            const cityCode = getCityCode(city, countryCode)
            try {
                const { data } = await axios.get(url)
                
                const dataAux = getChartData(data)

                // onSetChartData({ [cityCode]: dataAux })
                actions({ type: 'SET_CHART_DATA', payload: { [cityCode]: dataAux } })
                const forecastItemListAux = getForecastItemList(data)

                // onSetForecastItemList({ [cityCode]: forecastItemListAux })  
                actions({ type: 'SET_FORECAST_ITEM_LIST', payload: { [cityCode]: forecastItemListAux } })          
            } catch (error) {
                console.log(error)            
            }
        }
        const cityCode = getCityCode(city, countryCode)

        if (allChartData && allForecastItemList && !allChartData[cityCode] && !allForecastItemList[cityCode]) {
            getForecast()
        }
        

    }, [city, countryCode, actions, allChartData, allForecastItemList])

    return { city, countryCode }
}

export default useCityPage