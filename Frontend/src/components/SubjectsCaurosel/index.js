import React, {useState, useEffect, useRef} from "react";
//components
import Subject from "../Subject";
//styles
import "./styles.css"; 
//importar arrows para o carrusel do react-icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function SubjectsCarousel({ user }) {
    const carousel = useRef(null);

    const swipeLeft = (e) => {
        e.preventDefault(); 
        carousel.current.scrollLeft += carousel.current.offsetWidth; 
    };
  
    const swipeRight = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };
    console.log(user ? 'SUBJECTS CAROUSEL OK' + user.nome : '')
    return (
        <div className="carousel-wrapper">
            <IoIosArrowBack className="arrow" onClick={swipeRight}/>
            <div className="carousel" ref={carousel}>
                <Subject>
                    user={user.nome}
                </Subject>
                <Subject>
                    user={user}
                </Subject>
                <Subject>
                    user={user}
                </Subject>
                <Subject>
                    user={user}
                </Subject>
                <Subject>
                    user={user}
                </Subject>
                <Subject>
                    user={user}
                </Subject>
                <Subject>
                    user={user}
                </Subject>
                <Subject>
                    user={user}
                </Subject>
                <Subject>
                    user={user}
                </Subject>
                <Subject>
                    user={user}
                </Subject>
            </div>
            <IoIosArrowForward className="arrow" onClick={swipeLeft}/>
        </div>
    );
}

export default SubjectsCarousel;
