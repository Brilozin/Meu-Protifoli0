import { useState } from 'react';
import './App.css';

function App() {
  const [saida, setSaida] = useState(0);

  function calcularMedia() {
    let nota1 = Number(prompt("Nota 1:"));
    let nota2 = Number(prompt("Nota 2:"));
    let media = (nota1 + nota2) / 2;
    setSaida(media);
  }

  function rolarDado(lados) {
    const numeroSorteado = Math.floor(Math.random() * lados) + 1;
    setSaida(numeroSorteado);
  }
  function validarSenha(){
    let senhaDigitada = prompt('Digite a senha:')
    const senha = 1234
    
    if (senhaDigitada == senha) {
   setSaida('Acesso permitido✅')
    } else {
      setSaida('Acesso negado❌')
    }
  }
 function validarMaiorNumero (){
    let a = 20;
    let b = 15;
    if ( a >=  b) {
    setSaida(20)
  }

  return (
    <div className="app">
      <h1>Estados!</h1>
      <button onClick={calcularMedia}>Média</button>
      <button onClick={() => rolarDado(6)}>D6</button>
      <button onClick={() => rolarDado(8)}>D8</button>
      <button onClick={() => rolarDado(12)}>D12</button>
      <button onClick={() => rolarDado(20)}>D20</button>
      <button onClick={() => rolarDado(100)}>D100</button>
      <button onClick={validarSenha}>Validar Senha</button>
      <button onClick={validarMaiorNumero}>Maior número</button>
      <p>Resultado: {saida}</p>
    </div>
  );
}
}

export default App;
