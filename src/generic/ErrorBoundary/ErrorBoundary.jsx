import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            error: false
        }
    }
    static getDerivedStateFromError(error) {
        return { error }
    }
    render() {
        return (
            <>
            {
                this.state.error ?
                <h1>Sucedió un error: {this.props.error}</h1> : this.props.children
            }
            </>
        )
    }
}

export default ErrorBoundary