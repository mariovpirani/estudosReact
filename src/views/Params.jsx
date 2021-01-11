import React from 'react'
import { useParams } from 'react-router-dom'

const Param = props => {
    const { id } = useParams()
    return (
        <div className="parametros">
            { id } - Enviado via Parâmetro
        </div>
    )
}
export default Param