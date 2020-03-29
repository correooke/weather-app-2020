import React from 'react'
import { Link } from 'react-router-dom'

const WelcomePage = () => {
    return (
        <div>
            Welcome
            <div>
                <Link to="/main">Ir a Main</Link>
            </div>  
        </div>
    )
}

export default WelcomePage
