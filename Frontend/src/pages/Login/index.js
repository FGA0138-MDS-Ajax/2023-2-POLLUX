import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useUserContext } from "../../context/UserContext";
import instance from "../../services/instance";
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
  const [loading, setLoading] = useState(false); 

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email !== "" && senha !== "") {
      const data = {
        email: email,
        senha: senha,
      };
      setLoading(true); 
      try {
        const response = await instance.post("/login", data);
        if (response.status === 200 && response.data.user) {
          setUser({
            userId: response.data.user._id,
            userName: response.data.user.nome,
            userCurso: response.data.user.curso,
            userAvatar: response.data.user.fotoUrl,
          });
          setLoading(false);
          localStorage.setItem("@userId", response.data.user._id);
          navigate("/Home");
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
        setError("Email ou senha incorretos.");
      }
    } else {
      setError("Preencha todos os campos.");
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

          <p
            className={`error-message ${error ? "shake" : ""}`}
            style={{ display: error ? "block" : "none" }}
          >
            {error}
          </p>

          <SignButton 
            placeholder="Entrar" 
            onClick={handleLogin}
            loading={loading}
               />

          <div className="link-wrapper">
            <Link to="/recuperarsenha" className="link">
              Esqueceu sua senha?{" "}
            </Link>
          </div>
          
        </div>
      </div>

      <div className="right-section">
        <h1 className="gamatrack">GamaTrack</h1>
        <p className="typing-text">Avalie seus professores</p>
        <Link to="/Cadastro" className="register">
          Criar minha conta
        </Link>
      </div>
    </div>
  );
}

export default Login;
