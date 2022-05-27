import React from 'react'

export default function Menu(props) {
    return (
        <div className='menu'>
            <button className='btn-ini' onClick={props.handleClick} value="init">Iniciar Juego</button>
            <button className='btn-add' onClick={props.handleClick} value="add">Agregar Nueva Palabra</button>
        </div>
    )   
}