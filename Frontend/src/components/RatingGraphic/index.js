import React, { useState, useEffect } from 'react';
import './styles.css';
import instance from '../../services/instance';

function RatingGraphic({ teacherId }) {
  const [progressStartValue, setProgressStartValue] = useState(0);
  const [progressEndValue, setProgressEndValue] = useState(0);
  const speed = 15;

  useEffect(() => {
    // Chama a rota /professores/:id para obter a nota
    instance.get(`/professores/${teacherId}`)
      .then(response => {
        const teacher = response.data.data;
        const nota = teacher.nota;
        setProgressEndValue(nota);
        console.log(nota);
        
        const progress = setInterval(() => {
          setProgressStartValue((prevValue) => {
            const nextValue = prevValue + 1;
            if (nextValue >= nota - 1) {
              clearInterval(progress);
            }
            return nextValue;
          });
        }, speed);

        return () => {
          clearInterval(progress);
        };
      })
      .catch(error => {
        console.error('Error fetching professor data:', error);
      });
  }, [teacherId]);

  const progressStyle = {
    background: `conic-gradient(
      ${progressEndValue < 40 ? '#FF0000' : progressEndValue < 70 ? '#FFFF00' : '#04d91d'}
      ${progressStartValue * 3.6}deg, #ededed 0deg
    )`,
  };

  return (
    <div className="circular-progress" style={progressStyle}>
      <span className="progress-value">{`${progressStartValue}%`}</span>
    </div>
  );
}

export default RatingGraphic;