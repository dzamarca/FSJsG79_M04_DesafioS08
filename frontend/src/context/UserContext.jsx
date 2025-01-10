import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import axios from 'axios'

export const UserContext = createContext()
const UserProvider = ({ children }) => {

  const [token, setToken] = useState(true)
  const [usuario, setUsuario] = useState('')
  // const navigate = useNavigate()

  const registrerUser = async (userEmail, password) => {
    try {
      const url = 'http://localhost:5000/api/auth/register'
      const payload = {
        email: userEmail,
        password
      }
      const user = await axios.post(url, payload)

      localStorage.setItem('email', user.data.email)
      localStorage.setItem('token', user.data.token)
      setToken(true)

      Swal.fire({
        text: 'Registro de usuario exitoso',
        icon: 'success'
      })
    } catch (error) {

      const errorData = error.response.data.error
      Swal.fire({
        text: errorData,
        icon: 'error'
      })
    }
  }

  const login = async (userEmail, password) => {
    try {
      const url = 'http://localhost:5000/api/auth/login'
      const payload = {
        email: userEmail,
        password
      }
      const user = await axios.post(url, payload)

      localStorage.setItem('email', user.data.email)
      localStorage.setItem('token', user.data.token)
      setToken(true)

      Swal.fire({
        text: 'Inicio de sesión exitoso',
        icon: 'success'
      })
    } catch (error) {

      const errorData = error.response.data.error
      Swal.fire({
        text: errorData,
        icon: 'error'
      })
    }
  }

  const usuarioConectado = async () => {
    try {
      const token2 = localStorage.getItem("token");
      if (!token2) return;

      const url = "http://localhost:5000/api/auth/me";
      const config = {
        headers: {
          Authorization: `Bearer ${token2}`,
        },
      };
      const response = await axios.get(url, config);
      const userData = response.data.email;
      setUsuario(userData);
    } catch (error) {
      const errorData = error.response?.data?.error || "Error al obtener los datos del usuario";
      Swal.fire({
        text: errorData,
        icon: "error",
      });
    }

  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    setToken(false);
    setUsuario('')
    Swal.fire({
      text: 'Se ha cerrado la sesión exitosamente',
      icon: 'info'
    })
  }

  const stateGlobal = {
    token,
    logout,
    login,
    registrerUser,
    usuarioConectado,
    usuario
  }

  return (
    <UserContext.Provider value={stateGlobal}>{children}</UserContext.Provider>
  )
}
export default UserProvider