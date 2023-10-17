import React from "react";
import './styles.css'

function Input (props) {
    return(
        <div>
            <input 
            type={props.type}
            name={props.name} 
            value={props.value}
            placeholder={props.placeholder}
            onChange={(e) => props.onChange(e.target.value)}
            />
        </div>
    )
}

export default Input; 