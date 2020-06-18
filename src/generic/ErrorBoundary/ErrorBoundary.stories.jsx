import React from 'react'
import ErrorBoundary from './ErrorBoundary'

export default {
    title: "ErrorBoundary",
    component: ErrorBoundary
}

const ComponentWithoutError = () => <h1>Sin error</h1>

const prop = undefined
const ComponentWithError = () => <h1>{prop.hola}</h1>

export const ErrorBoundaryWithError = () => (
    <ErrorBoundary>
        <ComponentWithError />
    </ErrorBoundary>
)

export const ErrorBoundaryWithoutError = () => (
    <ErrorBoundary>
        <ComponentWithoutError />
    </ErrorBoundary>
)