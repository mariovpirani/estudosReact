import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap/';
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div className="Menu">
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto transparent">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/megasena">Megasena</Link></Nav.Link>
                    <Nav.Link><Link to="/calculadora">Calculadora</Link></Nav.Link>
                    <NavDropdown title="Tarefas" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to="/cards">Cards</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/bemvindo">Bem vindo </Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/parouimpar">Par ou Ímpar </Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to="/aleatorio">Sorteio</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to="/familia">Família</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to="/familia/dinamica">Família Dinâmica</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item ><Link to="/alunos">Alunos</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to="/alunos/tabela">Alunos na Tabela</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item ><Link to="/comunicacaodireta">Comunicão Direta</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to="/comunicacaoindireta">Comunicão Indireta</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to="/input">Componente Controlado (Input)</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to="/contador/novo">Novo Contador</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to="/contador">Contador</Link></NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Parâmetros" id="basic-nav-dropdown2">
                        <NavDropdown.Item ><Link to="/param/1">Param 01</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to="/param/2">Param 02</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}