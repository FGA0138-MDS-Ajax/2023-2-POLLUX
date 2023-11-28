import React, { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
//components
import Header from '../../components/Header'
import SubjectsCaurosel from '../../components/SubjectsCaurosel';
//styles
import './styles.css';

function Materias() {
    const location = useLocation();
    const course = location.state ? location.state.coursename : null;
    const user = location.state ? location.state.user : null;
    const courseId = location.state ? location.state.courseId : null;

    const [subjects, setSubjects] = useState([]);
   
    axios.get(`http://localhost:3000/materias/${courseId}`)
        .then(response => {
        setSubjects(response.data);
        })
        .catch(error => {
        console.error('Error fetching comments:', error);
        });
  
    return (
        <div>
            <Header
                userName={user ? user.nome : ''}
            ></Header>
            <div className='subjects-wrapper'>  
                <h1 className='course-name'>{course}</h1> 
                <h3 className='semester'>1º Semestre</h3>
                <SubjectsCaurosel
                    user={user}
                    subjects={subjects.semestres ? subjects.semestres.semestre_1 : []}
                ></SubjectsCaurosel>            
                <SubjectsCaurosel
                    user={user}
                    subjects={subjects.semestres ? subjects.semestres.semestre_2 : []}
                ></SubjectsCaurosel>            
                <SubjectsCaurosel
                    user={user}
                    subjects={subjects.semestres ? subjects.semestres.semestre_3 : []}
                ></SubjectsCaurosel>            
                <SubjectsCaurosel
                    user={user}
                    subjects={subjects.semestres ? subjects.semestres.semestre_4 : []}
                ></SubjectsCaurosel>            
                <SubjectsCaurosel
                    user={user}
                    subjects={subjects.semestres ? subjects.semestres.semestre_5 : []}
                ></SubjectsCaurosel>            
                <SubjectsCaurosel
                    user={user}
                    subjects={subjects.semestres ? subjects.semestres.semestre_6 : []}
                ></SubjectsCaurosel>            
                <SubjectsCaurosel
                    user={user}
                    subjects={subjects.semestres ? subjects.semestres.semestre_7 : []}
                ></SubjectsCaurosel>            
                <SubjectsCaurosel
                    user={user}
                    subjects={subjects.semestres ? subjects.semestres.semestre_8 : []}
                ></SubjectsCaurosel>            
                <SubjectsCaurosel
                    user={user}
                    subjects={subjects.semestres ? subjects.semestres.semestre_9 : []}
                ></SubjectsCaurosel>            
                <SubjectsCaurosel
                    user={user}
                    subjects={subjects.semestres ? subjects.semestres.semestre_10 : []}
                ></SubjectsCaurosel>            
                <SubjectsCaurosel
                    user={user}
                    subjects={subjects.semestres ? subjects.semestres.optativas : []}
                ></SubjectsCaurosel>            
            </div>
        </div>
    );
}

export default Materias;