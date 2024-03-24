import {useState} from 'react';
import {FiCheck} from 'react-icons/fi';
import './style.css';

function App() {

    const [input, setInput]= useState('')

    function handleSearch(){
      if(input ===''){
        alert("Preencha o campo de votação.");

        return;
      } else if (input === '1') {
        alert("Você votou na opção 1");
        return;
      } else if (input === '2') {
        alert("Você votou na opção 2");
        return;
      } 
       else if (input === '3') {
      alert("Você votou na opção 3");
      return;
    }else {
        alert("Opção inválida");
        return;
      }
    }

  return (
    <div className="container">
      <h1 className="title">VOTAÇÃO</h1>

    <div className="containerInput">
      <input 
      type="text"
      placeholder="Assinale a opção desejada:"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />

      <button className="buttonSearch" onClick={handleSearch}>
        <FiCheck size={25} color="black"/> 
      </button>
      </div>

      <main className="main">
        <h2>Opções disponíveis:</h2>

        <span>Opção 1: Marketing </span>
        <span>Opção 2: Programação </span>
        <span>Opção 3: Educação emocional </span>

      </main>

      </div>
  );
}

export default App;
