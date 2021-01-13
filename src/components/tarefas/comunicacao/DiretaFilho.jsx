import React from 'react'

export default function diretaFilho (props) {
    return (
        <div>
            <div>Nome: {props.nome}</div>
            <div>Idade: {props.idade}</div>
            <div>Nerd: {props.nerd ? 'Verdadeiro' : 'Falso'}</div>
            <hr />
        </div>
    )
}