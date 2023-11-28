import React, {useState, useEffect, useRef} from "react";
//components
import Subject from "../Subject";
//styles
import "./styles.css"; 
//importar arrows para o carrusel do react-icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function SubjectsCarousel({ user, subjects}) {
    const carousel = useRef(null);

    const swipeLeft = (e) => {
        e.preventDefault(); 
        carousel.current.scrollLeft += carousel.current.offsetWidth; 
    };
  
    const swipeRight = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    console.log(subjects);
   
    return (
        <div className="carousel-wrapper">
            <IoIosArrowBack className="arrow" onClick={swipeRight}/>
            <div className="carousel" ref={carousel}>
                {subjects.map((subject) => (
                    <Subject
                        subjectName={subject.materia}
                        subject={subject}
                    ></Subject>
                ))}
            </div>
            <IoIosArrowForward className="arrow" onClick={swipeLeft}/>
        </div>
    );
}

export default SubjectsCarousel;
