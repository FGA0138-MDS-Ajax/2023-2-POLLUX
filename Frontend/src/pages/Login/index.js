import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
//styles
import "./styles.css";
import femaleCharacter from "../../assets/images/female-character.jpg";
//componentes
import Input from "../../components/Input";
import SignButton from "../../components/SignButton";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (email !== '' && senha !== '') {
      const data = {
        email: email,
        senha: senha
      };
  
      try {
        const response = await axios.post('http://localhost:3000/login', data);
        if(response.status === 200){
          Navigate('/Home');
        }
      } catch (error) {
        console.error(error);
        setError('Email ou senha incorretos.');
      }
      
    } else {
      setError('Preencha todos os campos.');
    }
  };
  

  return (
    <div className="login">
      <div className="left-section">
        <div className="form-container">
        <h1>Bem Vindo!</h1>

        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={setEmail}
        />

        <Input
          type="password"
          name="senha"
          placeholder="Senha"
          onChange={setSenha}
        />

        <p className={`error-message ${error ? 'shake' : ''}`} style={{ display: error ? "block" : "none"}}>{error}</p>
      
        <SignButton placeholder="Entrar" onClick={handleLogin} />

        <p className="sign-up-text">
          Não possui uma conta?{" "}
          <Link to="/Cadastro" className="link">
            Registre-se
          </Link>
        </p>
        </div>
      </div>

      <div className="right-section">
        <img src={femaleCharacter}></img>
      </div>

    </div>
  );
}

export default Login;
