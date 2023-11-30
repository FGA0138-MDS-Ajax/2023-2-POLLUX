import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
//styles
import './styles.css'
import { useUserContext } from "../../context/UserContext";

function Header () {
    const [isHiddenList, setIsHiddenList] = useState(false); 
    const {userName} = useUserContext(); 

    useEffect(() => {
        // Esta função será executada apenas quando o componente for montado
        setIsHiddenList(false); // Defina o estado inicial para ocultar a lista
      }, []);

    const toggleHiddenList = () => {
        setIsHiddenList(!isHiddenList);
    }; 

    const {setUser} = useUserContext();
    const handleExit = () => {
        setUser({userName: 'Convidado', userId: 0, userCurso: ''});
        localStorage.clear();
    }    
  
    return(
        <header>
            <h2 className="logo">
                GamaTrack
            </h2>
            <ul>
                <li><Link to="/Home" className="link">Início</Link></li>
                <li><Link to="/Home"className="link">Matérias</Link></li>
                <li><Link to='https://fga0138-mds-ajax.github.io/2023-2-POLLUX/' className="link" target="_blank" rel="noopener noreferrer">Sobre</Link></li>
            </ul>
            <div className="sign-in" onClick={toggleHiddenList}>
                <span className="link">{userName}</span>
                <svg width="10" height="5" viewBox="0 0 8 5" class="toggle-icon"><path d="M.707 1.707l2.586 2.586a1 1 0 001.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707z" fill="#7E7E7E"></path></svg>
                <ul className={isHiddenList ?  'visible-list' : 'hidden-list'}>
                    <Link className='dropdown-link' to='/Usuario'>Ver minhas avaliações</Link>
                    <Link className='dropdown-link' to='/' onClick={handleExit}>Sair</Link>
                </ul>
            </div>
        </header>
    )
}

export default Header