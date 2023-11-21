import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home"
import Professor from "./pages/Professor";

export default function AppRoutes() {
    return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Login></Login>}/>
            <Route path="/Cadastro" element={<Cadastro></Cadastro>}/>
            <Route path="/Home" element={<Home></Home>}></Route>
            <Route path='/Professor' element={<Professor></Professor>}></Route>
        </Routes>       
    </Router>
    );
  }