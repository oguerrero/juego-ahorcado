import React from 'react'

export default function AddWord(props) {
    let word
    function saveWord() {
        word = document.getElementById("word").value
        if (word.length > 8) {
            alert("LA PALABRA NO PUEDE TENER MAS DE 8 LETRAS")
            return
        }
        if (word.length > 2) {
            alert("LA PALABRA NO PUEDE MENOS DE 2 LETRAS")
            return
        }
        props.handleAdd(word.toUpperCase())
        props.handleClick('menu')
    }
    return (
        <div className='change-word'>
            <input type="text" name="word" id="word" maxLength="8" className='word-text' placeholder='Ingresa una palabra' />
            <div className="container">
                <div className='word-buttons'>
                    <p className='letter-max'>
                    <span className="material-symbols-outlined info-icon">
                        info
                    </span>
                        Maximo 8 letras
                    </p>
                    <button onClick={saveWord} className="btn-word" >Guardar y empezar</button>
                    <button onClick={props.handleClick} value="menu" className='btn-cancel'>Cancelar</button>
                </div>
            </div>
        </div>
    )   
}