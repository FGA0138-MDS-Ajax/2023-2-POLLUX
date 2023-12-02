import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate, 
  Outlet
} from "react-router-dom";
import { IsAuthenticated } from "./utils/auth";

import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home"
import Professor from "./pages/Professor";
import Materias from "./pages/Materias";
import ProfessoresMateria from "./pages/ProfessoresMateria";
import Usuario from "./pages/Usuario";
import SucessValidation from "./pages/SucessValidation";
import RecuperarSenha from "./pages/RecuperarSenha";
import RedefinirSenha from "./pages/RedefinirSenha";

const PrivateRoutes = () => {
    return(
        IsAuthenticated() ? <Outlet/> : <Navigate to="/"/>
    )
}

export default function AppRoutes() {
    return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Login></Login>}/>
            <Route path="/Cadastro" element={<Cadastro></Cadastro>}/>
            <Route element={<SucessValidation></SucessValidation>} path="/sucess" exact/>
            <Route element={<PrivateRoutes />}>
                <Route element={<Home/>} path="/home" exact/>
                <Route element={<Professor/>} path="/professor" exact/>
                <Route element={<Materias/>} path="/materias" exact/>
                <Route element={<ProfessoresMateria/>} path="/professoresmaterias" exact/>
                <Route element={<Usuario/>} path="/usuario" exact/>
            </Route>
        </Routes>       
    </Router>
    );
  }