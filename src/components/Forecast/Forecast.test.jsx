import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'

const forecastItemList = [
	{ hour: 18, state:"clear", temperature:17, weekDay:"Jueves" },
	{ hour: 6, state:"clouds", temperature:18, weekDay:"Viernes" },
	{ hour: 12, state:"drizzle", temperature:18, weekDay:"Viernes" },
	{ hour: 18, state:"clouds", temperature:19, weekDay:"Viernes" },
	{ hour: 6, state:"rain", temperature:17, weekDay:"Sábado" },
	{ hour: 12, state:"rain", temperature:17, weekDay:"Sábado" }, 
]

test('Forecast render', async () => {
    // ¿Cómo encontrar los items?
    // findAllByTestId nos va a permitir encontrar cada item con esa marca
 
    const { findAllByTestId } = render(
            <Forecast 
                forecastItemList={forecastItemList} />)

    const forecastItems = await findAllByTestId("forecast-item-container")

    expect(forecastItems).toHaveLength(6)
})
