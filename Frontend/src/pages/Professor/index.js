import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
//components
import Header from '../../components/Header'
import Review from '../../components/Review'
import ReviewForm from '../../components/ReviewForm'
//styles
import './styles.css'
import { IoMdAdd } from "react-icons/io";

function Professor() {
  const location = useLocation();
  const teacher = location.state ? location.state.professor : null;
  const profile = location.state ? location.state.profile : null;
  const user = location.state ? location.state.usuario : null;

  function formatarNomeMateria(nome) {
    const palavras = nome.split(' ');
    palavras.shift();
    palavras.shift();
    const nomeFormatado = palavras.map(
      (palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1)
    ).join(' ');
    return nomeFormatado;
  }

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const mostrarOcultarFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
}

  function CircularProgress() {
    const [progressStartValue, setProgressStartValue] = useState(0);
    var progressEndValue = 1;

    if(teacher.nota != null){
      progressEndValue = teacher.nota;
    }

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

  const [avaliacoes, setAvaliacoes] = useState([]); // Alterei para avaliacoes, pois é usado no backend

  useEffect(() => {
    axios.get(`http://localhost:3000/comentarios/professor/${teacher._id}`)
      .then(response => {
        setAvaliacoes(response.data);
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
      });
  }, [teacher._id]);

  console.log(avaliacoes); 

  return (
    <div>
      <Header
        userName={user.nome}  
      ></Header>
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
        <div className='reviews-label'>
          <h2>Todas as avaliações</h2>
          <div className='review-button' onClick={mostrarOcultarFormulario} >
            <button>Avaliar</button>
            <IoMdAdd className='review-icon'/> 
          </div>
        </div>
        <ReviewForm 
          mostrarFormulario={mostrarFormulario}
          mostrarOcultarFormulario={mostrarOcultarFormulario}
          userid={user._id}
          teacherid={teacher._id}
        />
        {avaliacoes.map((avaliacao, index) => (
          <Review
            key={index}
            avaliacaoId={avaliacao._id} 
            nota={avaliacao.nota}
            texto={avaliacao.texto}
            data={avaliacao.data}
            userId={avaliacao.usuarioId}
          ></Review>
        ))}
      </div>
    </div>
  );
}

export default Professor;