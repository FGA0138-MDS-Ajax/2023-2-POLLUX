import React from "react";
//components
import Subject from "../Subject";
//styles
import "./styles.css";  

function SubjectsCarousel() {
    return (
        <div>
            <div className="carousel">
                <Subject/>
                <Subject/>
                <Subject/>
                <Subject/>
                <Subject/>
                <Subject/>
                <Subject/>
                <Subject/>
                <Subject/>
                <Subject/>
            </div>
        </div>
    );
}

export default SubjectsCarousel;
