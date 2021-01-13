import React, { Component } from 'react'

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
    alteraPasso = (e) => {
        this.setState({
            passo: +e.target.value
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
            <h3>{this.state.numero}</h3>
            <div>
                <label htmlFor="passoInput">Passo: </label>
                <input type="number" id="passo" value={this.state.passo} onChange={this.alteraPasso} />
            </div>
            <button onClick={this.dim}>-</button> <button onClick={this.inc}>+</button>
            </div>
        )
    }
}

export default Contador