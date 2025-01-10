import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { UserContext } from '../../context/UserContext';
import "./Cart.css"

const Cart = () => {
    const { cart, handleDisminuye, handleIncrementa, handleCalculaTotal } = useContext(CartContext)
    const {token} = useContext(UserContext)
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
            >{!token ? "Inicia sesión para pagar 😵" : "Pagar 🛒"} 
            </button>
        </div>
    )
}
export default Cart