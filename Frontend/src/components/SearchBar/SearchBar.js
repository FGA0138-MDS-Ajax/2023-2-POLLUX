import React from 'react' 
import { FaSearch } from 'react-icons/fa';
//styles
import './SearchBar.css'


function SearchBar (props) {
    return(
        <div className='input-wrapper'>
            <FaSearch id='search-icon'></FaSearch>
            <input 
                placeholder={props.placeholder}
                onChange={(e) => props.onChange(e.target.value)}
            ></input>
        </div>
    )
}

export default SearchBar

