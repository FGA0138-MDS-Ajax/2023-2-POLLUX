import React from "react";
import './styles.css'

function Input (props) {
    return(
        <div className='input-container'>
            <input
            type={props.type}
            name={props.name} 
            value={props.value}
            placeholder={props.placeholder}
            style={{borderColor: props.error ? 'red' : 'none'}}
            onChange={(e) => props.onChange(e.target.value)}
            />
        </div>
    )
}

export default Input; 