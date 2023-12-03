import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//styles
import "../Login/styles.css";
//componentes
import Input from "../../components/Input";
import SignButton from "../../components/SignButton";

function RecuperarSenha() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="login">
      <div className="left-section">
        <div className="form-container">
          
          <h1>Insira seu email</h1>

          <Input
            type="text"
            nome="email"
            placeholder="Email"
            onChange={setEmail}
          />

          <SignButton placeholder="Enviar link de recuperação" />

          <div className="link-return">
            <Link to="/" className="link">
              Retornar para a página de login{" "}
            </Link>
          </div>

          <p></p>
        </div>
      </div>

      <div className="right-section">
        <h1>GamaTrack</h1>
        <p>Avalie seus professores</p>
        <Link to="/Cadastro" className="register">
          Criar minha conta
        </Link>
      </div>
    </div>
  );
}

export default RecuperarSenha;
