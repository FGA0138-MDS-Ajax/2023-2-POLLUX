import React, { useState, useEffect } from "react";
import axios from "axios";
// components
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import TeacherCard from "../../components/TeacherCard";
import CourseCard from "../../components/CourseCard";
//styles
import "./styles.css";
 
function Home() {
  //recupera os dados do usuário logado
  const userId = localStorage.getItem('@userId');
  const [userData, setUserData] = useState(null);
  const [value, setValue] = useState('');
  
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
   
  //armazena o professor pesquisado
  const [teachers, setTeachers] = useState([]);
  
  const handleInputChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setValue(value);

    if (!value) {
      setTeachers([]);
      return;
    }

    axios.get(`http://localhost:3000/professores/search?nome=${value}`)
      .then(response => {
        setTeachers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <Header
        userName={userData ? userData.nome : ''}
      ></Header>
      <div className="home-wrapper">
        <div className="search-bar-container">
          <SearchBar 
            onChange={handleInputChange}
            placeholder="Digite o nome do professor"
          />
        </div>
        <div className={`courses-container ${ value ? 'hidden' : ''}`}>
          <div class="linha-divisoria">
            <span>ou pesquise por curso</span>
          </div>
          <div className="courses-wrapper">
            <CourseCard
              coursename="Software"
              user={userData}
            />
            <CourseCard 
              coursename="Aeroespacial"
              user={userData}
            />
            <CourseCard 
              coursename="Energia"
              user={userData}
            />
            <CourseCard
              coursename="Automotiva"
              user={userData}
            />
            <CourseCard 
              coursename="Eletrônica"
              user={userData}
            />
          </div>
        </div>
        { value && (
          <div className="search-bar-results">
              <div className="teacher-grid">
                {teachers.map((teacher, index) => (
                  <TeacherCard
                    key={index}
                    teacher={teacher}
                    user={userData}
                  />
                ))}
              </div> 
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
