import React from "react";
//styles
import "./styles.css";
import sucess from "../../assets/images/sucess.png"

function SucessValidation () {
    return (
        <div className="sucess-container">
            <h1>Parabéns! Sua conta verificada com sucesso!</h1>
            <img src={sucess} className="sucess-image"></img>
            <p>Você já pode fechar essa página agora.</p>
        </div>
    );
}

export default SucessValidation;