import React from "react"
import Header from "../../components/Header/Header"
import SearchBar from '../../components/SearchBar/SearchBar'
//styles
import './Home.css'

function Home () {
    return(
        <div className="home-wrapper">
            <Header></Header>
            <div className="search-bar-container">
                <SearchBar></SearchBar>
            </div>
        </div>
    )
}

export default Home