import React from 'react'

export default function membros(props){
    return (
        <div>
        <strong>{props.nome}</strong> {props.sobrenome}
        </div>
    )
}