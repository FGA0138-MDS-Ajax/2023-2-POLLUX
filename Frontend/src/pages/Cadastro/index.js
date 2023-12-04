import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import instance from "../../services/instance";
//styles
import "../Login/styles.css";
import check from "../../assets/images/check.png";
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
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorSemester, setErrorSemester] = useState(false);
  const [sendValue, setSendValue] = useState(false);
  const [loading, setLoading] = useState(false);
  const defaultAvatarUrl = require("../../assets/images/404.gif").default;

  const navigate = useNavigate();

  useEffect(() => {
    setError("");
    setErrorEmail(false);
    setErrorSemester(false);
    setErrorPassword(false);
  }, [nome, email, curso, periodo, senha, confirmedSenha]);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (email == "" && senha == "") {
      setErrorPassword(false);
      setError("Preencha todos os campos.");
      return;
    }

    const isAlunoUnbEmail = /^[0-9]{9}@aluno.unb.br$/.test(email);

    if (!isAlunoUnbEmail) {
      setErrorEmail(true)
      setError("Insira um e-mail válido. Ex: 123456789@aluno.unb.br")
      return;
    }

    const semesterPattern = /^20[0-9]{2}.[1-2]$/.test(periodo);

    if (!semesterPattern) {
      setErrorSemester(true)
      setError("Insira um semestre válido. Ex: 2021.2")
      return;
    }

    if (senha.length<8) {
      setErrorPassword(true)
      setError("A senha deve ter mais de 8 caracteres.")
      return;
    }

    if (!/\d/.test(senha)) {
      setErrorPassword(true)
      setError("A senha deve ter pelo menos um número.")
      return;
    }

    if (senha !== confirmedSenha) {
      setError("As senhas não coincidem.");
      setErrorPassword(true);
      return;
    }

    setLoading(true);

    const data = {
      email: email,
      senha: senha,
      nome: nome,
      curso: curso,
      periodo: periodo,
      fotoUrl: defaultAvatarUrl,
    };

    try {
      const response = await instance.post("/usuario", data);

      if (response.status === 201) {
        setLoading(false);
        setSendValue(true);
        setTimeout(() => {
          navigate("/");
        }, 4000);
      }
    } catch (error) {
      setLoading(false);
      setError("Este email já está registrado. Tente outro.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="left-section">
        <div className="form-container">
          { !sendValue ? (
            <>
              <h1>Crie sua conta</h1>
          <Input
            type="text"
            name="nome"
            placeholder="Nome"
            onChange={setNome}
          />

          <Input
            type="text"
            nome="email"
            placeholder="Email universitário"
            onChange={setEmail}
            error={errorEmail}
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
            error={errorSemester}
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

          <SignButton
            placeholder="Criar"
            onClick={handleRegister}
            loading={loading}
          />

          <div className="link-wrapper">
            Já possui uma conta?{" "}
            <Link to="/" className="link">
              Entrar
            </Link>
          </div>
            </>
          ) : (
            <div className="success">
              <h1>Enviamos um link de verificação para o seu email!</h1>
              <img src={check}></img>
              <p>Aguarde alguns instantes e faça a verificação.</p>
              <div className="link-wrapper">
                <Link to="/" className="link">
                  Retornar para a página de login
                </Link>
              </div>
            </div>
          )}
          
        </div>
      </div>
      <div className="right-section">
        <h1>GamaTrack</h1>
        <p>Avalie seus professores</p>
        <Link to="/" className="register">
          Já possuo uma conta
        </Link>
      </div>
    </div>
  );
}

export default Cadastro;
