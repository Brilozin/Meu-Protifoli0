import React, { useState } from 'react'

function TesteGanso() {
    const [resultado,setResultado] = useState()
    function calcularAprovacao(){
        let sabeNadar = Number(prompt("Sabe nadar, responda 1 pra sim e 2 para não!"))
        let idade = Number(prompt("quantos anos vc tem?"))
        let temRecomendacao= Number(prompt("Tem recomendação,responda 1 pra sim e 2 para não!"))
       if(sabeNadar == 1  && idade >= 16){
        setResultado("Aprovado para o navio!")
       }
      else if(sabeNadar == 2 && temRecomendacao == 1 && idade>=14){
        setResultado("Aprovado sob recomendação. Monitorar nas primeiras viagens.")
      }
     else
    setResultado("Reprovado. Volte quando estiver mais preparado para o mar.")
    }
  return (
   <div className="ganso">
    <h2>Capitão Ganso</h2>
    <button onClick={calcularAprovacao}> Teste-Pirata</button>
     {resultado}
   </div>
  )
}

export default TesteGanso