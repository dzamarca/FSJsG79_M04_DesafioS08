import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Profile = () => {
    const {logout} = useContext(UserContext)
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className=" box d-flex justify-content-center align-items-center mt-2 radius">
                <div className="boxImage"></div>
                <div className="boxInside d-flex flex-column justify-content-center  align-items-center ">
                    <div className="boxProfile"></div>
                    <p>Usuario: <strong>dzamarca@gmail.com</strong></p>
                    <NavLink to='/login'>
                        <button className="btn btn-dark" onClick={logout}>Cerrar sesion 🏠🍕</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Profile