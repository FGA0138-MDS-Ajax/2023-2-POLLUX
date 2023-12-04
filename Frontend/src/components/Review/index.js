import React, { useState, useEffect } from "react";
import axios from "axios";
import instance from "../../services/instance";
//styles
import "./styles.css";
import { FaStar, FaRegTrashAlt } from "react-icons/fa";
import profile from "../../assets/images/default-avatar.png";

function Review({ avaliacaoId, nota, texto, data, userId, deleteOption }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (userId) {
      getUserData(userId);
    }
  }, [userId]);

  const getUserData = async (userId) => {
    try {
      const response = await instance.get(`/usuarios/${userId}`);
      if (response.data) {
        setUserData(response.data);
      } else {
        console.error('Resposta da API não contém o campo "user" esperado.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteReview = async () => {
    try {
      const response = await instance.delete(`/comentarios/${avaliacaoId}`);
      if (response.data) {
        window.location.reload();
      } else {
        console.error('Resposta da API não contém o campo "user" esperado.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  function formatarData(dataString) {
    const data = new Date(dataString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return data.toLocaleString("pt-BR", options);
  }

  console.log(userData);

  return (
    <div className="review-wrapper">
      <div className="review-avatar">
        <img src={profile} alt="avatar" />
      </div>
      <div className="review-body">
        <div className="review-header">
          <h2>{userData ? userData.nome : "Anônimo"}</h2>
          <div className="rating">
            {[...Array(5)].map((_, idx) => (
              <FaStar
                key={idx}
                className={`star ${idx < nota ? "active" : ""}`}
              ></FaStar>
            ))}
          </div>
        </div>
        <div className="review-info">
          <span>
            {userData ? userData.curso : ""} |{" "}
            {userData ? userData.periodo : ""}
          </span>
          <p>
            <em>"{texto}"</em>
          </p>
        </div>
        <div className="review-footer">
          <span>{formatarData(data)}</span>
          {deleteOption && (
            <div className="delete" onClick={deleteReview}>
              <FaRegTrashAlt></FaRegTrashAlt>
              <button>Excluir este comentário</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Review;
