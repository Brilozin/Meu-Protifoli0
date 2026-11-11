
import React from 'react'
import { useState } from 'react'

function Ex87() {
    const [inputAlcool, setInputAlcool] = useState('')
    const [inputGasolina, setInputGasolina] = useState('')
    const [inputDiesel, setInputDiesel] = useState('')

    const [totalAlcool, setTotalAlcool] = useState(0)
    const [totalGasolina, setTotalGasolina] = useState(0)
    const [totalDiesel, setTotalDiesel] = useState(0)

    function venderAlcool() {
        let quantidade = Number(inputAlcool)
        setTotalAlcool(totalAlcool + quantidade)
        setInputAlcool('')
    }

    function venderGasolina() {
        let quantidade = Number(inputGasolina)
        setTotalGasolina(totalGasolina + quantidade)
        setInputGasolina('')
    }

    function venderDiesel() {
        let quantidade = Number(inputDiesel)
        setTotalDiesel(totalDiesel + quantidade)
        setInputDiesel('')
    }

    return (
        <div className='demo'>
            <h1>Tipos de combustível</h1>

            <label htmlFor="alcool">Álcool</label>
            <input
                type="number"
                id="alcool"
                value={inputAlcool}
                onChange={(e) => setInputAlcool(e.target.value)}
            />
            <button onClick={venderAlcool}>Vender</button>
            <p>Total vendido: {totalAlcool} L</p>

            <label htmlFor="gasolina">Gasolina</label>
            <input
                type="number"
                id="gasolina"
                value={inputGasolina}
                onChange={(e) => setInputGasolina(e.target.value)}
            />
            <button onClick={venderGasolina}>Vender</button>
            <p>Total vendido: {totalGasolina} L</p>

            <label htmlFor="diesel">Diesel</label>
            <input
                type="number"
                id="diesel"
                value={inputDiesel}
                onChange={(e) => setInputDiesel(e.target.value)}
            />
            <button onClick={venderDiesel}>Vender</button>
            <p>Total vendido: {totalDiesel} L</p>

            <h2>
                Total geral: {totalAlcool + totalGasolina + totalDiesel} L
            </h2>
        </div>
    )
}

export default Ex87
