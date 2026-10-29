import React, { useState } from 'react'

function Ganso() {
    const [resultado,setResultado] = useState()
    function calcularProvissoes(){
        let marujos = Number(prompt("quantos marujos?"))
        let comida = Number(prompt("quantos quilos de comida?"))
        let comidaPorMarujo =(comida/marujos)
        if(marujos >= 10 && comidaPorMarujo >= 1.5){
        setResultado("Provisões suficientes. Rumo ao horizonte!")
        }
        else{
            setResultado("Algo está errado. Posseidom não quer ninguém no mar hoje.")
        }
    }
  return (
   <div className="ganso">
    <h2>Capitão Ganso</h2>
    <button onClick={calcularProvissoes}> Ganso-provisões</button>
     {resultado}
   </div>
  )
}

export default Ganso
