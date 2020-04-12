import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

const WelcomeScreen = ({ children }) => {
    const myRefDiv = useRef(null) // Valor inicial
    
    // En la primera renderización "myRefDiv.current" es igual 
    // a "nulo", el valor inicial
    console.log("myRefDiv.current", myRefDiv.current) // x 2

    // La función de useEffect se va "invocar" ante 
    // la segunda renderización, en ese punto ya va a 
    // contener un valor "myRefDiv.current"
    useEffect(() => {
        console.log("myRefDiv.current (en UseEffect)", myRefDiv.current)
    })

    return (
        <div ref={myRefDiv}>
            WelcomeScreen
        </div>
    )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node,
}

export default WelcomeScreen
