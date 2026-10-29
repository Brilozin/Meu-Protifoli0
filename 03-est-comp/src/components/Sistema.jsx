import { useState } from "react"


function Sistema() {
    const[resultado,setResultado]=useState("");
 function AbrirJaulas(){
     let visitantesNaArea= Number(prompt("Quantos visitantes na area?"))
     let horaAtual = Number(prompt("Que horas tem? 0 a 23!"))
     if(visitantesNaArea == 0 && (horaAtual < 8 || horaAtual > 18) ){
    setResultado("Liberação autorizada. Abrindo jaula.")
     }
     else{
        setResultado("Liberação negada. Área em uso ou fora do horário permitido.")
     }
    }
  return (
    <div  className="sistema">
        <h2>Abrir Jaulas já!</h2>
       <button onClick={AbrirJaulas}>jaulas</button>
       {resultado}
    </div>
  )
}

export default Sistema

