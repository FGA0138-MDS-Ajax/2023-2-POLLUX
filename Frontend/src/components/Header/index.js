import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
//styles
import './styles.css'

function Header (props) {
    const [isHiddenList, setIsHiddenList] = useState(false); 

    useEffect(() => {
        // Esta função será executada apenas quando o componente for montado
        setIsHiddenList(false); // Defina o estado inicial para ocultar a lista
      }, []);

    const toggleHiddenList = () => {
        setIsHiddenList(!isHiddenList);
    }; 
  
    return(
        <header>
            <h2 className="logo">
                GamaTrack
            </h2>
            <ul>
                <li><Link to="/Home" className="link">Início</Link></li>
                <li><Link to="/Materias"className="link">Matérias</Link></li>
                <li><Link to='https://fga0138-mds-ajax.github.io/2023-2-POLLUX/' className="link" target="_blank" rel="noopener noreferrer">Sobre</Link></li>
            </ul>
            <div className="sign-in" onClick={toggleHiddenList}>
                <span className="link">{props.userName}</span>
                <svg width="10" height="5" viewBox="0 0 8 5" class="toggle-icon"><path d="M.707 1.707l2.586 2.586a1 1 0 001.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707z" fill="#7E7E7E"></path></svg>
                <ul className={isHiddenList ?  'visible-list' : 'hidden-list'}>
                    <li>Ver minhas avaliações</li>
                    <li>Sair</li>
                </ul>
            </div>
        </header>
    )
}

export default Header