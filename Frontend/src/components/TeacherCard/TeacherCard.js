import React from 'react';
import './TeacherCard.css';
import avatarUrls from './avatarData.js';

function TeacherCard(props) {
  const randomIndex = Math.floor(Math.random() * avatarUrls.length);
  const randomAvatarUrl = avatarUrls[randomIndex];

  function formatNome(nome) {
    const words = nome.toLowerCase().split(' ');
    const formattedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return formattedWords.join(' ');
  }

  function formatarNomeMateria(nome) {
    const palavras = nome.split(' ');
    palavras.shift();
    palavras.shift();
    const nomeFormatado = palavras.map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)).join(' ');
    return nomeFormatado;
  }

  return (
    <div className='card-wrapper'>
      <div className='card-image-wrapper'>
        <img src={randomAvatarUrl} alt="Professor"/>
      </div>
      <h2>{formatNome(props.nome)}</h2>
      <div className='tag-wrapper'>
        {props.disciplina.slice(0, 2).map((materia, index) => (
          <span key={index} className='tag'>{formatarNomeMateria(materia)}</span>
        ))}
      </div>
    </div>
  );
}

export default TeacherCard;
