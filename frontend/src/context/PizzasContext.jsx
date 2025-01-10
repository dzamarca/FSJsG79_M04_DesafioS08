import { createContext, useEffect, useState } from 'react'

export const PizzasContext = createContext()

const PizzasProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([])
    const URL = 'http://localhost:5000/api/pizzas'
    useEffect(() => {
        const loadPizzas = async () => {
            const res = await fetch(URL)
            const data = await res.json()
            setPizzas(data)
        }
        loadPizzas()
    }, [])

    return (
        <PizzasContext.Provider value={pizzas}>
            {children}
        </PizzasContext.Provider>
    )
}

export default PizzasProvider