import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
//styles
import "./styles.css";

function CourseCard({coursename, user}){
    const navigate = useNavigate();
    function handleClick(){
        navigate("/materias", {state: {coursename: coursename, user: user}});
    }

    return(
        <div className="course-card" onClick={handleClick}>
            <h1 className="course-name">{coursename}</h1>
        </div>
    )
}

export default CourseCard;