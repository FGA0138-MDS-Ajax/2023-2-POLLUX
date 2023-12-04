import React, { useState, useEffect } from "react";
import instance from "../../services/instance";
//styles
import "./styles.css";
//componentes
import InputPassword from "../../components/InputPassword";
import SignButton from "../../components/SignButton";

function RecuperarSenha() {
  const [senha, setSenha] = useState("");
  const [senhaConfirm, setSenhaConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [reseted, setReseted] = useState(false);

  const redefinirSenha = async () => {
    if (senha !== senhaConfirm) {
      setError("As senhas não coincidem");
      return;
    }

    if (senha === "" || senhaConfirm === "") {
      setError("Preencha todos os campos");
      return;
    }

    setLoading(true);

    try {
      const result = await instance.post("/redefinir-senha", {
        novaSenha: senha,
      });
      if (result === 200 || result) {
        setReseted(true);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError("Erro ao redefinir a senha");
    }
  };

  return (
    <div className="reset-password-container">
      <div className="form-container">
        {!reseted ? (
          <>
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

            <SignButton
              placeholder="Redefinir senha"
              onClick={redefinirSenha}
              loading={loading}
            />
          </>
        ) : (
          <>
            <h1>Sua senha foi redefinida com sucesso!</h1>
            <p>Você já pode fechar essa página agora</p>
          </>
        )}
      </div>
    </div>
  );
}

export default RecuperarSenha;
