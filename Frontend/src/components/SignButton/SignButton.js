import React from "react"
import './SignButton.css'

function SignButton(props) {
    return (
      <div>
        <button onClick={(e) => props.onClick(e)}>{props.placeholder}</button>
      </div>
    );
  }
  
  export default SignButton;
  