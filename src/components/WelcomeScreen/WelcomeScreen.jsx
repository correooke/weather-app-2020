import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const WelcomeScreen = ({ children }) => {
    const myRefDiv = useRef(null) // Valor inicial
    const [vanta, setVanta] = useState(0) // vanta va a ser inicializado en "0"

    // En la primera renderización "myRefDiv.current" es igual 
    // a "nulo", el valor inicial
    console.log("myRefDiv.current", myRefDiv.current) // x 2

    // La función de useEffect se va "invocar" ante 
    // la segunda renderización, en ese punto ya va a 
    // contener un valor "myRefDiv.current"
    useEffect(() => {
        console.log("myRefDiv.current (en UseEffect)", myRefDiv.current)

        // Sólo pasa una vez por dentro del if
        // vanta === 0, es igual a "vanta == false" 
        // ... aún más corto, es igual a "!vanta"
        if (!vanta) {
            // SOLO PASA UNA VEZ 
            // Acá vamos a hacer la inicialización de "vanta"
            // Activo el efecto "clouds"
            setVanta(Clouds({
                THREE,
                el: myRefDiv.current
            })) // vanta != 0, es diferente de falso

            console.log("Establezco vanta a un valor diferente de 0")
        }
    }, [vanta]) // Con esto me aseguro que siga funcionando bien
    // si tuviera más variables "use"

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
