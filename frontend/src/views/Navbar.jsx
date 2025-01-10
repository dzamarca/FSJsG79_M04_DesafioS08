import { Container, Navbar as NavbarAlias, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import {UserContext} from '../context/UserContext';

const Navbar = () => {
  const {handleCalculaTotal} = useContext(CartContext)
  const {token,logout} = useContext(UserContext)
  const botones = (token ?
    (<>
      <NavLink to='/profile'>
        <button className="me-2 btn btn-dark border-light">🔓Profile</button>
      </NavLink>
      <NavLink to='login'>
        <button className="me-2 btn btn-dark border-light" onClick={logout}>🔒Logount</button>
      </NavLink>
    </>) :
    (<>
      <NavLink to='/login'>
        <button className="me-2 btn btn-dark border-light">🔐Login</button>
      </NavLink>
      <NavLink to='/register'>
        <button className="me-2 btn btn-dark border-light">🔐Registrer</button>
      </NavLink>
    </>)
  )

  return (
    <>
      <NavbarAlias expand="lg" bg="dark" className='justify-content-between' data-bs-theme="dark">
        <Container>
          <NavbarAlias.Brand >¡Pizzeria Mamma Mia!</NavbarAlias.Brand>
          <NavbarAlias.Toggle aria-controls="basic-navbar-nav" />
          <NavbarAlias.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to='/'>
                <button className="me-2 btn btn-dark border-light">🍕Home</button>
              </NavLink>
              {botones}
            </Nav>
            <Nav className='justify-content-end'>
              <NavLink to='/cart'>
                <button className='btn btn-dark border-light'>🛒Total: ${handleCalculaTotal()}</button>
              </NavLink>
            </Nav>
          </NavbarAlias.Collapse>
        </Container>
      </NavbarAlias>
    </>
  )
}

export default Navbar