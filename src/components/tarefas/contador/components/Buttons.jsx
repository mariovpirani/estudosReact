import React from 'react'

export default function Buttons (props) {
    return (
        <div>
            <button onClick={props.diminuir}>-</button> <button onClick={props.aumentar}>+</button>
        </div>
    )
}