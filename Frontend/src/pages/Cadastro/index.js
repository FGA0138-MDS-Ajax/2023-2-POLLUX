import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
//styles
import "../Login/styles.css";
import femaleCharacter from "../../assets/images/female-character.jpg";
import loginImage from "../../assets/images/login-image-1.jpg";
//components
import Input from "../../components/Input";
import InputPassword from "../../components/InputPassword";
import SignButton from "../../components/SignButton";
import DropDown from "../../components/DropDown";

function Cadastro() {
  const cursos = [
    "Aeroespacial",
    "Automotiva",
    "Eletrônica",
    "Energia",
    "Software",
  ];

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [curso, setCurso] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmedSenha, setConfirmedSenha] = useState("");

  const [error, setError] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (email !== "" && senha !== "") {
      if (senha !== confirmedSenha) {
        setError("As senhas não coincidem.");
        setErrorPassword(true);
        return;
      }

      const data = {
        email: email,
        senha: senha,
        nome: nome,
        curso: curso,
        periodo: periodo,
      };

      try {
        const response = await axios.post(
          "http://localhost:3000/usuario",
          data
        );
        if (response.status === 201) {
          alert("Enviamos um email de confirmação para você.");
          navigate("/");
        }
      } catch (error) {
        console.error(error);
        setError("Este email já está registrado. Tente outro.");
      }
    } else {
      setErrorPassword(false);
      setError("Preencha todos os campos.");
    }
  };

  return (
    <div className="login">
      <div className="left-section">
        <div className="form-container">
          <h1 className="signup-title">Crie sua conta</h1>

          <Input
            type="text"
            name="nome"
            placeholder="Nome"
            onChange={setNome}
          />

          <Input
            type="text"
            nome="email"
            placeholder="Email"
            onChange={setEmail}
          />

          <DropDown
            options={cursos}
            defaultOption="Selecione seu curso"
            onChange={setCurso}
          />

          <Input
            name="periodo"
            placeholder="Período de entrada"
            onChange={setPeriodo}
          />

          <InputPassword
            type="password"
            name="senha"
            placeholder="Senha"
            onChange={setSenha}
            error={errorPassword}
          />

          <InputPassword
            type="password"
            name="confirmedSenha"
            placeholder="Confirmar senha"
            onChange={setConfirmedSenha}
            error={errorPassword}
          />

          <p
            className={`error-message ${error ? "shake" : ""}`}
            style={{ display: error ? "block" : "none" }}
          >
            {error}
          </p>

          <SignButton placeholder="Criar" onClick={handleRegister} />

          <p className="sign-text">
            Já possui uma conta?{" "}
            <Link to="/" className="sign-link">
              Entrar
            </Link>
          </p>
        </div>
      </div>
      <div className="right-section">
        <h1>GamaTrack</h1>
        <p>Avalie seus professores</p>
      </div>
    </div>
  );
}

export default Cadastro;
