import React from 'react';
import { useLocation } from 'react-router-dom';
//components
import Header from '../../components/Header';
import TeacherCard from '../../components/TeacherCard';

function ProfessoresMateria() {
  const location = useLocation();
  const user = location.state ? location.state.user : null;  
  const subject = location.state ? location.state.subject : null;

  return (
    <>
      <Header></Header>
    </>
  );
}

export default ProfessoresMateria;