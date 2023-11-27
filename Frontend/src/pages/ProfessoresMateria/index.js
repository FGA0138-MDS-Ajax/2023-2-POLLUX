import React from 'react';
import { useLocation } from 'react-router-dom';
//components
import Header from '../../components/Header';

function ProfessoresMateria() {
  const location = useLocation();
  const user = location.state ? location.state.user : null;  

  return (
    <>
      <Header
        userName={user ? user.nome : 'sei la irmao'}  
      ></Header>
    </>
  );
}

export default ProfessoresMateria;