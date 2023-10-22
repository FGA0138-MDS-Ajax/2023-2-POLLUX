import React from 'react' 
import { FaSearch } from 'react-icons/fa';
//styles
import './SearchBar.css'


function SearchBar () {
    return(
        <div className='input-wrapper'>
            <FaSearch id='search-icon'></FaSearch>
            <input placeholder='Pesquise seu professor'></input>
        </div>
    )
}

export default SearchBar

