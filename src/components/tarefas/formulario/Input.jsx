import React, { useState } from 'react'
import './assets/input.scss'

export default function Input(props) {
    const [inputTeste, setValor] = useState('Inicial')
    function quandoMudar(e) {
        setValor(e.target.value)
    }
    return (
        <div className='inputTest'>
            <h2>{inputTeste}</h2>
            <div>
            <input value={inputTeste} onChange={quandoMudar} />
            <hr></hr>
            Apenas Leitura
            <input value={inputTeste} readOnly/>
            </div>
        </div>
    )
}