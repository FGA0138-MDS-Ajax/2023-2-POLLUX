import React, { useState } from "react"
import Header from "../../components/Header/Header"
import SearchBar from '../../components/SearchBar/SearchBar'
import TeacherCard from '../../components/TeacherCard/TeacherCard'
//styles
import './Home.css'

function Home () {
    const [teacher, setTeacher] = useState([]); 
    
    const teachersData = [
        { nome: 'Professor 1', src: '../../assets/images/avatarAnimals/001-cat.png' },
        { nome: 'Professor 2', imageUrl: 'https://picsum.photos/24/24' },
        { nome: 'Professor 3', imageUrl: 'https://picsum.photos/32/32' },
        { nome: 'Professor 1', imageUrl: 'https://picsum.photos/200/200' },
        { nome: 'Professor 2', imageUrl: 'https://picsum.photos/200/200' },
        { nome: 'Professor 3', imageUrl: 'https://picsum.photos/200/200' },
        { nome: 'Professor 1', imageUrl: 'https://picsum.photos/200/200' },
        { nome: 'Professor 2', imageUrl: 'https://picsum.photos/200/200' },
        { nome: 'Professor 3', imageUrl: 'https://picsum.photos/200/200' },
        
        // Add more teachers' data here
      ];

    console.log(teacher);  

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
                        {teachersData.map((teacherData, index) => (
                            <TeacherCard key={index}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home