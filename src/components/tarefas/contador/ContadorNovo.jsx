import React, { Component } from 'react'
import Buttons from './components/Buttons'
import Display from './components/Display'
import Formulario from './components/Formulario'

class Contador extends Component {
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }
    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }
    alteraPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }
    dim = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }
    render() {
        return (
            <div>
            <h2>Contador</h2>
            <h3><Display numero={this.state.numero} /></h3>
            <Formulario passo={this.state.passo} setPasso={this.alteraPasso} />
            <Buttons aumentar={this.inc} diminuir={this.dim} />
            </div>
        )
    }
}

export default Contador