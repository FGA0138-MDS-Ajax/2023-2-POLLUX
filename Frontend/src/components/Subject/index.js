import React from "react";
import { useNavigate } from "react-router-dom";
//styles
import "../SubjectsCaurosel/styles.css";

function Subject({ user }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/professoresmateria', { state: { user: user}});
      }

    console.log(user ? user.nome : '')

    return (
        <div className="subject-container" onClick={handleClick}>
            <h3 className="subject-name">Matéria</h3>
        </div>
    );
}

export default Subject;
