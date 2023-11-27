import React from 'react';
import { useLocation } from 'react-router-dom';
//components
import Header from '../../components/Header'
import SubjectsCaurosel from '../../components/SubjectsCaurosel';
//styles
import './styles.css';

function Materias() {
    const location = useLocation();
    const course = location.state ? location.state.coursename : null;
    const user = location.state ? location.state.user : null;
  
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
                ></SubjectsCaurosel>
                <h3 className='semester'>1º Semestre</h3>
                <SubjectsCaurosel
                    user={user}
                ></SubjectsCaurosel>
                <h3 className='semester'>1º Semestre</h3>
                <SubjectsCaurosel
                    user={user}
                ></SubjectsCaurosel>
                <h3 className='semester'>1º Semestre</h3>
                <SubjectsCaurosel
                    user={user}
                ></SubjectsCaurosel>
                <h3 className='semester'>1º Semestre</h3>
                <SubjectsCaurosel
                    user={user}
                ></SubjectsCaurosel>
                <h3 className='semester'>1º Semestre</h3>
                <SubjectsCaurosel
                    user={user}
                ></SubjectsCaurosel>
                <h3 className='semester'>1º Semestre</h3>
                <SubjectsCaurosel
                    user={user}
                ></SubjectsCaurosel>
                <h3 className='semester'>1º Semestre</h3>
                <SubjectsCaurosel
                    user={user}
                ></SubjectsCaurosel>
                <h3 className='semester'>1º Semestre</h3>
                <SubjectsCaurosel
                    user={user}
                ></SubjectsCaurosel>
                <h3 className='semester'>1º Semestre</h3>
                <SubjectsCaurosel
                    user={user}
                ></SubjectsCaurosel>
              
            </div>
        </div>
    );
}

export default Materias;