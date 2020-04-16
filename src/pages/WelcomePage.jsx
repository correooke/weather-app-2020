import React from 'react'
import WelcomeScreen from './../components/WelcomeScreen'
import Grid from '@material-ui/core/Grid'

const WelcomePage = () => {
    return (
        <WelcomeScreen>
            <Grid container
                direction="column"
                justify="center"
                className="full">
                <div className="highlight">
                    
                </div>
            </Grid>
        </WelcomeScreen>
    )
}

export default WelcomePage
