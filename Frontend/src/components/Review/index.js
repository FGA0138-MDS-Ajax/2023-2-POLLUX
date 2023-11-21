import React from 'react';
//styles
import './styles.css'

function Review({ avaliacaoId, nota, texto, data, userId}) {
  return (
    <div className='review-wrapper'>
        <span>{nota}</span>
        <p>{texto}</p>
        <span>{data}</span>
    </div>
  );
}

export default Review;