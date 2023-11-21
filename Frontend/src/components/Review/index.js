import React, { useState, useEffect} from 'react';
import axios from 'axios';
//styles
import './styles.css'

function Review({ avaliacaoId, nota, texto, data, userId}) {

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
   

  function formatarData(dataString) {
    const data = new Date(dataString);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    return data.toLocaleString('pt-BR', options);
  }
    
  return (
    <div className='review-wrapper'>
        <div className='review-body'>
          <div className='review-header'>
              <span>{userData ? userData.nome : ''}</span>
              <span>Nota: {nota}</span>
          </div>
          <div className='review-info'>
              <span>Engenharia de {userData ? userData.curso : ''}</span>
              <p><em>"{texto}"</em></p>
          </div>
          <div className='review-footer'>
              <span>{formatarData(data)}</span>
          </div>
        </div>
    </div>
  );
}

export default Review;