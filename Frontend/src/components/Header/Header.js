import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//styles
import './Header.css'

function Header () {
    return(
        <header>
            <Link to="/Home" className="link">
            </Link>
            <ul>
                <li><Link to="/Home" className="link">Home</Link></li>
                <li><Link to="/Materias"className="link">Matérias</Link></li>
                <li><Link to="/Sobre" className="link">Sobre</Link></li>
            </ul>
            <div className="sign-in">
                <Link to="/Login" className="link">Entrar</Link>
            </div>
        </header>
    )
}

export default Header