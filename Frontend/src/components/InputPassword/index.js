import React, { useState } from "react";
import './styles.css'
import {FiEye, FiEyeOff} from 'react-icons/fi'


function InputPassword (props) {
    const [visible, setVisible] = useState('password')
    const handleClick = () => {
        setVisible(visible === 'password' ? 'text' : 'password')
    }

    return(
        <div className='password-container'>
            <input
            type={visible}
            name={props.name} 
            value={props.value}
            placeholder={props.placeholder}
            style={{borderColor: props.error ? 'red' : 'none'}}
            onChange={(e) => props.onChange(e.target.value)}
            />
            {visible === 'password' ? <FiEye className="eye" onClick={handleClick} />
             : <FiEyeOff className="eye" onClick={handleClick} />}
        </div>
    )
}

export default InputPassword; 