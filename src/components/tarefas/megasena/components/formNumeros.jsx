import React from 'react'

export default function FormNumeros(props) {
    return (
        <div>
            <input type="number" id="formnumeros" value={props.numero} onChange={e => props.setQuantidade(+e.target.value)} />
        </div>
    )
}