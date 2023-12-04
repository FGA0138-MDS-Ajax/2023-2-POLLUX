import React, { useState, useEffect } from "react";
import axios from "axios";
import instance from "../../services/instance";
// components
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import TeacherCard from "../../components/TeacherCard";
import CourseCard from "../../components/CourseCard";
//styles
import "./styles.css";
import bat404 from '../../assets/images/404.gif';

function Home() {
  //recupera os dados do usuário logado
  const userId = localStorage.getItem('@userId');
  const [userData, setUserData] = useState(null);
  const [value, setValue] = useState('');
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userId) {
      getUserData(userId);
    }
  }, [userId]);

  const getUserData = async (userId) => {
    try {
      const response = await instance.get(`/usuarios/${userId}`);
      if (response.data) {
        setUserData(response.data);
      } else {
        console.error('Resposta da API não contém o campo "user" esperado.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) =>  {
    e.preventDefault();
    
    const value = e.target.value;
    setValue(value);

    if (!value) {
      setTeachers([]);
      return;
    }

    setLoading(true);

    instance
      .get(`professores/search?nome=${value}`)
      .then((response) => {
        setTeachers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <div>
      <Header userName={userData ? userData.nome : ''}></Header>
      <div className="home-wrapper">
        <div className="search-bar-container">
          <SearchBar onChange={handleInputChange} placeholder="Digite o nome do professor" />
        </div>
        <div className={`courses-container ${value ? 'hidden' : ''}`}>
          <div className="linha-divisoria">
            <span>ou pesquise por curso</span>
          </div>
          <div className="courses-wrapper">
            <CourseCard
              coursename="Software"
              courseId="65602ef83c98a94616db5f06"
              user={userData}
            />
            <CourseCard 
              coursename="Aeroespacial"
              courseId="65602ef83c98a94616db5f02"
              user={userData}
            />
            <CourseCard 
              coursename="Energia"
              courseId="65602ef83c98a94616db5f05"
              user={userData}
            />
            <CourseCard
              coursename="Automotiva"
              courseId="65602ef83c98a94616db5f03"
              user={userData}
            />
            <CourseCard 
              coursename="Eletrônica"
              courseId="65602ef83c98a94616db5f04"
              user={userData}
            />
          </div>
        </div>
        {loading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
          </div>
        )}
        {!loading && value && teachers.length === 0 && (
          <div className="empty-container">
            <img src={bat404}></img>
            <span>Ops! Nenhum professor encontrado com esse nome.<br/>Tem certeza que sua busca está correta?</span>
          </div>
        )}
        {!loading && value && teachers.length > 0 && (
          <div className="search-bar-results">
            <div className="teacher-grid">
              {teachers.map((teacher, index) => (
                <TeacherCard key={index} teacher={teacher} user={userData} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
