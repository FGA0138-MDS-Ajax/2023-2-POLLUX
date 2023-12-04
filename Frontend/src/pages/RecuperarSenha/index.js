import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import instance from "../../services/instance";
//styles
import "../Login/styles.css";
import check from "../../assets/images/check.png";  
//componentes
import Input from "../../components/Input";
import SignButton from "../../components/SignButton";

function RecuperarSenha() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); //
  const [emailEnviado, setEmailEnviado] = useState(false);

  const enviarLink = async () => {
    if (email !== "") {
      const data = {
        email: email,
      };

      setLoading(true);

      try {
        const response = await instance.post("/inserir-email", data);
        if (response.status === 200) {
          setLoading(false);
          setEmailEnviado(true);
        }
      } catch (error) {
        setLoading(false);
        setError("Email não encontrado.");
      }
    } else {
      setError("Preencha todos os campos.");
    }
  };

  return (
    <div className="login">
      <div className="left-section">
        <div className="form-container">
          {!emailEnviado ? (
            <>
              <h1>Insira seu email</h1>

              <Input
                type="text"
                nome="email"
                placeholder="Email"
                onChange={setEmail}
              />

              <p
                className={`error-message ${error ? "shake" : ""}`}
                style={{ display: error ? "block" : "none" }}
              >
                {error}
              </p>

              <SignButton
                placeholder="Enviar link de recuperação"
                onClick={enviarLink}
                loading={loading}
              />
            </>
          ) : (
            <div className="success">
              <h1>Enviamos um link de recuperação de senha para o seu email!</h1>
              <img src={check}></img>
              <p>Aguarde alguns instantes e a redefina.</p>
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
        <Link to="/Cadastro" className="register">
          Criar minha conta
        </Link>
      </div>
    </div>
  );
}

export default RecuperarSenha;
