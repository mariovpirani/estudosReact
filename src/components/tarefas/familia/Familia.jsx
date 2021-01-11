import React from 'react'
import Membros from './membros/Membros'

export default function familia(props){
    return (
        <div>
            <Membros nome="Mario" sobrenome={props.sobrenome}></Membros>
            <Membros nome="Mario" {...props}></Membros>
            <Membros nome="Mario" sobrenome="Veiga"></Membros>
        </div>
    )
}