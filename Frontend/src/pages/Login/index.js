import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
//styles
import "./styles.css";
import femaleCharacter from '../../assets/images/female-character.jpg'
import loginImage from '../../assets/images/login-image-1.jpg'
//componentes
import Input from "../../components/Input";
import SignButton from "../../components/SignButton";

function Login() {
  const navigate = useNavigate();

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
        if (response.status === 200 && response.data.user) { 
        //como eu guardei o id dele, eu preciso de uma funcao que retorna o usuorio pelo id
          localStorage.setItem('@userId', response.data.user._id);
          console.log('ID do usuário:', response.data.user._id); // Imprime o ID do usuário no console
          navigate('/Home');
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
            error={error}
          />

          <Input
            type="password"
            name="senha"
            placeholder="Senha"
            onChange={setSenha}
            error={error}
          />

          <p className={`error-message ${error ? 'shake' : ''}`} style={{ display: error ? "block" : "none"}}>{error}</p>
        
          <SignButton placeholder="Entrar" onClick={handleLogin} />

          <p className="sign-text">
            Não possui uma conta?{" "}
            <Link to="/Cadastro" className="sign-link">
              Registre-se
            </Link>
          </p>
        </div>
      </div>

      <div className="right-section">
        <img src={loginImage}></img>
      </div>

    </div>
  );
}

export default Login;
