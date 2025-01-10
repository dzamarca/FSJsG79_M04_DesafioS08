import { Link } from 'react-router-dom';

const NotFound = () => {
    return (

        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className=" box d-flex justify-content-center align-items-center mt-2 radius">
                <div className="boxImage"></div>
                <div className="boxInside d-flex flex-column justify-content-center  align-items-center ">
                    <h1>Ups algo salió mal</h1>
                    <h3>🍕😖😵🍕</h3>
                    <Link to='/'>
                        <button className='btn btn-dark'>Regresar a Home 🏠🍕</button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default NotFound