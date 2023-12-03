import React from 'react';
import { Link, useLocation, useNavigate, navigate } from "react-router-dom";
//styles
import './styles.css';
import manUrls from './manAvatars.js';
import womanUrls from './womenAvatars.js';

function TeacherCard({ teacher, user }) {
  if(teacher.genero === 1) {
    var avatarUrls = manUrls;
  } else {
    var avatarUrls = womanUrls;
  }
  console.log(teacher)
  const randomIndex = Math.floor(Math.random() * avatarUrls.length);
  const randomAvatarUrl = avatarUrls[randomIndex];

  function formatNome(nome) {
    const words = nome.toLowerCase().split(' ');
    const formattedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return formattedWords.join(' ');
  }
    
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/professor', { state: { professor: teacher, profile: randomAvatarUrl, usuario: user } });
  }

  console.log(teacher)

  return (
    <div className='card-wrapper' onClick={handleClick}>
      <img src={randomAvatarUrl} alt="Professor"/>
      <div className='card-info'>
        <h2>{formatNome(teacher.nome)}</h2>
      </div>
    </div>
  );
}

export default TeacherCard;