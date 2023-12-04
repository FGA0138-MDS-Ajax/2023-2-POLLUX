import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import instance from "../../services/instance";
//components
import Header from "../../components/Header";
import SubjectsCaurosel from "../../components/SubjectsCaurosel";
//styles
import "./styles.css";

function Materias() {
  const location = useLocation();
  const course = location.state ? location.state.coursename : null;
  const courseId = location.state ? location.state.courseId : null;
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    instance
      .get(`/materias/${courseId}`)
      .then((response) => {
        setSubjects(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
        setLoading(false);
      });
  }, [courseId]); // Add courseId as a dependency for useEffect

  return (
    <div>
      <Header />
      <div className="subjects-wrapper">
        <h1 className="course-name">{course}</h1>
        {loading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
          </div>
        )}
        {!loading && (
          <div>
            <h3 className="semester">1° Semestre</h3>
            <SubjectsCaurosel
              subjects={subjects.semestres ? subjects.semestres.semestre_1 : []}
            ></SubjectsCaurosel>
            <h3 className="semester">2° Semestre</h3>
            <SubjectsCaurosel
              subjects={subjects.semestres ? subjects.semestres.semestre_2 : []}
            ></SubjectsCaurosel>
            <h3 className="semester">3° Semestre</h3>
            <SubjectsCaurosel
              subjects={subjects.semestres ? subjects.semestres.semestre_3 : []}
            ></SubjectsCaurosel>
            <h3 className="semester">4° Semestre</h3>
            <SubjectsCaurosel
              subjects={subjects.semestres ? subjects.semestres.semestre_4 : []}
            ></SubjectsCaurosel>
            <h3 className="semester">5° Semestre</h3>
            <SubjectsCaurosel
              subjects={subjects.semestres ? subjects.semestres.semestre_5 : []}
            ></SubjectsCaurosel>
            <h3 className="semester">6° Semestre</h3>
            <SubjectsCaurosel
              subjects={subjects.semestres ? subjects.semestres.semestre_6 : []}
            ></SubjectsCaurosel>
            <h3 className="semester">7° Semestre</h3>
            <SubjectsCaurosel
              subjects={subjects.semestres ? subjects.semestres.semestre_7 : []}
            ></SubjectsCaurosel>
            <h3 className="semester">8° Semestre</h3>
            <SubjectsCaurosel
              subjects={subjects.semestres ? subjects.semestres.semestre_8 : []}
            ></SubjectsCaurosel>
            <h3 className="semester">Optativas</h3>
            <SubjectsCaurosel
              subjects={subjects.semestres ? subjects.semestres.optativas : []}
            ></SubjectsCaurosel>
          </div>
        )}
      </div>
    </div>
  );
}

export default Materias;
