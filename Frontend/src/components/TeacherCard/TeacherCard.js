import React from 'react';
import avatarUrls from './avatarData'; 
import './TeacherCard.css';

function TeacherCard() {

  const randomIndex = Math.floor(Math.random() * avatarUrls.length);
  const randomAvatarUrl = avatarUrls[randomIndex];

  return (
    <div className='card-wrapper'>
      <img src={randomAvatarUrl} alt="Professor" />
      <h2>PROFESSOR</h2>
    </div>
  );
}

export default TeacherCard;
