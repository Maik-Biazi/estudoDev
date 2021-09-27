import { useState } from "react"
import './signin.css'
import logo from '../../assets/logo.png'


function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className="container-center">
            <div className="login">
                <div className="logo-area">
                    <img src={logo} alt="Sistema logo" />
                </div>
                <form action="">
                    <h1>Entrar</h1>
                    <input type="text" placeholder="email@email.com"/>
                    <input type="password" placeholder="*********"/>
                    <button></button>
                </form>
            </div>
        </div>
    );
}

export default SignIn
