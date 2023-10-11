import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home"

export default function AppRoutes() {
    return (
    <Router>
        <Routes>
            <Route path="/Login" element={<Login></Login>}/>
            <Route path="/Cadastro" element={<Cadastro></Cadastro>}/>
            <Route path="/Home" element={<Home></Home>}></Route>
        </Routes>       
    </Router>
    );
  }