import React from 'react'
import PropTypes from 'prop-types'

const ForecastChart = ({ data }) => {
    return (
        <div>
            ForecastChart
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
