/*import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useUserContext } from "../../context/UserContext";
import instance from "../../services/instance";
//styles
import "../Login/styles.css";
//componentes
import Input from "../../components/Input";
import SignButton from "../../components/SignButton";

function RecuperarSenha() {
    const [email, setEmail] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
    
        if (email !== '') {
            try {
              const response = await instance.post('/login', data);
              if (response.status === 200 && response.data.user) { 
                setUser({userId: response.data.user._id, userName:  response.data.user.nome, userCurso: response.data.user.curso});
                localStorage.setItem('@userId', response.data.user._id);
                navigate('/Login');
              } 
            } catch (error) {
              console.error(error);
              setError('Email incorreto.');
            }
        } else {
            setError('Digite o email de sua conta.');
        }
    };

    return (
      <div className="login">
        <div className="left-section">
            { !sendValue && !loading &&  (
                <div className="form-container">
                    <h1>Recuperação de Senha</h1>
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

                    <SignButton placeholder="Enviar" onClick={handleRegister} />
                </div>
                )
            }
            { loading && !sendValue && (
                <div className="loading-container-login">
                <div className="loading-spinner"></div>
                </div>
                )
            }
            { sendValue && (
                <div className="success-message">
                    <p>Email de recuperação enviado com sucesso!</p>
                    <p>Verifique sua caixa de entrada...</p>
                </div>
                )
            }
        </div>
        <div className="right-section">
            <h1>GamaTrack</h1>
            <p>Avalie seus professores</p>
        </div>
      </div>
    );
}
*/