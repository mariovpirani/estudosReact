import React from 'react'
import './assets/header.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Menu from './Menu'
import Logo from './Logo';

export default function Header() {
    return (
        <div className="header">
            <Container>
            <Row>
                <Col className="text-center"><Logo /></Col>
            </Row>
            <Row>
                <Col><Menu /></Col>
            </Row>
            </Container>
        </div>
    )
}