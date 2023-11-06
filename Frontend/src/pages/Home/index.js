import React, { useState, useEffect } from "react";
import axios from "axios";
// components
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import TeacherCard from "../../components/TeacherCard";
//styles
import "./styles.css";
 
function Home() {
  const [teachers, setTeachers] = useState([]);
  
  const handleInputChange = (e) => {
      e.preventDefault();
      const { value } = e.target;
  
      if (!value) {
          setTeachers([]);
          return;
      }

      axios.get(`http://localhost:3000/professores/search?nome=${value}`)
          .then(response => {
              setTeachers(response.data);
              console.log(teachers);
          })
          .catch(error => {
              console.error(error);
          });
  };

  return (
    <div>
      <Header></Header>
      <div className="home-wrapper">
        <div className="search-bar-container">
          <SearchBar 
            onChange={handleInputChange}
            placeholder="Digite o nome do professor"
          />
        </div>
        <div className="search-bar-results">
            <div className="teacher-grid">
              {teachers.map((teacher, index) => (
                <TeacherCard
                  key={index}
                  teacher={teacher}
                />
              ))}
            </div> 
        </div>
      </div>
    </div>
  );
}

export default Home;
