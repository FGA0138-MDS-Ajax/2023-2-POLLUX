import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
//styles
import "./Login.css";
import femaleCharacter from "../../assets/images/female-character.jpg";
//componentes
import Input from "../../components/Input/Input";
import SignButton from "../../components/SignButton/SignButton";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (email !== '' && senha !== '') {
      const data = {
        email: email,
        senha: senha
      };
  
      try {
        const response = await axios.post('http://localhost:3000/login', data);
        console.log(response.status);
      } catch (error) {
        console.error(error);
      }
      
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };
  

  return (
    <div className="login">
      <div className="left-section">
        <h1>Bem Vindo!</h1>

        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={setEmail}
        />
        <Input
          type="password"
          name="senha"
          placeholder="Senha"
          onChange={setSenha}
        />
        <SignButton placeholder="Entrar" onClick={handleLogin} />

        <p>
          Não possui uma conta?{" "}
          <Link to="/Cadastro" className="link">
            Registre-se
          </Link>
        </p>
      </div>
      <div className="right-section">
        <img src={femaleCharacter}></img>
      </div>
    </div>
  );
}

export default Login;
