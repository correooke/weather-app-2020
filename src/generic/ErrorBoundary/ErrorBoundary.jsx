import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            activo: false
        }
    }

    estaActivo = () => {
        return this.state.activo ? "Activo" : "No activo"
    }

    onClickHandler = () => {
        // setState
        // this.state.activo = true
        this.setState({ activo: true })
    }

    componentDidMount() {
        console.log("El componente se ha montado")
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("Estado previo:", prevState.activo)
        console.log("Estado nuevo:", this.state.activo)
        console.log("El componente se ha actualizado")
    }
    
    componentWillUnmount() {
        console.log("El componente se ha montado")
    }
    
    
    render() {
        return (
            <div>
                <button onClick={this.onClickHandler}>
                    Activar
                </button>
                <h1>
                    ErrorBoundary {this.props.saludo}
                    {
                        this.estaActivo()
                    }
                </h1>
            </div>

        )
    }
}

export default ErrorBoundary