import React from 'react'
import alunos from '../../../data/alunos'
import './assets/alunos.scss'
import { Table, Alert } from 'react-bootstrap'

export default function alunosTabela(props) {
    function listaAlunos () {
        return alunos.map((aluno) => {
            return (
            <tr key={aluno.id}>
                <td>{aluno.id} </td>
                <td>{aluno.nome}</td>
                <td>{aluno.nota}</td>
                <td><Alert variant={aluno.nota < 6 ? 'danger' : 'success'}>{aluno.nota < 6 ? 'Reprovado' : 'Aprovado'}</Alert> </td>
            </tr> 
            )
        })
    }
    return (
        <div className="alunos">
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Aluno</th>
                    <th>Nota</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {listaAlunos()}
                </tbody>
                </Table>
        </div>
    )
}