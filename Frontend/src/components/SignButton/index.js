import React from "react"
import './styles.css'

function SignButton(props) {
    return (
      <div >
        <button className="sign-button" onClick={(e) => props.onClick(e)}>{props.placeholder}</button>
      </div>
    );
  }
  
  export default SignButton;
  