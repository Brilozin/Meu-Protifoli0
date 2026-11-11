
import React from 'react'
import { useState } from 'react'

function Pum() {
    const [quantidade, setQuantidade] = useState('')
    const [resultado, setResultado] = useState('')

    function gerarPum() {
        let numero = Number(quantidade)
        let lista = []

        if (numero <= 0 || quantidade === '' || !Number.isInteger(numero)) {
            setResultado('Digite uma quantidade válida')
            return
        }

        for (let i = 1; i <= numero; i++) {
            let n = (i - 1) * 4 + 1

            lista.push(`${n} ${n + 1} ${n + 2} PUM`)
        }

        setResultado(lista.join('\n'))
    }

    return (
        <div className='demo'>
            <h1>Beecrowd 1142 - PUM</h1>

            <label htmlFor="quantidade">
                Quantidade de PUMs
            </label>

            <input
                type="number"
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
            />

            <button onClick={gerarPum}>Gerar</button>

            <pre>{resultado}</pre>
        </div>
    )
}

export default Pum
