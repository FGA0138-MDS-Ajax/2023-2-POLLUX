import React, { useState, useEffect } from 'react';
import axios from 'axios';
import instance from '../../services/instance';
//components
import ReviewQuestions from '../ReviewQuestions';
//styles
import { FaStar } from 'react-icons/fa';
import './styles.css';

function ReviewForm({ mostrarFormulario, mostrarOcultarFormulario, userid, teacherid }) {
  const [comentario, setComentario] = useState('');  
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [notaFinal, setNotaFinal] = useState(0);

  const [ratings, setRatings] = useState({
    question1: { texto: 'Pergunta 1', nota: null },
    question2: { texto: 'Pergunta 2', nota: null },
    question3: { texto: 'Pergunta 3', nota: null },
    question4: { texto: 'Pergunta 4', nota: null },
    question5: { texto: 'Pergunta 5', nota: null },
  });
  
  const handleQuestionSelect = (nota, rating) => {
    setRatings(prevRatings => ({
      ...prevRatings,
      [nota]: { ...prevRatings[nota], nota: rating },
    }));

    //calcular a nota final
    let media = 0;

    Object.keys(ratings).forEach((key) => {
      media += ratings[key].nota;
    });

    media = media / 5; 

    setNotaFinal(media);
  };

  useEffect(() => {
    // Defina avaliacao de volta para 0 quando mostrarFormulario muda
    if (!mostrarFormulario) {
      setNotaFinal(0)
      setEnviado(false); // Reseta o estado de envio ao fechar o formulário
    }
  }, [mostrarFormulario]);

  const handleAvaliar = async (e) => {
    e.preventDefault();

    if (comentario !== '' && !enviando) {
      setEnviando(true);

      const data = {
        professorId: teacherid,
        usuarioId: userid,
        texto: comentario,
        nota: notaFinal,
        perguntas: ratings,
      };

      console.log(data)

      try {
        const response = await instance.post('/comentarios', data);
        
        if (response.data.success) {
          mostrarOcultarFormulario();
          window.location.reload();
        } else {
          console.error('Erro ao adicionar comentário:', response.data.error);
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      } finally{
        setEnviando(false);
      }
    }
  }

  return (
    <div>
      {mostrarFormulario && (
        <div className="form-wrapper">
          <h1>Preencha sua avaliação</h1>
          
          <h3>O professor tem domínio sobre conteúdo ministrado?</h3> 
          <ReviewQuestions onSelect={(rating) => handleQuestionSelect("question1", rating)} />

          <h3>O professor tem domínio sobre conteúdo ministrado?</h3>
          <ReviewQuestions onSelect={(rating) => handleQuestionSelect("question2", rating)} />

          <h3>Disponibilidade do Professor:</h3> 
          <ReviewQuestions onSelect={(rating) => handleQuestionSelect("question3", rating)} />

          <h3>Metodologia de Ensino:</h3> 
          <ReviewQuestions onSelect={(rating) => handleQuestionSelect("question4", rating)} />

          <h3>Comunicação e Feedback:</h3> 
          <ReviewQuestions onSelect={(rating) => handleQuestionSelect("question5", rating)} />
          
          <textarea 
            name="opnion" 
            cols="30" 
            rows="6" 
            placeholder="Deixe um comentário sobre esse professor..." 
            onChange={(e) => setComentario(e.target.value)}
          ></textarea>
          
          <div className="button-group">
            <button className="submit review" onClick={handleAvaliar}>
              Publicar
            </button>

            <button className="submit review-anonymous" onClick={handleAvaliar}>
              Publicar anônimamente
            </button>

            <button className="submit cancel" onClick={mostrarOcultarFormulario}>
              Cancelar
            </button>
          </div>

        </div>
      )}
    </div>
  );
}

export default ReviewForm;

/*
  
  const handleStarClick = (idx) => {
    setAvaliacao(idx + 1);
  };
  

 <div className="rating">
              <input type="number" name="rating" value={avaliacao} hidden></input>
              {[...Array(5)].map((_, idx) => (
                <FaStar
                  key={idx}
                  className={`star ${idx < avaliacao ? 'active' : ''}`}
                  onClick={() => handleStarClick(idx)}
                  style={{ '--i': idx }}
                ></FaStar>
              ))}
            </div>
*/