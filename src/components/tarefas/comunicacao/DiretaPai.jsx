import React from 'react'
import DiretaFilho from './DiretaFilho'

export default function diretaPai(props){
    return (
        <div>
            <DiretaFilho nome="Mario Veiga" idade={20} nerd={true} />
            <DiretaFilho nome="Gabriel" idade={17} nerd={false} />
        </div>
    )
}