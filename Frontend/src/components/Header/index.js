import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faStar } from '@fortawesome/free-solid-svg-icons';
import './styles.css'

function Header () {
    return(
        <header>
            <Link to="/Home" className="link">
                <a><FontAwesomeIcon icon={faStar}/></a>
            </Link>
            <ul>
                <li><Link to="/Home" className="link">Home</Link></li>
                <li><Link to="/Materias"className="link">Matérias</Link></li>
                <li><Link to="/Sobre" className="link">Sobre</Link></li>
            </ul>
            <div className="sign-in">
                <Link to="/Login" className="link">Entrar</Link>
                <FontAwesomeIcon icon={faUser} className="link"/>
            </div>
        </header>
    )
}

export default Header