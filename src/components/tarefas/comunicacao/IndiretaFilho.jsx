import React from 'react'

export default function indiretaFilho (props) {
    const qC =  props.quandoClicar
    const min = 50
    const max = 70
    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min
    const gerarNerd = () => Math.random() > 0.5
    return (
        <div>
            <button onClick={_ => { qC('João', gerarIdade, gerarNerd)}}
            >Clique para gerar Pai</button>
        </div>
    )
}