import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Game from './components/Game';
import AddWord from './components/AddWord';
import Menu from './components/Menu';
import React, {useState} from 'react';

function App() {

  const [page, setPage] = useState('menu')
  const [words, setWords] = useState(["HTML", "REACT", "NODEJS", "ANGULAR", "CSS", "APACHE"])

  function handleClick(event) {
    if (event === "menu") {
      setPage("menu")
      return
    }
    const value = event.target.value;
    if (value === "menu") {
      setPage("menu")
    }
    if (value === "init") {
        setPage('init')
    }
    if (value === "add") {
        setPage('add')
    }  
  }

  function handleAdd(newWord) {
    setWords(prevWords => [...prevWords, newWord])
  }

  return (
    <div>
      <Navbar />
      {page === "menu" && (
        <Menu handleClick={handleClick} />
      )}
      {page === "init" && (
        <Game handleClick={handleClick} words={words} />
      )}
      {page === "add" && (
        <AddWord handleClick={handleClick} handleAdd={handleAdd} />
      )}
      <Footer />
    </div>
  );
}

export default App;
