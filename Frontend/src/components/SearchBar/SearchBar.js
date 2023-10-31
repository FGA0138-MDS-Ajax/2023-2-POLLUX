// SearchBar.js
import React, { useState } from "react";
import axios from 'axios';

import { FaSearch } from "react-icons/fa";
//styles
import "./SearchBar.css";

function SearchBar({ onChange, placeholder }) {
   
  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon"/>
      <input
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
}

export default SearchBar;