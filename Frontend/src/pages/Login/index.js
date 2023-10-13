import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';
//styles
import './styles.css'
import femaleCharacter from '../../assets/images/female-character.jpg'
//componentes
import Input from "../../components/Input"
import SignButton from "../../components/SignButton"

function Login () {

    const [email, setEmail] = useState(''); 
    const [senha, setSenha] = useState(''); 

    const handleLogin = async (e) => {
        e.preventDefault()
        console.log(email, senha)

        const response = await axios.get('http://localhost:3002/login', {
            email,
            senha
        });
        console.log(response);
        
    }

    return (
        <div className="login">
            <div className="left-section">
                <h1>Bem Vindo!</h1>

                <Input 
                type='email'
                name='email'
                placeholder='Email' 
                onChange={setEmail}
                />
                <Input
                type='password'
                name='senha'
                placeholder='Senha'
                onChange={setSenha}
                />
                <SignButton
                placeholder='Entrar'
                onClick={handleLogin}
                />

                <p>Não possui uma conta? <Link to='/Cadastro' className='link'>Registre-se</Link></p>
            </div>
            <div className="right-section">
                <img src={femaleCharacter}></img>
            </div>
        </div>
    )
}

export default Login; 
    