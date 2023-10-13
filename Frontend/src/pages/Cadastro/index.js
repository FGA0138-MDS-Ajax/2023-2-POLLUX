import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
//styles
import '../Login/styles.css'
import femaleCharacter from "../../assets/images/female-character.jpg"
//components
import Input from "../../components/Input"
import SignButton from "../../components/SignButton"
import DropDown from '../../components/DropDown'

function Cadastro () {
    const cursos = ["Aeroespacial", "Automotiva", "Eletrônica", "Energia", "Software"]

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [curso, setCurso] = useState('')
    const [periodo, setPeriodo] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmedSenha, setConfirmedSenha] = useState('')

    const handleRegister = async (e) => {
        e.preventDefault()

        if(senha != confirmedSenha){
            console.log('As senhas não coincidem!!')
            return
        }

        console.log('Tudo certo :)) ', nome, email, curso, periodo, senha)
    }

    return (
        <div className="login">
             <div className="left-section">
                <h1 className="signup-title">Crie sua conta</h1>

                <Input 
                type='text'
                name='nome'
                placeholder="Nome"
                onChange={setNome}
                />
                <Input 
                type='email'
                nome='email'
                placeholder="Email"
                onChange={setEmail}
                />
                <DropDown 
                options={cursos} 
                defaultOption='Selecione seu curso'
                onChange={setCurso}
                />
                <Input 
                name='periodo'
                placeholder="Período de entrada"
                onChange={setPeriodo}
                />
                <Input 
                type='password'
                name='senha'
                placeholder="Senha"
                onChange={setSenha}
                />
                <Input 
                type='password'
                name='confirmedSenha'
                placeholder="Confirmar senha"
                onChange={setConfirmedSenha}
                />
                <SignButton 
                placeholder="Criar"
                onClick={handleRegister}
                />

                <p>Já possui uma conta? <Link to='/Login' className='link'>Entrar</Link></p>
            </div>
            <div className="right-section">
                <img src={femaleCharacter}></img>
            </div>
        </div>
    )
}

export default Cadastro
