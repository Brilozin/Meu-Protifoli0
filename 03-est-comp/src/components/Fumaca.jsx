import React, { useState } from 'react'

function Fumaca() {
     const [resultado,setResultado] = useState()
    function calcularFumaca(){
     let criancas = Number(prompt("Há crianças por perto? responda 1 pra sim e 2 para não!"))
     let vento = Number(prompt("Quantos Km de vento tá?"))
     if(criancas == 2 && vento >= 0.5){
    setResultado("Fumaça liberada. Que comecem os mistérios!")
     }
     else{
        setResultado("Fumaça bloqueada. Aguardar condições ideais.")
     }
    }
  return (
    <div  className="fumaca">
        <h2>Fumaça Vai!</h2>
       <button onClick={calcularFumaca}>Fumaça-Magico</button>
       {resultado}
    </div>
  )
}

export default Fumaca



