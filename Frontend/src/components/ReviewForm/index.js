import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import './styles.css';

function ReviewForm({ mostrarFormulario }) {
  const [avaliacao, setAvaliacao] = useState(0);

  const handleStarClick = (idx) => {
    setAvaliacao(idx + 1);
    console.log(avaliacao);
  };

  useEffect(() => {
    // Defina avaliacao de volta para 0 quando mostrarFormulario muda
    if (!mostrarFormulario) {
      setAvaliacao(0);
    }
  }, [mostrarFormulario]);


  return (
    <div>
      {mostrarFormulario && (
        <div className="form-wrapper">
          <h2>Escreva sua avaliação</h2>
          <form action="#">
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
            <textarea name="opnion" cols="30" rows="5" placeholder="Deixe um comentário..."></textarea>
            <div className="button-group">
              <button type="submit" className="submit review">
                Enviar
              </button>
              <button className="submit cancel">Cancelar</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ReviewForm;
