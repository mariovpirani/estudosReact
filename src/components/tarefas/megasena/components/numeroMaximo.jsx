import React from 'react'

export default function NumeroMaximo(props) {
    return (
        <div>
            <input type="number" id="formmaximo" value={props.numero} onChange={e => {
                props.setMaximo(+e.target.value)
                props.setNumeros(+e.target.value)
              }
            } />
        </div>
    )
}