import React from 'react'

export default function parouImpar(props){
    const isParouImpar = props.numero % 2 === 0
    return (
        <div>
            {props.numero} é 
            { isParouImpar ?
                <span> Par</span> :
                <span> Ímpar</span>
            }
        </div>
    )
}