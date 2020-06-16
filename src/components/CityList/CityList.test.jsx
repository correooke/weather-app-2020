import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CityList from './CityList' // SUT 

const cities = [
    { city: "Buenos Aires", country: "Argentina", countryCode: "AR"},
    { city: "Bogotá", country: "Colombia", countryCode: "CO"},
    { city: "Madrid", country: "España", countryCode: "ES"},
    { city: "Ciudad de México", country: "México", countryCode: "MX"},
]

test("CityList renders", async () => {
    // AAA Arrange Act Assert

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={() => {}} />)

    const items = await findAllByRole("button")

    expect(items).toHaveLength(4)
})

test("CityList click on item", async () => {
    // Debemos simular una acción del usuario: click sobre un item
    // Para eso vamos a utilizar una función "mock"
    const fnClickOnItem = jest.fn()

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole("button")

    // Ahora, para simular la acción, vamos a utilizar fireEvent
    // fireEvent es parte de la librería testing-library/react

    fireEvent.click(items[0])

    // ¿Ahora que tuvo que suceder?
    // Se debió llamar a la función fnClickOnItem UNA única vez

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})