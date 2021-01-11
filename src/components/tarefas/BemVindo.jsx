import React from 'react'
import If, { Else } from '../basics/If'

export default function bemvindo(props){
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario.nome}>
            Seja bem vindo(a), <strong> {usuario.nome} </strong>
                <Else test={!usuario.nome}>
                Seja bem vindo(a), <strong> Amigão </strong>
                </Else>
            </If>
            
        </div>
    )
}