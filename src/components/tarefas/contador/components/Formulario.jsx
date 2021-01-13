import React from 'react'

export default function Display (props) {
    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input type="number" id="passo" value={props.passo} onChange={e => props.setPasso(+e.target.value)} />
        </div>
    )
}