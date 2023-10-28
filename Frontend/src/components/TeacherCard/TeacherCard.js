import React from 'react';
import './TeacherCard.css';
import avatarUrls from './avatarData.js';

function TeacherCard() {
  const randomIndex = Math.floor(Math.random() * avatarUrls.length);
  const randomAvatarUrl = avatarUrls[randomIndex];

  return (
    <div className='card-wrapper'>
      <div className='card-image-wrapper'>
        <img src={randomAvatarUrl} alt="Professor"/>
      </div>
      <h2>Professor {randomIndex}</h2>
      <div className='tag-wrapper'>
        <span className='tag'>Matéria X</span>
        <span className='tag'>Matéria Y</span>
      </div>
    </div>
  );
}

export default TeacherCard;
