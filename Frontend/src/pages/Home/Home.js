import React, { useState } from "react"
import Header from "../../components/Header/Header"
import SearchBar from '../../components/SearchBar/SearchBar'
import TeacherCard from '../../components/TeacherCard/TeacherCard'
//styles
import './Home.css'

function Home () {
    const [teacher, setTeacher] = useState([]); 
    
    const teachersData = [
        { nome: 'Professor 1'},
        { nome: 'Professor 2'},
        { nome: 'Professor 3'},
        { nome: 'Professor 4'},
        { nome: 'Professor 1'},
        { nome: 'Professor 2'},
        { nome: 'Professor 3'},
        { nome: 'Professor 4'},
        { nome: 'Professor 1'},
        { nome: 'Professor 2'},
        { nome: 'Professor 3'},
        { nome: 'Professor 4'},
      ];

      
    return(
        <div>
            <Header></Header>
            <div className="home-wrapper">
                <div className="search-bar-container">
                    <SearchBar
                        onChange={setTeacher}
                        placeholder="Digite o nome do professor"
                    />
                </div>
                
                <div className="search-bar-results">
                    <div className='teacher-grid'>
                        {teachersData.map((teacher, index) => (
                            <TeacherCard key={index}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home