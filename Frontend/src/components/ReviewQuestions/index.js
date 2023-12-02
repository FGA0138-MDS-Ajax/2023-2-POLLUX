import React, { useState } from "react";
//styles
import './styles.css'

function ReviewQuestions ({ onSelect }) {
    const [selectedRating, setSelectedRating] = useState(null);

    const handleSelect = (rating) => {
        setSelectedRating(rating);
        onSelect(rating); // Pass the selected rating to the parent component
    };

    return (
        <div className="questions-container">
            <button className={selectedRating === 1 ? "selected" : ""} onClick={() => handleSelect(1)}>Muito ruim</button>
            <button className={selectedRating === 2 ? "selected" : ""} onClick={() => handleSelect(2)}>Ruim</button>
            <button className={selectedRating === 3 ? "selected" : ""} onClick={() => handleSelect(3)}>Mediano</button>
            <button className={selectedRating === 4 ? "selected" : ""} onClick={() => handleSelect(4)}>Bom</button>
            <button className={selectedRating === 5 ? "selected" : ""} onClick={() => handleSelect(5)}>Muito bom</button>
        </div>
    );
}

export default ReviewQuestions;
