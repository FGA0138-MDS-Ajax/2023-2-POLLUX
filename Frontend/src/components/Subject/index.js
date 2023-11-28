import React from "react";
import { useNavigate } from "react-router-dom";
//styles
import "../SubjectsCaurosel/styles.css";

function formatarNomeMateria(nome) {
    const palavras = nome.split(' ');
    palavras.shift();
    palavras.shift();
    const nomeFormatado = palavras.map(
        (palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1)
    ).join(' ');
    return nomeFormatado;
} 

function Subject({ user, subject }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/professoresmateria', { state: { user: user, subject: subject}});
      }

    return (
        <div className="subject-container" onClick={handleClick}>
            <span className="subject-name">{formatarNomeMateria(subject.materia)}</span>
        </div>
    );
}

export default Subject;
