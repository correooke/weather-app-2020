import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import { useParams } from 'react-router-dom'
import AppFrame from './../components/AppFrame'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'

const dataExample = [
    {
        "dayHour": "Jue 18",
        "min": 14,
        "max": 22,
    },
    {
        "dayHour": "Vie 06",
        "min": 18,
        "max": 27,
    },
    {
        "dayHour": "Vie 12",
        "min": 18,
        "max": 28,
    },
    {
        "dayHour": "Vie 18",
        "min": 18,
        "max": 25,
    },
    {
        "dayHour": "Sab 06",
        "min": 15,
        "max": 22,
    },
    {
        "dayHour": "Sab 12",
        "min": 12,
        "max": 19,
    }
]

const forecastItemListExample = [
	{ hour: 18, state:"clouds", temperature:17, weekDay:"Jueves" },
	{ hour: 6, state:"clouds", temperature:18, weekDay:"Viernes" },
	{ hour: 12, state:"clouds", temperature:18, weekDay:"Viernes" },
	{ hour: 18, state:"clouds", temperature:19, weekDay:"Viernes" },
	{ hour: 6, state:"clouds", temperature:17, weekDay:"Sábado" },
	{ hour: 12, state:"clouds", temperature:17, weekDay:"Sábado" }, 
]

const CityPage = () => {
    const [data, setData] = useState(null)
    const [forecastItemList, setForecastItemList] = useState(null)

    const { city, countryCode } = useParams()

    useEffect(() => {
        const getForecast = async () => {
            const appid = "f99bbd9e4959b513e9bd0d7f7356b38d" 
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`

            try {
                const { data } = await axios.get(url)

                console.log("data", data)

                setData(dataExample)
                setForecastItemList(forecastItemListExample)            
            } catch (error) {
                console.log(error)            
            }
        }

        getForecast()

    }, [city, countryCode])

    const country = "Argentina"
    const state = "clouds"
    const temperature = 20
    const humidity = 80
    const wind = 5
    // const data = dataExample
    // const forecastItemList = forecastItemListExample

    return (
        <AppFrame>
            <Grid container
                justify="space-around"
                direction="column"
                spacing={2}>
                <Grid item container 
                    xs={12} 
                    justify="center"
                    alignItems="flex-end">
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid container item xs={12}
                    justify="center">
                    <Weather state={state} temperature={temperature} />
                    <WeatherDetails humidity={humidity} 
                        wind={wind} />
                </Grid>
                <Grid item>
                    {
                        data && <ForecastChart data={data} />
                    }
                </Grid>
                <Grid item>
                    {
                        forecastItemList && <Forecast forecastItemList={forecastItemList} />
                    }
                </Grid>
            </Grid>        
        </AppFrame>
    )
}

export default CityPage
