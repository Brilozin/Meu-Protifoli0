import React, { useState } from 'react'

function Eventos() {
     const [resultado,setResultado] = useState()
    function calcularEventos(){
     let doenca = Number(prompt("Vc esta gripado? responda 1 pra sim e 2 para não!"))
     let tempoViagem = Number(prompt(" Qual o tempo da viagem?,de preferencia em minutos!"))
     if(doenca == 2 && tempoViagem <= 45){
    setResultado("Viagem autorizada. Rumo ao show!")
     }
     else{
        setResultado( "Deslocamento inviável. Melhor recusar este evento.")
     }
    }
  return (
    <div  className="eventos">
        <h2>Deslocamento de Viagens</h2>
       <button onClick={calcularEventos}>Eventos Já!</button>
       {resultado}
    </div>
  )
}

export default Eventos
