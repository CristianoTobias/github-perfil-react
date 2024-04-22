import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0)
    const [materiaB, setMateriaB] = useState(0)
    const [materiaC, setMateriaC] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log("The component started!")
        return () => {
            console.log("The component finished!")
        }
    }, [])

    const renderResult = () => {
        const soma = materiaA + materiaB + materiaC
        const media = soma / 3
        return media >= 7 ? (<p>Olá {name}, você foi aprovado</p>) : (<p>Olá {name}, voce não foi aprovado!</p>)

    }
    const alterName = (e) => {
        setName(estadoAnterior => {
            return e.target.value
        })

    }
    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => <li key={item}>{item}</li>)}
            </ul>
            <input type="text" placeholder="Name" onChange={alterName} /> <br />
            <input type="number" placeholder="Materia A" onChange={e => setMateriaA(parseInt(e.target.value))} />
            <input type="number" placeholder="Materia B" onChange={e => setMateriaB(parseInt(e.target.value))} />
            <input type="number" placeholder="Materia C" onChange={e => setMateriaC(parseInt(e.target.value))} />
            {renderResult()}
        </form>
    )
}

export default Formulario