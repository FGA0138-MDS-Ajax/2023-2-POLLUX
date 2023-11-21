import React, { useState, useEffect } from 'react';
import axios from 'axios';
//styles
import { FaStar } from 'react-icons/fa';
import './styles.css';

function ReviewForm({ mostrarFormulario, mostrarOcultarFormulario, userid, teacherid }) {
  const [avaliacao, setAvaliacao] = useState(0);
  const [comentario, setComentario] = useState('');  
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);


  const handleStarClick = (idx) => {
    setAvaliacao(idx + 1);
  };

  useEffect(() => {
    // Defina avaliacao de volta para 0 quando mostrarFormulario muda
    if (!mostrarFormulario) {
      setAvaliacao(0);
      setEnviado(false); // Reseta o estado de envio ao fechar o formulário
    }
  }, [mostrarFormulario]);

  const handleAvaliar = async (e) => {
    e.preventDefault();

    if (avaliacao !== 0 && comentario !== '' && !enviando) {
      setEnviando(true);

      const data = {
        professorId: teacherid,
        usuarioId: userid,
        texto: comentario,
        nota: avaliacao,
      };

      try {
        const response = await axios.post('http://localhost:3000/comentarios', data);
        
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
          <div className='form-header'>
            <h2>Escreva sua avaliação</h2>
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
          </div>
          <form action="#">
            <textarea name="opnion" cols="30" rows="5" placeholder="Deixe um comentário..." onChange={(e) => setComentario(e.target.value)}></textarea>
            <div className="button-group">
              <button className="submit review" onClick={handleAvaliar}>
                Enviar
              </button>
              <button className="submit cancel" onClick={mostrarOcultarFormulario}>Cancelar</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ReviewForm;
