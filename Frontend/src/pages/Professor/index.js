import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//components
import Header from '../../components/Header'
//styles
import './styles.css'

function CircularProgress() {
  const [progressStartValue, setProgressStartValue] = useState(0);
  const progressEndValue = 70;
  const speed = 15;

  useEffect(() => {
    const progress = setInterval(() => {
      setProgressStartValue((prevValue) => {
        const nextValue = prevValue + 1;
        if (nextValue === progressEndValue) {
          clearInterval(progress);
        }
        return nextValue;
      }, speed);
    }, speed);

    return () => {
      clearInterval(progress);
    };
  }, []);

  const progressStyle = {
    background: `conic-gradient(
      ${progressEndValue < 40 ? '#FF0000' : progressEndValue < 70 ? '#FFFF00' : '#04d91d'}
      ${progressStartValue * 3.6}deg, #ededed 0deg
    )`,
  };
  
  return (
    <div className="circular-progress" style={progressStyle}>
      <span className="progress-value">{`${progressStartValue}%`}</span>
    </div>
  );
}

function Professor() {
  const location = useLocation();
  const teacher = location.state ? location.state.professor : null;
  const profile = location.state ? location.state.profile : null;

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
    <div>
      <Header></Header>
      <div className="teacher-wrapper">
        <div className="teacher-header">
          <div className="teacher-profile">
            <img src={profile} alt="Professor" />
          </div>
          <div className="teacher-details">
            <h1>{teacher.nome}</h1>
            {teacher.disciplina.map((disciplina, index) => (
              <span key={index} className="teacher-subject">
                {formatarNomeMateria(disciplina)}
              </span>
            ))}
          </div>
          <div className="teacher-rating">
            <CircularProgress />
            <span className="avaliations-number">0 avaliações</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Professor;