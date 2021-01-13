import React from 'react'
import './assets/cards.scss'

export default function Cards(props){
    return <>
        <div  className="cardTest" >
        <h4>{props.numero}</h4>
        </div>
    </>
}