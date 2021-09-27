import { useState } from "react"
import {Link} from 'react-router-dom'
import './signin.css'
import logo from '../../assets/logo.png'


function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className="contianer">
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={logo} alt="Sistema logo" />
                </div>
                <form>
                    <h1>Entrar</h1>
                    <input type="text" placeholder="email@email.com"/>
                    <input type="password" placeholder="*********"/>
                    <button type="submit">Acessar</button>
                </form>
                <Link to="/register">Criar uma conta</Link>
            </div>
        </div>
        </div>
    );
}

export default SignIn
