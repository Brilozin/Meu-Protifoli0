import React, { use } from 'react'
import { useState } from 'react'
function Demo() {
    const [inputNota1,setInputNota1] = useState('')
    const [inputNota2,setInputNota2] = useState('')  
    const [resultado,setResultado] = useState('Digite as notas e clique em calcular')
    function calcularMedia(){
let media = (parseFloat(inputNota1) + parseFloat(inputNota2))/2
setResultado(`A média é ${media}`)
    }
  return (
    <div className='demo'>
        <h1>Demo Médias</h1>
         <label htmlFor="nota1">Nota 1</label>
      
      <input type="text"
      value={inputNota1}
      onChange={(e)=> setInputNota1(e.target.value)}
       />
     
       <label htmlFor="nota2">Nota 2</label>
      
      <input type="text"
      value={inputNota2}
      onChange={(e)=> setInputNota2(e.target.value)}
       />
       <button onClick={calcularMedia}>Calcular</button>
      <p>
        {resultado}
      </p>
    </div>
  )
}

export default Demo
