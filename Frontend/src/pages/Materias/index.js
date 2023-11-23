import React from 'react';
import { useLocation } from 'react-router-dom';
//components
import Header from '../../components/Header'
import SubjectsCaurosel from '../../components/SubjectsCaurosel';
//styles
import './styles.css';


function Materias() {
    const location = useLocation();
    const course = location.state ? location.state.coursename : null;
    const user = location.state ? location.state.user : null;
    
  
    return (
        <div>
            <Header
                userName={user ? user.nome : ''}
            ></Header>
            <div className='subjects-wrapper'>  
                <h1 className='course-name'>Matérias de Engenharia {course}</h1> 
                <h3>1º Semestre</h3>
                <SubjectsCaurosel></SubjectsCaurosel>
                <h3>2º Semestre</h3>
                <SubjectsCaurosel></SubjectsCaurosel>
                <h3>3º Semestre</h3>
                <SubjectsCaurosel></SubjectsCaurosel>
                <h3>4º Semestre</h3>
                <SubjectsCaurosel></SubjectsCaurosel>
                <h3>5º Semestre</h3>
                <SubjectsCaurosel></SubjectsCaurosel>
                <h3>6º Semestre</h3>
                <SubjectsCaurosel></SubjectsCaurosel>
                <h3>7º Semestre</h3>
                <SubjectsCaurosel></SubjectsCaurosel>
                <h3>8º Semestre</h3>
                <SubjectsCaurosel></SubjectsCaurosel>
                <h3>9º Semestre</h3>
                <SubjectsCaurosel></SubjectsCaurosel>
                <h3>10º Semestre</h3>
                <SubjectsCaurosel></SubjectsCaurosel>
            </div>
        </div>
    );
}

export default Materias;