import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from './../CityInfo/CityInfo'
import Weather from './../Weather/Weather'

// li: es un item (según tag html)
const renderCityAndCountry = cityAndCountry => {
    const { city, country } = cityAndCountry

    return (
        <li>
            <CityInfo city={city} country={country} />
            <Weather temperature={10} state="sunny" />
        </li>
    )
}

// cities: es un array, y en cada item tiene que tener la ciudad, pero además el country
// ul: tag html para listas no ordenadas
const CityList = ({ cities }) => {
    return (
        <ul>
            {
                cities.map(cityAndCountry => renderCityAndCountry(cityAndCountry))
            }
        </ul>
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
}

export default CityList
