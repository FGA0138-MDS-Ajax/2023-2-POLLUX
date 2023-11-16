import React, { useState } from 'react';
import './styles.css';

function ReviewForm({ mostrarFormulario }) {
    return (
      <div>
        {mostrarFormulario && (
          <form className='review-form'>
            <label htmlFor="nota">Nota:</label>
            <input type="number" id="nota" name="nota" min="1" max="5" required />
  
            <label htmlFor="comentario">Comentário:</label>
            <textarea id="comentario" name="comentario" rows="4" cols="50"></textarea>
  
            <input type="submit" value="Enviar Avaliação" onClick={console.log('review enviada')} />
          </form>
        )}
      </div>
    );
  };
  
  export default ReviewForm;