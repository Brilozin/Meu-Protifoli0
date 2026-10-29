import React, { useState } from 'react'

function Palco() {
     const [resultado,setResultado] = useState()
    function calcularPalco(){
     let somFuncionando  = Number(prompt("O som ta fucionando?, responda 1 pra sim e 2 para não!"))
     let figurinoCompleto = Number(prompt("Tem o figurino completo?, responda 1 pra sim e 2 para não!"))
     if(somFuncionando == 1 && figurinoCompleto == 1){
    setResultado("Palco liberado para Sarumano! Luzes, câmera, ilusão!")
     }
    else if(somFuncionando == 2 && figurinoCompleto == 1) {
        setResultado("Sem som. Realizar apresentação alternativa no salão.")
     }
     if(somFuncionando == 1 && figurinoCompleto == 2){
        setResultado("Faltando parte do figurino. Te vira no improviso!")
     }
     else if(somFuncionando == 2 && figurinoCompleto == 2){
        setResultado( "Apresentação cancelada. Hora da mágica de desaparecer…")
     }
    }
  return (
    <div  className="palco">
        <h2>Abra o Palco</h2>
       <button onClick={calcularPalco}>Abra as cortinas</button>
       {resultado}
    </div>
  )
}

export default Palco
