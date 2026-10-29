import React, { useState } from 'react'

function Transporte() {
     const [resultado,setResultado] = useState()
    function calcularTransporte(){
     let emManutencao = Number(prompt("Esta em manutencao?, responda 1 pra sim e 2 para não!"))
     let emergenciaAtiva = Number(prompt("Tem alguma emergencia?, responda 1 pra sim e 2 para não!"))
     if(emManutencao == 2 && emergenciaAtiva == 2 ){
    setResultado("Transporte liberado para uso.")
     }
     else{
        setResultado("Transporte indisponível por motivo de segurança.")
     }
    }
  return (
    <div  className="transporte">
        <h2>Transporte Interno!</h2>
       <button onClick={calcularTransporte}>transporte</button>
       {resultado}
    </div>
  )
}

export default Transporte