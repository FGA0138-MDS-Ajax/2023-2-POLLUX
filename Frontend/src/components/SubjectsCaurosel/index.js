import React, { useState, useEffect, useRef } from "react";
//components
import Subject from "../Subject";
//styles
import "./styles.css";
//importar arrows para o carrusel do react-icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function SubjectsCarousel({ subjects }) {
  const carousel = useRef(null);

  const swipeLeft = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  const swipeRight = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  return (
    <div className="carousel-wrapper">
      <div className="arrow left">
        <IoIosArrowBack className="arrow-icon" onClick={swipeRight} />
      </div>
      <div className="carousel" ref={carousel}>
        {subjects.map((subject) => (
          <Subject subjectName={subject.materia} subject={subject}></Subject>
        ))}
      </div>
      <div className="arrow right">
        <IoIosArrowForward className="arrow-icon" onClick={swipeLeft} />
      </div>
    </div>
  );
}

export default SubjectsCarousel;
