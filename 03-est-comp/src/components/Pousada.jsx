import { useState } from "react"

function Pousada() {
    const[conta, setConta] = useState()
    function calcularValor(){
        let dias = Number(prompt("Quantos dias?"))
        let valorDiaria
        if(dias <= 5){
            valorDiaria = 100
        }else if(dias <= 10){
            valorDiaria = 90
        }else {
            valorDiaria = 80
        }
        let totalBruto = dias * valorDiaria
        let descontos = totalBruto * 25/100
        let multa = 150
        let totalPagar = totalBruto - descontos + multa
        setConta("Vai pagar: R$" + totalPagar)

    }

  return (
    <div className='pousada'>
        <h2>Pousada, oba!!</h2>
        <button onClick={calcularValor}>Fechar Conta</button>
        {conta}
        {/* 1: perguntar quantos dias vai ficar */}
        {/* 2: descobrir o valor da diária */}
        {/* 3: calcular total bruto */}
        {/* 4: calcular descontos e multa*/}
        {/* 5: calcular total a pagar */}
        {/* 6: mostrar resultados */}
    </div>
  )
}

export default Pousada