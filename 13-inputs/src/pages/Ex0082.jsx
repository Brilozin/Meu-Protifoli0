import React from 'react'
import { useState } from 'react'

function Ex0082() {
    const [inputNumero1,setInputNumero1] = useState('')
    const [inputNumero2,setInputNumero2] = useState('')
    const [inputNumero3,setInputNumero3] = useState('')
    const [inputNumero4,setInputNumero4] = useState('')
    const [inputNumero5,setInputNumero5] = useState('')
    const [resultado,setResultado] = useState('Digite um número e clique em sortear')
    
    function sortearNumeros(){
        let numeros = [inputNumero1,inputNumero2,inputNumero3,inputNumero4,inputNumero5]
        let numeroSorteado = numeros[Math.floor(Math.random() * numeros.length)]
        
        // Agora o nome da variável está correto!
        let risadas = "ho ".repeat(Number(numeroSorteado))
        setResultado(risadas)
    }

  return (
    <div className='demo'>
        <h1>Ho Ho Ho</h1>
         <label htmlFor="numero-1">Número 1</label>
      
      <input type="text"
      value={inputNumero1}
      onChange={(e)=> setInputNumero1(e.target.value)}
       />

        <label htmlFor="numero-2">Número 2</label>
      
      <input type="text"
      value={inputNumero2}
      onChange={(e)=> setInputNumero2(e.target.value)}
       />

       
        <label htmlFor="numero-3">Número 3</label>
      
      <input type="text"
      value={inputNumero3}
      onChange={(e)=> setInputNumero3(e.target.value)}
       />

       
        <label htmlFor="numero-4">Número 4</label>
      
      <input type="text"
      value={inputNumero4}
      onChange={(e)=> setInputNumero4(e.target.value)}
       />

       <label htmlFor="numero-5">Número 5</label>
      
      <input type="text"
      value={inputNumero5}
      onChange={(e)=> setInputNumero5(e.target.value)}
       />
      
       <button onClick={sortearNumeros}>Sortear Números</button>
       <br />
       {resultado}
    </div>
  )
}

export default Ex0082

