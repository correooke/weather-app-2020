import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import CityInfo from './../CityInfo'
import Weather from './../Weather'

// li: es un item (según tag html, tiene el role "listitem")
const renderCityAndCountry = cityAndCountry => {
    const { city, country } = cityAndCountry

    return (
        <li key={city}>
            <Grid container 
                justify="center"
                alignItems="flex-start"
            >
                <Grid item
                    md={8}
                    xs={12}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item
                    md={4}
                    xs={12}>
                    <Weather temperature={10} state="sunny" />
                </Grid>
            </Grid>
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
