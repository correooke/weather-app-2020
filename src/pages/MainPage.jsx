import React from 'react'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import AppFrame from './../components/AppFrame'
import CityList from './../components/CityList'
import { getCities } from './../utils/serviceCities'

const MainPage = ({ actions, data }) => {
    const history = useHistory()

    const onClickHandler = React.useCallback((city, countryCode) => {
        history.push(`/city/${countryCode}/${city}`)
    }, [history])

    return (
        <AppFrame>
            <Paper elevation={3}>
                <CityList
                    data={data}
                    actions={actions} 
                    cities={getCities()} 
                    onClickCity={onClickHandler} />
            </Paper>
        </AppFrame>
    )
}

export default MainPage
