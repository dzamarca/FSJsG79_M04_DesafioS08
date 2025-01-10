import { useContext, useState } from "react"
import { Form } from "react-bootstrap"
import "./login.css"
import Swal from 'sweetalert2'
import { UserContext } from "../../context/UserContext"


const LoginPage = () => {
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")

    const {login} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!mail || !password) {
            Swal.fire({
                text: 'Debe llenar todos los campos',
                icon: 'error'
            });
            return
        }
        if (password.length < 6) {
            Swal.fire({
                text: 'La contraseña debe tener 6 caracteres o más',
                icon: 'error'
            });
            return
        }

        login(mail,password);

        // Swal.fire({
        //     text: 'Inicio de sesión exitoso',
        //     icon: 'success'
        // });
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className=" box d-flex justify-content-center align-items-center mt-2 radius">
                <div className="boxImage"></div>
                <div className="boxInside d-flex justify-content-center align-items-center ">
                    <Form onSubmit={handleSubmit}>
                        <p className="titulo">Login</p>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="mail@dominio.com"
                                onChange={(e) => setMail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="******"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <button className="btn btn-dark" type="submit">
                            Login
                        </button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage