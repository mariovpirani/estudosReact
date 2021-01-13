import React, { useState } from 'react'
import FormNumeros from './components/formNumeros'
import NumeroMaximo from './components/numeroMaximo'
import CardNumber from './components/cardNumber'
import Button from 'react-bootstrap/Button'

export default function Megasena(){
    const [quantidade, changeQuantidade] = useState(6)
    const [maximo, changeMaximo] = useState(60)
    const [numeros, setNumeros] = useState(Array())
    const lista = numeros.map((numero) => {
        return (
            <CardNumber key={numero} numero={numero} />
        )
    })
    function setQuantidade(e) {
        changeQuantidade(e)
    }
    function setMaximo(e) {
        changeMaximo(e)
    }
    function gerarNumeroAleatorios() {
        var numerosGerados = []
        while (numerosGerados.length < quantidade) {
            var aleatorio = Math.floor(Math.random() * maximo)
            if (numerosGerados.indexOf(aleatorio) === -1) {
                numerosGerados.push(aleatorio)
            }
        }
        setNumeros(numerosGerados.sort((n1, n2) => n1 - n2))
    }
    return (
        <div>
            <h3>Megasena</h3>
            <strong>Quantidade de números</strong> <FormNumeros numero={quantidade} setQuantidade={setQuantidade} /><br />
            <strong>Número máximo</strong> <NumeroMaximo numero={maximo} setMaximo={setMaximo} /><br />
            <h3>Números Gerados</h3>
            <div className="cards">
                {lista}
            </div>
            <hr />
            <Button className="btn btn-success" onClick={gerarNumeroAleatorios} >Sortear Número</Button>
        </div>
    )
}