import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//styles
import "./styles.css";
//componentes
import InputPassword from "../../components/InputPassword";
import SignButton from "../../components/SignButton";

function RecuperarSenha() {
  const [senha, setSenha] = useState("");
  const [senhaConfirm, setSenhaConfirm] = useState("");
  const [error, setError] = useState("");

  const redefinirSenha = () => {};

  return (
    <div className="reset-password-container">
      <div className="form-container">
        <h1>Insira sua nova senha</h1>

        <InputPassword
          type="password"
          name="senha"
          placeholder="Nova senha"
          onChange={setSenha}
        ></InputPassword>

        <InputPassword
          type="password"
          name="senha"
          placeholder="Confirmar nova senha"
          onChange={setSenhaConfirm}
        />
        
        <p
          className={`error-message ${error ? "shake" : ""}`}
          style={{ display: error ? "block" : "none" }}
        >
          {error}
        </p>

        <SignButton placeholder="Redefinir senha" />
      </div>
    </div>
  );
}

export default RecuperarSenha;
