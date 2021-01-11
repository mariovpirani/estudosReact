import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
    return (
        <>
          <Link to="/"><img src="/imagens/logo.png" /></Link>
        </>
    )
}