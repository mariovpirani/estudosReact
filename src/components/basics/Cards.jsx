import React from 'react'
import './assets/cards.scss'

export default function Cards(props){
    const cardStyle = {
        borderColor: props.border || '#000',
        borderTopColor: props.borderTop || '#000',
        backgroundColor: props.color || '#fff',
        color: props.fontColor || '#000'
    }
    return <>
        <div  className="cardTest" style={cardStyle}>
        <h4>{props.titulo}</h4>
        <div className="mb-2 text-muted">{props.subtitulo}</div>
           {props.children}
        </div>
    </>
}