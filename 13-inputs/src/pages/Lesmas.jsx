
import React from 'react'
import { useState } from 'react'

function Lesmas() {
    const [velocidade, setVelocidade] = useState('')
    const [resultado, setResultado] = useState('Digite a velocidade da lesma')

    function classificar() {
        let valor = Number(velocidade)

        if (velocidade === '' || valor < 0) {
            setResultado('Digite uma velocidade válida')
        } else if (valor <= 10) {
            setResultado('Nível 1 - Lesma lenta')
        } else if (valor <= 20) {
            setResultado('Nível 2 - Lesma média')
        } else {
            setResultado('Nível 3 - Lesma rápida')
        }
    }

    return (
        <div className='demo'>
            <h1>Beecrowd 1789 - A corrida de lesmas</h1>

            <label htmlFor="velocidade">
                Velocidade da lesma
            </label>

            <input
                type="number"
                id="velocidade"
                value={velocidade}
                onChange={(e) => setVelocidade(e.target.value)}
            />

            <button onClick={classificar}>Classificar</button>

            <p>{resultado}</p>
        </div>
    )
}

export default Lesmas
