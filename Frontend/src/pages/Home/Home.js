import React, { useState } from "react"
import Header from "../../components/Header/Header"
import SearchBar from '../../components/SearchBar/SearchBar'
//styles
import './Home.css'

function Home () {
    const [teacher, setTeacher] = useState([]); 
    
        console.log(teacher);  

    return(
        <div className="home-wrapper">
            <Header></Header>
            <div className="search-bar-container">
                <SearchBar
                    onChange={setTeacher}
                    placeholder="Digite o nome do professor"
                />
            </div>
            <div className="search-bar-results">
                <h1>
                    {teacher}
                </h1>
            </div>
        </div>
    )
}

export default Home