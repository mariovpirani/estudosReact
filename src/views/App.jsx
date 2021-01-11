import React from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import Content from '../components/layouts/Content'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

export default () => (
    <div id="app">
        <Router>
            <Header></Header>
            <Container>
                <Content />
            </Container>
        </Router>
        <Footer></Footer>
    </div>
)