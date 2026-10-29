import { useState } from "react";

function Comando() {
     const[resultado,setResultado]=useState("");
    function validarAcesso(){
     let crachaValido = Number(prompt("O crachá é valido?, responda 1 pra sim e 2 para não!"))
     let digitalReconhecida = Number(prompt("A digital foi reconhecida?, responda 1 pra sim e 2 para não!"))
     if(crachaValido == 1 && digitalReconhecida == 1 ){
    setResultado("Acesso liberado ao Centro de Comando")
     }
     else if(crachaValido == 2 && digitalReconhecida ==1){
        setResultado("Crachá inválido. Dirija-se à recepção")
     }
      if(crachaValido == 1 && digitalReconhecida == 2 ){
    setResultado( "Falha na digital. Tente novamente ou chame o suporte")
     }
     else if(crachaValido == 2 && digitalReconhecida ==2){
        setResultado( "Acesso negado. Verifique sua identificação.")
    }
}
  return(
    <div  className="acesso">
        <h2>Validar Acesso</h2>
       <button onClick={validarAcesso}>acesso</button>
       {resultado}
    </div>
  )
}

export default Comando