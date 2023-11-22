import React from "react";
//styles
import "./styles.css";

function CourseCard({coursename}){
    return(
        <div className="course-card">
            <h1 className="course-name">{coursename}</h1>
        </div>
    )
}

export default CourseCard;