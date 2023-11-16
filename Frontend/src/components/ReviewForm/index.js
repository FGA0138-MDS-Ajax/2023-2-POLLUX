import React, { useState } from 'react';
//styles
import './styles.css';
import 'boxicons';

function ReviewForm({ mostrarFormulario }) {
    return (
      <div>
        {mostrarFormulario && (
           <div className="form-wrapper">
            <h2>Escreva sua avaliação</h2>
            <form action='#'>
              <div className='rating'>
                <input type='number' name='rating' hidden></input>
                <box-icon name='star'></box-icon>
                <box-icon name='star'></box-icon>
                <box-icon name='star'></box-icon>
                <box-icon name='star'></box-icon>
                <box-icon name='star'></box-icon>
              </div>
              <textarea name='opnion' cols='30' rows='5'placeholder='Deixe um comentário...'></textarea>
              <div>
                <button type='submit' className='submit-review'>Enviar</button>
                <button className='submit-cancel'>Cancelar</button>
              </div>
            </form>
         </div>
        )}
      </div>
    );
  };
  
  export default ReviewForm;