import React from 'react';
import './TeacherCard.css';
import avatarUrls from './avatarData.js';

function TeacherCard() {
  const randomIndex = Math.floor(Math.random() * avatarUrls.length);
  const randomAvatarUrl = avatarUrls[randomIndex];

  return (
    <div className='card-wrapper'>
      <img src={randomAvatarUrl} alt="Professor"/>
      <h2>Professor</h2>
    </div>
  );
}

export default TeacherCard;
