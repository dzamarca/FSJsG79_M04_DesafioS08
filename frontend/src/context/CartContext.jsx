import { createContext, useState } from "react";
import { pizzaCart } from "../assets/js/pizzas"
import { setearValor } from "../assets/utils/funciones"

export const CartContext = createContext()

const CardProvider = ({ children }) => {
    const [cart, setCart] = useState(pizzaCart)

    const handleIncrementa = (id) => setCart(
        (cart) => {
            return cart.map((pizza) =>
                pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
            )
        }
    )

    const handleDisminuye = (id) => setCart(
        (cart) => {
            return cart.map((pizza) =>
                pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
            ).filter((pizza) => pizza.count > 0)
        }
    )

    const handleAgrega = (pizza) => setCart(
        (cart) => {
            const indexPizza = cart.findIndex(item => item.id.toUpperCase() === pizza.id.toUpperCase());
            //Si la pizza existe aumenta la cantidad en 1
            if (indexPizza !== -1) {
                const updatedCart = [...cart]
                updatedCart[indexPizza] = {
                    ...updatedCart[indexPizza],
                    count: updatedCart[indexPizza].count + 1,
                }
                return updatedCart
            } else {
                //En caso de no existir agrega una pizza nueva al array
                return [...cart, {
                    id: pizza.id.toUpperCase(),
                    name: pizza.name,
                    price: pizza.price,
                    count: 1,
                    img: pizza.img
                }]
            }
        }
    )

    const handleCalculaTotal = () => {
        return setearValor(
            cart.reduce((sum, pizza) => sum + pizza.price * pizza.count, 0)
        )
    }

    const stateGlobal = {
        cart,
        handleIncrementa,
        handleDisminuye,
        handleAgrega,
        handleCalculaTotal
    }
    return <CartContext.Provider value={stateGlobal}>{children}</CartContext.Provider>
}

export default CardProvider