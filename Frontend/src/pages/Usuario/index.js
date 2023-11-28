import React from "react";

import './styles.css';

import Header from "../../components/Header";
import Review from "../../components/Review";

function Usuario() {
    return (
        <>
            <Header/>
            <div className="user-wrapper">
                <h1>Minhas avaliações</h1>
                <div className="linha-divisoria"></div>
                <Review
                    deleteOption={true}
                />
                <Review
                    deleteOption={true}
                />
                <Review
                    deleteOption={true}
                />
            </div>
        </>
    );
}  

export default Usuario;