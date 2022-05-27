import React, {useState, useEffect} from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Game(props) {
    let selectedWord = props.words[Math.floor(Math.random() * props.words.length)];
    const [game, setGame] = useState(selectedWord);
    const [guess, setGuess] = useState(game.replace(/[A-Z]/g, "_"));
    const [arrayGuess, setArrayGuess] = useState([]);
    function newGame() {
        const newSelectedWord = props.words[Math.floor(Math.random() * props.words.length)];
        if (newSelectedWord !== game) {
            setGame(newSelectedWord);
            setGuess(newSelectedWord.replace(/[A-Z]/g, "_"));
            setArrayGuess([]);
        }else{
            newGame();
        }
    }
    useEffect(() => {
        var c = document.getElementById("gameCanvas");
        var ctx = c.getContext("2d");
        if (arrayGuess.length === 0) {
            ctx.clearRect(0, 0, c.width, c.height);
        }
        if (arrayGuess.length === 1) {
            ctx.strokeStyle = '#444';
            ctx.lineWidth = 10; 
            ctx.beginPath();
            ctx.moveTo(175, 225);
            ctx.lineTo(5, 225);
            ctx.moveTo(40, 225);
            ctx.lineTo(25, 5);
            ctx.lineTo(100, 5);
            ctx.lineTo(100, 25);
            ctx.stroke();
        }
        if (arrayGuess.length === 2) {
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.arc(100, 50, 25, 0, Math.PI*2, true);
            ctx.closePath();
            ctx.stroke();
        }
        if (arrayGuess.length === 3) {
            ctx.beginPath();
            ctx.moveTo(100, 75);
            ctx.lineTo(100, 140);
            ctx.stroke();
        }
        if (arrayGuess.length === 4) {
            ctx.beginPath();
            ctx.moveTo(100, 85);
            ctx.lineTo(60, 100);
            ctx.stroke();    
        }
        if (arrayGuess.length === 5) {
            ctx.beginPath();
            ctx.moveTo(100, 85);
            ctx.lineTo(140, 100);
            ctx.stroke();
            
        }
        if (arrayGuess.length === 6) {
            ctx.beginPath();
            ctx.moveTo(100, 140);
            ctx.lineTo(80, 190);
            ctx.stroke();
        }
        if (arrayGuess.length === 7) {
            ctx.beginPath();
            ctx.moveTo(82, 190);
            ctx.lineTo(70, 185);
            ctx.stroke();
        }
        if (arrayGuess.length === 8) { 
            ctx.beginPath();
            ctx.moveTo(100, 140);
            ctx.lineTo(125, 190);
            ctx.stroke();
        }
        if (arrayGuess.length === 9) {
            ctx.beginPath();
            ctx.moveTo(122, 190);
            ctx.lineTo(135, 185);
            ctx.stroke();
        }
      }, [arrayGuess]);
    
    function guessLetter(event) {
        const word = event.target.value.toUpperCase();
        let answ = guess.split("");
        if (arrayGuess.length >= 9){
            toast('Perdiste :c', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            setGuess(game)
            return;
        }
        if (word) {
            const indexes = [];
            for (let i = 0; i < game.length; i++) {
                if (game[i] === word) {
                    indexes.push(i);
                }
            }
            if (indexes.length === 0) {
                setArrayGuess(prevWords => [...prevWords, event.target.value.toUpperCase()]);
            }
            for (let i = 0; i < indexes.length; i++) {
                answ[indexes[i]] = word;
            }
            setGuess(answ.join(""));
            if (answ.join("") === game) {
                toast('Ganaste c:', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                return
            }
            return;
        }
    }
    function giveUp() {
        setGuess(game)
    }

    return (    
        <div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className='change-word'>
                <canvas id='gameCanvas' width={300} height={250} />
                <p className='guess'>{guess}</p>
                <p className='array-guess'>{arrayGuess}</p>
                <input type="text" autoComplete='off' onChange={guessLetter}  name="word" id="word" maxLength='1' className='word-text' placeholder="_" />
                <div className="container-guess">
                    <div className='word-buttons'>
                        <button onClick={newGame} className="btn-word" >Nuevo Juego</button>
                        {game === guess ? 
                        <button onClick={props.handleClick} value="menu" className='btn-cancel'>Salir</button> :
                        <button onClick={giveUp} value="menu" className='btn-cancel'>Rendirse</button>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )   
}