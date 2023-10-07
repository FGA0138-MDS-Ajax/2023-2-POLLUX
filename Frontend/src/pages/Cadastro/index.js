import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
//styles
import '../Login/styles.css'
import femaleCharacter from "../../assets/images/female-character.jpg"
//components
import Input from "../../components/Input"
import SignButton from "../../components/SignButton"
import DropDown from '../../components/DropDown'

function Cadastro () {
    const cursos = ["Aeroespacial", "Automotiva", "Eletrônica", "Energia", "Software"]

    return (
        <div className="login">
             <div className="left-section">
                <h1 className="signup-title">Crie sua conta</h1>
                <Input placeholder="Nome"></Input>
                <Input placeholder="Email"></Input>
                <DropDown options={cursos} defaultOption='Selecione seu curso'></DropDown>
                <Input placeholder="Período de entrada"></Input>
                <Input placeholder="Senha"></Input>
                <Input placeholder="Confirmar senha"></Input>
                <SignButton placeholder="Criar"></SignButton>
                <p>Já possui uma conta? <Link to='/Login' className='link'>Entrar</Link></p>
            </div>
            <div className="right-section">
                <img src={femaleCharacter}></img>
            </div>
        </div>
    )
}

export default Cadastro

