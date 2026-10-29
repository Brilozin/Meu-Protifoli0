import React from 'react'
import { useState } from 'react'
function Ex0081() {
    const [inputPneu1,setInputPneu1] = useState('')
    const [inputPneu2,setInputPneu2] = useState('')
    const [resultado,setResultado] = useState('Digite as pressões e clique em calcular')
    function calcularPressao(){
        let media = (inputPneu1)-(inputPneu2)
        setResultado(`A diferença de pressão é: ${media}`)
    }
  return (
    <div className='demo'>
        <h1>SBC - Sistemas de Bombeamento Computadorizados.</h1>
         <label htmlFor="pneu-1">Pressão desejada</label>
      
      <input type="text"
      value={inputPneu1}
      onChange={(e)=> setInputPneu1(e.target.value)}
       />

        <label htmlFor="pneu-2">Pressão Lida</label>
      
      <input type="text"
      value={inputPneu2}
      onChange={(e)=> setInputPneu2(e.target.value)}
       />
       <button onClick={calcularPressao}>Calcular</button>
       {resultado}
    </div>
  )
}

export default Ex0081
