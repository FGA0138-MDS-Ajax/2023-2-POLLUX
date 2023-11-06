import React from "react";
import { useLocation } from 'react-router-dom';
//components
import Header from '../../components/Header'
//styles
import './styles.css'

function Professor() {

    const location = useLocation();
    const teacher = location.state ? location.state.professor : null;
    const profile = location.state ? location.state.profile : null; 

    function formatarNomeMateria(nome) {
        const palavras = nome.split(' ');
        palavras.shift();
        palavras.shift();
        const nomeFormatado = palavras.map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)).join(' ');
        return nomeFormatado;
      }

    return(
        <div>
            <Header></Header>
            <div className="teacher-wrapper">
                <div className="teacher-header">
                    <div className="teacher-profile">
                        <img src={profile} alt="Professor"/>
                    </div>
                    <div className="teacher-details">
                        <h1>{teacher.nome}</h1>
                        {teacher.disciplina.map((disciplina, index) => (
                            <span key={index} className="teacher-subject">
                                {formatarNomeMateria(disciplina)}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Professor