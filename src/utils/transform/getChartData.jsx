import { toCelsius } from './../utils'
import moment from 'moment'

const getChartData = (data) => {
    console.log("data", data)

    const daysAhead = [0, 1, 2, 3, 4, 5]
    const days = daysAhead.map(d => moment().add(d, 'd'))
    const dataAux = days.map(day => {
        const tempObjArray = data.list.filter(item => {
            const dayOfYear = moment.unix(item.dt).dayOfYear()
            return dayOfYear === day.dayOfYear()
        })
        console.log("day.dayOfYear()", day.dayOfYear())
        console.log("tempObjArray", tempObjArray)

        const temps = tempObjArray.map(item => item.main.temp)

        // dayHour, min, max
        return ({
            dayHour: day.format('ddd'), 
            min: toCelsius(Math.min(...temps)), 
            max: toCelsius(Math.max(...temps)), 
            hasTemps: (temps.length > 0 ? true : false)
        })
    }).filter(item => item.hasTemps)

    return dataAux
}

export default getChartData