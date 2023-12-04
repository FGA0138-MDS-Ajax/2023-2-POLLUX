// SearchBar.js
import React, { useState } from "react";
import axios from "axios";

import { FaSearch } from "react-icons/fa";
//styles
import "./styles.css";

function SearchBar({ onChange, placeholder }) {
  let timer;

  const debounce = (func) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, 500);
  };

  return (
    <div className="input-wrapper">
     
        <FaSearch id="search-icon" />
     
      <input placeholder={placeholder} onChange={(e) => debounce(() => onChange(e))} />
    </div>
  );
}

export default SearchBar;
