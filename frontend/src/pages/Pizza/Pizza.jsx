import { useState, useEffect } from "react"
import CardPizza from "../../components/CardPizza/CardPizza"
import { useParams } from "react-router-dom"

const Pizza = () => {
    const [pizzaUnitaria, setPizzaUnitaria] = useState([])
    const { id } = useParams()
    const URL = `http://localhost:5000/api/pizzas/${id}`

    useEffect(() => {
        const loadPizza = async () => {
            const res = await fetch(URL)
            const data = await res.json()
            setPizzaUnitaria([data])
        }
        loadPizza()
    }, [])

    return (
        <div className='boxCards'>
            {pizzaUnitaria.map(pizza => (
                <div key={pizza.id} className="d-flex justify-content-center mb-4 col-12 col-md-6 col-lg-4">
                    <CardPizza
                        pizza={pizza}
                        id={pizza.id}
                        name={pizza.name}
                        price={pizza.price}
                        ingredients={pizza.ingredients}
                        img={pizza.img}
                        desc={pizza.desc}
                    />
                </div>
            ))}
        </div>
    )
}

export default Pizza