import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
//styles
import './styles.css'

function Header (props) {
  
    return(
        <header>
            <h2 className="logo">
                GamaTrack
            </h2>
            <ul>
                <li><Link to="/Home" className="link">Home</Link></li>
                <li><Link to="/Materias"className="link">Matérias</Link></li>
                <li><Link to='https://fga0138-mds-ajax.github.io/2023-2-POLLUX/' className="link" target="_blank" rel="noopener noreferrer">Sobre</Link></li>
            </ul>
            <div className="sign-in">
                <Link to="/Login" className="link">{props.userName}</Link>
            </div>
        </header>
    )
}

export default Header