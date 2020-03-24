import React from 'react'
import PropTypes from 'prop-types'

const CityList = ({ cities }) => {
    return (
        <div>
            CityList
        </div>
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
}

export default CityList
