import React, { useState } from 'react'

function Ex86() {
  const [inputNota1, setInputNota1] = useState('')
  const [inputNota2, setInputNota2] = useState('')
  const [resultado, setResultado] = useState('Digite as notas e clique em calcular')

  function calcularMedia() {
    let media = (parseFloat(inputNota1) + parseFloat(inputNota2)) / 2

    if (media >= 7) {
      setResultado(`Aprovado com sucesso! Média: ${media}`)
    } else if (media >= 4 && media < 7) {
      setResultado(`Recuperação. Média: ${media}`)
    } else if (media < 4) {
      setResultado(`Reprovado. Média: ${media}`)
    }
  }

  return (
    <div className='demo'>
      <h1>Aprovado ou Reprovado</h1>
      <label htmlFor="nota1">Nota 1</label>
      <input type="text" value={inputNota1} onChange={(e) => setInputNota1(e.target.value)} />
      <label htmlFor="nota2">Nota 2</label>
      <input type="text" value={inputNota2} onChange={(e) => setInputNota2(e.target.value)} />
      <button onClick={calcularMedia}>Calcular</button>
      <p> {resultado} </p>
    </div>
  )
}

export default Ex86