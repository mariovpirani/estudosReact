import React, { useState } from 'react'
import If from '../../basics/If'
import IndiretaFilho from './IndiretaFilho'

export default function IndiretaPai(props){
    const [nome, SetNome] = useState('?')
    const [idade, SetIdade] = useState(0)
    const [nerd, SetNerd] = useState(false)

    function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
        SetNome(nomeParam)
        SetIdade(idadeParam)
        SetNerd(nerdParam)
    }
    return (
        <div>
            <If test={nome !== '?'}>
                <span>{nome}</span> - 
                <span>{idade}</span> - 
                <span>{nerd ? ' Verdadeiro' : 'Falso'}</span>
            </If>
            <IndiretaFilho quandoClicar={fornecerInformacoes} />
        </div>
    )
}