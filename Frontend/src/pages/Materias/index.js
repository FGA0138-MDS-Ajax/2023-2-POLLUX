import React, { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import instance from '../../services/instance';
//components
import Header from '../../components/Header'
import SubjectsCaurosel from '../../components/SubjectsCaurosel';
//styles
import './styles.css';

function Materias() {
    const location = useLocation();
    const course = location.state ? location.state.coursename : null;
    const courseId = location.state ? location.state.courseId : null;
    const [subjects, setSubjects] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        instance
            .get(`/materias/${courseId}`)
            .then((response) => {
                setSubjects(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching comments:', error);
                setLoading(false);
            });
    }, [courseId]); // Add courseId as a dependency for useEffect

    return (
        <div>
            <Header/>
            <div className='subjects-wrapper'>  
                <h1 className='course-name'>{course}</h1>
                {loading && (
                    <div className="loading-container">
                        <div className="loading-spinner"></div>
                    </div>
                )}
                {!loading && (
                    <div>        
                        <SubjectsCaurosel
                            subjects={subjects.semestres ? subjects.semestres.semestre_1 : []}
                        ></SubjectsCaurosel>            
                        <SubjectsCaurosel
                            subjects={subjects.semestres ? subjects.semestres.semestre_2 : []}
                        ></SubjectsCaurosel>            
                        <SubjectsCaurosel
                            subjects={subjects.semestres ? subjects.semestres.semestre_3 : []}
                        ></SubjectsCaurosel>            
                        <SubjectsCaurosel
                            subjects={subjects.semestres ? subjects.semestres.semestre_4 : []}
                        ></SubjectsCaurosel>            
                        <SubjectsCaurosel
                            subjects={subjects.semestres ? subjects.semestres.semestre_5 : []}
                        ></SubjectsCaurosel>            
                        <SubjectsCaurosel
                            subjects={subjects.semestres ? subjects.semestres.semestre_6 : []}
                        ></SubjectsCaurosel>            
                        <SubjectsCaurosel
                            subjects={subjects.semestres ? subjects.semestres.semestre_7 : []}
                        ></SubjectsCaurosel>            
                        <SubjectsCaurosel
                            subjects={subjects.semestres ? subjects.semestres.semestre_8 : []}
                        ></SubjectsCaurosel>            
                        <SubjectsCaurosel
                            subjects={subjects.semestres ? subjects.semestres.semestre_9 : []}
                        ></SubjectsCaurosel>            
                        <SubjectsCaurosel
                            subjects={subjects.semestres ? subjects.semestres.semestre_10 : []}
                        ></SubjectsCaurosel>            
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