import React from 'react'
import alunos from '../../../data/alunos'
import './assets/alunos.scss'

export default function Alunos() {
    const listaAlunos = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>{aluno.id} {aluno.nome} -{'>'} {aluno.nota}  </li>
        )
    })
    return (
        <div className="alunos">
            <ul>
                {listaAlunos}
            </ul>
        </div>
    )
}