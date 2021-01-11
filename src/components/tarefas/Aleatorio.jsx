import React from 'react'

export default function aleatorio(props){
    const { min, max } = props
    const aleatorio =
        parseInt(Math.random() * (max - min)) + min;
    return (
        <div>
            <p>
                <strong>Valor Mínimo: </strong> {min}
            </p>
            <p>
                <strong>Valor Máximo: </strong> {max}
            </p>
            <p>
                <strong>Sorteio: </strong> {aleatorio}
            </p>
        </div>
    )
}