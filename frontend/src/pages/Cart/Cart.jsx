import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { UserContext } from '../../context/UserContext';
import "./Cart.css"
import Swal from 'sweetalert2'
import axios from 'axios'



const Cart = () => {
    const { cart, handleDisminuye, handleIncrementa, handleCalculaTotal, handleVaciaCarro } = useContext(CartContext)
    const { token, usuarioConectado } = useContext(UserContext)

    const createCheckoutPayload = (cart, user) => {
        return { cart, user }
    }
    const createChecout = async (URL, payload, token) => {
        const response = await axios.post(URL,
            payload,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        // console.log('checkout creado ', response.data)
        handleVaciaCarro()
        
        Swal.fire({
            text: 'Compra finalizada exitosamente',
            icon: 'success'
        })
        // return response.data
    }

    const handlePagar = (e) => {
        e.preventDefault()

        try {
            const token = localStorage.getItem('token')
            if (!token) {
                console.error('Error: token no entonctrado')
            }
            const URL = 'http://localhost:5000/api/checkouts'
            const user = usuarioConectado()
            const peyload = createCheckoutPayload(cart, user)
            createChecout(URL, peyload, token)

        } catch (error) {
            console.log('error ', error)
        }
    }
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <h3>Detalles del Pedido</h3>
            {cart.map(pizza =>
                <div className="cardPizza" key={pizza.id}>
                    <div className="imagenTexto">
                        <img src={pizza.img} alt="" />
                        <p className="nombrePizza">{pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}</p>
                    </div>
                    <div className="opciones">
                        <p className="nombrePizza">${pizza.price.toLocaleString()}</p>
                        <button
                            className="btn btn-danger"
                            onClick={() => handleDisminuye(pizza.id)}
                        >-</button>
                        <p className="nombrePizza">{pizza.count}</p>
                        <button
                            className="btn btn-primary"
                            onClick={() => handleIncrementa(pizza.id)}
                        >+</button>
                    </div>
                </div>
            )}
            <h4>Total: {handleCalculaTotal()}</h4>
            <button
                className='btn btn-dark'
                disabled={!token}
                onClick={handlePagar}
            >{!token ? "Inicia sesión para pagar 😵" : "Pagar 🛒"}
            </button>
        </div>
    )
}
export default Cart