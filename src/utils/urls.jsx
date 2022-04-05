import axios from 'axios'
const appid = "f99bbd9e4959b513e9bd0d7f7356b38d"

let coordinates = {};

const getCoordinates = async ({ city, countryCode }) => {
    if (coordinates[`${city},${countryCode}`])
        return coordinates[`${city},${countryCode}`];
    const { data } = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${countryCode}&appid=${appid}`)
    const [{ lat, lon }] = data;
    coordinates[`${city},${countryCode}`] = { lat, lon };
    return { lat, lon }
}

export const getWeatherUrl = async ({ city, countryCode }) => {
    const { lat, lon } = await getCoordinates({ city, countryCode })
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}`
}

export const getForecastUrl = async ({ city, countryCode }) => {
    const { lat, lon } = await getCoordinates({ city, countryCode })
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${appid}`
}




