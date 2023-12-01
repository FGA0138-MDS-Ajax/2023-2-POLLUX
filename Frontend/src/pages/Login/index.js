import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useUserContext } from "../../context/UserContext";
//styles
import "./styles.css";
//componentes
import Input from "../../components/Input";
import InputPassword from "../../components/InputPassword";
import SignButton from "../../components/SignButton";

function Login() {
  const navigate = useNavigate();
  const { setUser } = useUserContext();

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
          setUser({userId: response.data.user._id, userName:  response.data.user.nome, userCurso: response.data.user.curso});
          localStorage.setItem('@userId', response.data.user._id);
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
          <h1>Bem vindo!</h1>

          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={setEmail}
            error={error}
          />

          <InputPassword
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
        <h1 className="gamatrack">GamaTrack</h1>
        <p className="typing-text">Avalie seus professores</p>
      </div>

    </div>
  );
}

export default Login;
