import React from 'react'
import PropTypes from 'prop-types'
import { LineChart, 
        Line, 
        CartersianGrid, 
        XAxis, 
        YAxis,
        Tooltip,
        Legend } from 'recharts'

const ForecastChart = ({ data }) => {
    return (
        <div>
            <LineChart
                height={250}
                width={700}
                margin={{ top: 20, bottom: 20, left: 5, right: 5 }}
                data={data} >
                <XAxis dataKey="dayHour"></XAxis>
                <YAxis></YAxis>
                <CartersianGrid></CartersianGrid>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Line type="monotone" dataKey="max" stroke="#FF0000"></Line>
                <Line type="monotone" dataKey="min" stroke="#0000FF"></Line>
            </LineChart>
        </div>
    )
}

ForecastChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            dayHour: PropTypes.string.isRequired,
            min: PropTypes.string.isRequired,
            max: PropTypes.string.isRequired,
        }),
    ).isRequired,
}

export default ForecastChart
