import React from 'react';
import { useLocation } from 'react-router-dom';
//components
import Header from '../../components/Header';
import TeacherCard from '../../components/TeacherCard';
//styles
import './styles.css';

function ProfessoresMateria() {
  const location = useLocation();
  const subject = location.state ? location.state.subject : null;
  const professores = location.state ? location.state.professores : null;

  function formatarNomeMateria(nome) {
    const palavras = nome.split(' ');
    palavras.shift();
    palavras.shift();
    const nomeFormatado = palavras.map(
        (palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1)
    ).join(' ');
    return nomeFormatado;
  } 

  return (
    <>
      <Header></Header>
      <div className="teachers-subject-wrapper">
                <h1>{formatarNomeMateria(subject.materia)} </h1>
                <div className="linha-divisoria"></div>
                <div className="teacher-grid">
                    {professores.map((professor) => (
                        <TeacherCard teacher={professor.data}/>
                    ))}
                </div>
            </div>
    </>
  );
}

export default ProfessoresMateria;