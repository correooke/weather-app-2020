import { useEffect, useDebugValue } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { getForecastUrl } from './../utils/urls'
import getChartData from './../utils/transform/getChartData'
import getForecastItemList from './../utils/transform/getForecastItemList'

const useCityPage = (onSetChartData, onSetForecastItemList) => {
    // const [chartData, setChartData] = useState(null)
    // const [forecastItemList, setForecastItemList] = useState(null)

    const { city, countryCode } = useParams()

    useDebugValue(`useCityPage ${city}`)

    useEffect(() => {
        const getForecast = async () => {
            const url = getForecastUrl({ city, countryCode })

            try {
                const { data } = await axios.get(url)
                
                const dataAux = getChartData(data)

                onSetChartData(dataAux)

                const forecastItemListAux = getForecastItemList(data)

                onSetForecastItemList(forecastItemListAux)            
            } catch (error) {
                console.log(error)            
            }
        }

        getForecast()

    }, [city, countryCode, onSetChartData, onSetForecastItemList])

    return { city, countryCode }
}

export default useCityPage