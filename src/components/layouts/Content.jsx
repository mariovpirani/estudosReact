import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Calculadora from '../../views/Calculadora/Calculadora'
import Home from '../../views/Home'
import Param from '../../views/Params'
import NotFound from '../../views/NotFound'
import Cards from '../basics/Cards'
import Aleatorio from '../tarefas/Aleatorio'
import ParOuImpar from '../tarefas/ParOuImpar'
import Familia from '../tarefas/familia/Familia'
import FamiliaDinamica from '../tarefas/familia/FamiliaDinamica'
import Membros from '../tarefas/familia/membros/Membros'
import Alunos from '../tarefas/alunos/Alunos'
import AlunosTabela from '../tarefas/alunos/AlunosTabela'
import BemVindo from '../tarefas/BemVindo'
import DiretaPai from '../tarefas/comunicacao/DiretaPai'
import IndiretaPai from '../tarefas/comunicacao/IndiretaPai'
import Input from '../tarefas/formulario/Input'
import './assets/content.scss'
import Contador from '../tarefas/contador/Contador'
import ContadorNovo from '../tarefas/contador/ContadorNovo'
import Megasena from '../tarefas/megasena/Index'

export default function content() {
    return (
        <div className='content'>
            <Switch>
                <Route path="/calculadora">
                    <Calculadora />
                </Route>
                <Route exact path="/contador">
                    <Contador numeroInicial={100} />
                </Route>
                <Route exact path="/megasena">
                    <Megasena />
                </Route>
                <Route path="/contador/novo">
                    <ContadorNovo numeroInicial={50} />
                </Route>
                <Route path="/alunos/tabela">
                    <AlunosTabela />
                </Route>
                <Route exact path="/alunos">
                    <Alunos />
                </Route>
                <Route path="/comunicacaodireta">
                    <DiretaPai />
                </Route>
                <Route path="/comunicacaoindireta">
                    <IndiretaPai />
                </Route>
                <Route path="/input">
                    <Input />
                </Route>
                <Route path="/familia/dinamica">
                    <FamiliaDinamica sobrenome="Oeste">
                        <Membros nome="Mario"></Membros>
                        <Membros nome="Paulo"></Membros>
                        <Membros nome="Fabio"></Membros>
                    </FamiliaDinamica>
                </Route>
                <Route exact path="/familia">
                    <Familia sobrenome="Silva" />
                </Route>
                <Route path="/aleatorio">
                    <div className="cards">
                        <Cards titulo="Sorteio" borderTop="#E94C6F" border="#E94C6F">
                            <Aleatorio min={1} max={60} />
                        </Cards>
                        <Cards titulo="Sorteio" borderTop="#4169E1">
                            <Aleatorio min={1} max={60} />
                        </Cards>
                        <Cards titulo="Sorteio">
                            <Aleatorio min={1} max={60} />
                        </Cards>
                    </div>
                </Route>
                <Route path="/bemvindo">
                    <BemVindo usuario={{nome: 'Mario'}}/>
                    <BemVindo />
                </Route>
                <Route path="/parouimpar">
                    <ParOuImpar numero={2} />
                    <ParOuImpar numero={3} />
                </Route>
                <Route path="/cards">
                    <Cards titulo="Exemplo de Card">
                        teste
                    </Cards>
                </Route>
                <Route path="/param/:id">
                    <Param />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </div>
    )
}