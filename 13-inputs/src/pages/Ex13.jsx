import React from 'react'
import { useState } from 'react'
function Ex13() {
      const [inputAlunos, setInputAlunos] = useState('')
      const [inputFuncionarios, setInputFuncionarios] = useState('')
      const [resultado, setResultado] = useState('Digite quantidade de alunos e funcionários e clique em consultar disponibilidade')
       function calcularDisponibilidade() {
    let lugares = 50 - (parseFloat(inputAlunos) + parseFloat(inputFuncionarios))
    setResultado(`Lugares disponíveis: ${lugares}`)
    if(lugares > 0) {
      setResultado(` Há lugares disponíveis.`)
    }
    else {
      setResultado(`Não há lugares disponíveis.`)
    }
  }

  return (
    <div>
      <div className='demo'>
      <h1>Bondinho</h1>
      <label htmlFor="alunos">Alunos</label>
      <input type="text" value={inputAlunos} onChange={(e) => setInputAlunos(e.target.value)} />
      <label htmlFor="funcionarios">Funcionários</label>
      <input type="text" value={inputFuncionarios} onChange={(e) => setInputFuncionarios(e.target.value)} />
      <button onClick={calcularDisponibilidade}> Consultar Disponibilidade</button>
      <p> {resultado} </p>
    </div>
    </div>
  )
}

export default Ex13