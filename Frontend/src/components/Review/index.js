import React, { useState, useEffect} from 'react';
import axios from 'axios';
//styles
import './styles.css'; 
import { FaStar, FaRegTrashAlt } from 'react-icons/fa';
import avatarUrls from '../../components/TeacherCard/avatarData.js';

function Review({ avaliacaoId, nota, texto, data, userId, deleteOption}) {

  const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    if (userId) {
      getUserData(userId);
    }
  }, [userId]);
  
  const getUserData = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:3000/usuarios/${userId}`);
      if (response.data) {
        console.log(response.data)
        setUserData(response.data);
      } else {
        console.error('Resposta da API não contém o campo "user" esperado.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const randomIndex = Math.floor(Math.random() * avatarUrls.length);
  const randomAvatarUrl = avatarUrls[randomIndex];

  function formatarData(dataString) {
    const data = new Date(dataString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return data.toLocaleString('pt-BR', options);
}

  return (
    <div className='review-wrapper'>
        <div className='review-avatar'>
          <img src={randomAvatarUrl} alt='avatar' />
        </div>
        <div className='review-body'>
          <div className='review-header'>
              <h2>{userData ? userData.nome : 'Anônimo'}</h2>
              <div className='rating'>  
                {[...Array(5)].map((_, idx) => (
                    <FaStar
                        key={idx}
                        className={`star ${idx < nota ? 'active' : ''}`}
                    ></FaStar>
                ))}
              </div>
          </div>
          <div className='review-info'>
              <span>{formatarData(data)}</span>
              <p><em>"{texto}"</em></p>
          </div>
          { deleteOption && (
            <div className='review-footer'>
              <div className="delete">
                <FaRegTrashAlt></FaRegTrashAlt>
                <button>Excluir este comentário</button>
              </div>
            </div>
          )}
        
        </div>
    </div>
  );
}

export default Review;