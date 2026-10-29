import { useState } from 'react'
import './App.css'

function App() {
  const [resultado, setresultado] = useState(0)

  function calcularPontos(){
    let vitorias = Number(prompt("Quantas vitórias teve seu time: "))
    let empates = Number(prompt("Quantos empates teve seu time: "))
    let pontos = vitorias * 3 + empates * 1
    alert('O seu time tem: ' + pontos + ' pontos')
  }

  function trocarCalcados(){
    let precoCalcado = Number(prompt('Qual o preço do Calçado: '))
    let quantidadePares = Number(prompt("Qual a quantidade: "))
    let valeTrocas = precoCalcado * quantidadePares
    alert('A empresa vai receber em vales trocas R$ ' + valeTrocas.toFixed(2) + ' reais')
  }

  function verificarFucionarios(){
    let clt, estagiarios, pj, qtdFucionarios
    clt = Number(prompt('Quantos devs clt a empresa possui: '))
    estagiarios = Number(prompt('Quantos devs estagiários a empresa possui: '))
    pj = Number(prompt('Quantos devs PJ a empresa possui: '))

    qtdFucionarios = clt + estagiarios + pj
    alert('A empresa possui: ' + qtdFucionarios + ' devs')
  }

  function calcularFrete(){
    let frete, peso, distancia, volume
    peso = Number(prompt('Qual o peso: '))
    distancia = Number(prompt('Qual a distancia: '))
    volume = Number(prompt('Qual o volume: '))
    frete = 15 + (2 * peso) + (0.05 * distancia) + (10 * volume)
    alert('O valor do Frete é de R$ ' + frete)
  }

  function testar (){
    let nome = prompt('Qual o seu nome: ')
    alert(nome + ', seu nome está na boca do sapo 🐸 ')
  }

  function calcularEstoqueLaranjas() {
    let qtdInicial = Number(prompt("Qual a quantidade inicial de laranjas: "))
    let qtdFinal = Number(prompt("Qual a quantidade final de laranjas: "))
    let vendidas = qtdInicial - qtdFinal
    alert('Foram vendidas ' + vendidas + ' laranjas no dia.')
  }

  function calcularCustosIgreja() {
    let custoMensal = Number(prompt("Qual o custo mensal da igreja: "))
    let doacoesDia = Number(prompt("Quanto foi recebido de doações e dízimos hoje: "))
    let faltaPagar = custoMensal - doacoesDia
    alert('Falta R$ ' + faltaPagar.toFixed(2) + ' para pagar totalmente os custos mensais.')
  }

  function calcularSalarioJunin() {
    let salarioMensal = Number(prompt("Qual o salário mensal do Junin: "))
    let diasTrabalhados = Number(prompt("Quantos dias ele trabalha no mês: "))
    let salarioDiario = salarioMensal / diasTrabalhados
    let salarioSemanal = salarioDiario * 5 

    alert('Junin recebe R$ ' + salarioDiario.toFixed(2) + ' por dia trabalhado.\n' +
          'Salário semanal (escala 5x2): R$ ' + salarioSemanal.toFixed(2))
  }

  function calcularPesoCarga() {
    let pesoBrutoTotal = Number(prompt('Qual o peso na balança (Caminhão + Carga): '))
    let tara = Number(prompt('Qual a tara do caminhão (Peso vazio): '))
    let pesoCarga = pesoBrutoTotal - tara

    alert('O peso somente da carga é de: ' + pesoCarga + ' kg')
  }

  function calcularChances(){
    let chance, vezesNoCelular
    vezesNoCelular = Number(prompt("Quantas vezes o candidato mexeu no celular? "))
    chance = (0.1 / (1 + 500 * vezesNoCelular)) * 100
    alert('As chances do candidato são de: ' + chance.toFixed(5) + '%')
  }

  function calcularLucro(){
    let totalBruto, premiacoes, presentesAgrados, comissoes, lucro
    totalBruto = Number(prompt('Qual o total bruto de hoje: '))
    premiacoes = Number(prompt('Qual as premiacões de hoje: '))
    presentesAgrados = Number(prompt('Qual o gasto com presentes e agrados de hoje: '))
    comissoes = Number(prompt('Qual as comissões de hoje: '))
    lucro = totalBruto - (premiacoes + presentesAgrados + comissoes) 
    alert('O lucro foi de : ' + lucro)
  }

  function calcularDados (){
    let suprimentosMercadorias, vendaIngressos, vendaItens, lucroReal, lucroPercentual
    suprimentosMercadorias = Number(prompt('Quanto foi gasto com suprimentos e mercadorias: '))
    vendaIngressos = Number(prompt('Quanto foi arrecadado em venda de ingressos: '))
    vendaItens = Number(prompt('Quanto foi o faturamento em venda de ítens.'))
    lucroReal = (vendaIngressos + vendaItens) - suprimentosMercadorias
    lucroPercentual = (lucroReal / vendaItens) * 100
    alert('Lucro Real é: ' + lucroReal.toFixed(2))
    alert('Lucro percentual é: ' + lucroPercentual.toFixed(2) + '%')
  }

  function calcularGastos (){
    let shows, qtdBombas, precoBomba, calculoGastos
    shows = Number(prompt('Quantos shows a serem feitos: '))
    qtdBombas = 7
    precoBomba = Number(prompt('Qual o preço das bombas de fumaça a serem compradas: '))

    calculoGastos = (precoBomba * qtdBombas * shows)
  
    alert('A quantidade de shows na agenda é: ' + shows + ' shows')
    alert('Total a ser investido no show R$ ' + calculoGastos.toFixed(2))
  }

  function calcularResto(){
    let salario, moradia, agua, luz, internet, gasolina, streamings, telefone, outros, restoSalario
    salario = Number(prompt('Qual seu salário:'))
    moradia = Number(prompt('Quanto gasta com moradia: '))
    agua = Number(prompt('Quanto gasta com agua: '))
    luz = Number(prompt('Quanto gasta com luz: '))
    internet = Number(prompt('Quanto gasta com internet: '))
    gasolina = Number(prompt('Quanto gasta com gasolina: '))
    streamings = Number(prompt('Quanto gasta com streamings: '))
    telefone = Number(prompt('Quanto gasta com telefone: '))
    outros = Number(prompt('Quanto gasta com outros: '))

    restoSalario = salario - (moradia + agua + luz + internet + gasolina + streamings + telefone + outros) 
    alert('Sobrou do salário R$ ' + restoSalario)
  }

  function calcularValorObra (){
    let valordeCompradeObra, precoRevenda
    valordeCompradeObra = Number(prompt('Por quanto comprou ela: '))
    precoRevenda = (valordeCompradeObra * 3)
    alert('O valor de venda deve ser R$ ' + precoRevenda)
  }

  function calcularPreco (){
    let peso, precoPromocao, valorRacao, pesoQuilo
    peso = Number(prompt('Qual o peso da ração (em gramas): '))
    precoPromocao = 10.00
    valorRacao = precoPromocao * peso
    pesoQuilo = valorRacao / 1000
    alert('O valor da sua compra de raçao foi de R$ ' + pesoQuilo.toFixed(2))
  }

  function calcularChurrasco (){
    const taxaConsumo = {
      carne: 0.5,
      cerveja: 1.0,
      agua: 0.5,
      refri: 0.2
    }

    let qtdPessoa = Number(prompt('Qual a quantidade de pessoas: '))
    let taxaTotalPorPessoa = taxaConsumo.carne + taxaConsumo.cerveja + taxaConsumo.agua + taxaConsumo.refri
    let valorDoChurras = taxaTotalPorPessoa * qtdPessoa 
    alert('O total de suprimentos para o Churras foi de: ' + valorDoChurras + ' unidades/kg no total.')
  }

  function calcularDobro(){
    let numero = Number(prompt('Digite um número: '))
    let dobro = numero * 2
    setresultado(dobro)
  }

  return (
    <div className="cont-app">
      <h1>Painel de Cálculos</h1>
      <h2>Resultado do Dobro: {resultado}</h2>
      
      <button onClick={calcularPontos}>Calcular Pontos</button>
      <button onClick={trocarCalcados}>Trocar Calçados</button>
      <button onClick={verificarFucionarios}>Verificar Funcionários</button>
      <button onClick={calcularFrete}>Calcular Frete</button>
      <button onClick={calcularEstoqueLaranjas}>Estoque de Laranjas</button>
      <button onClick={calcularCustosIgreja}>Custos da Igreja</button>
      <button onClick={calcularSalarioJunin}>Salário do Junin</button>
      <button onClick={calcularPesoCarga}>Peso da Carga</button>
      <button onClick={calcularChances}>Calcular Chances</button>
      <button onClick={calcularLucro}>Calcular Lucro</button>
      <button onClick={calcularDados}>Calcular Dados</button>
      <button onClick={calcularGastos}>Calcular Gastos</button>
      <button onClick={calcularResto}>Calcular Resto Salário</button>
      <button onClick={calcularValorObra}>Valor da Obra</button>
      <button onClick={calcularPreco}>Preço da Ração</button>
      <button onClick={calcularChurrasco}>Calcular Churrasco</button>
      <button onClick={calcularDobro}>Calcular Dobro</button>
      <button onClick={testar}>Testar Nome 🐸</button>
    </div>
  )
}

export default App
