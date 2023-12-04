import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useUserContext } from "../../context/UserContext";
import instance from "../../services/instance";
//components
import Header from "../../components/Header";
import Review from "../../components/Review";
import ReviewForm from "../../components/ReviewForm";
import RatingGraphic from "../../components/RatingGraphic";
//styles
import "./styles.css";
import noResults from "../../assets/images/no-results.png";
import { IoMdAdd } from "react-icons/io";

function Professor() {
  const location = useLocation();
  const teacher = location.state ? location.state.professor : null;
  const profile = location.state ? location.state.profile : null;
  const { userId } = useUserContext();

  function formatarNomeMateria(nome) {
    const palavras = nome.split(" ");
    palavras.shift();
    palavras.shift();
    const nomeFormatado = palavras
      .map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1))
      .join(" ");
    return nomeFormatado;
  }

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const mostrarOcultarFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  const [avaliacoes, setAvaliacoes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    instance
      .get(`/comentarios/professor/${teacher._id}`)
      .then((response) => {
        setAvaliacoes(response.data.reverse());
        setLoading(false);
      })

      .catch((error) => {
        console.error("Error fetching comments:", error);
        setLoading(false);
      });
  }, [teacher._id]);

  return (
    <div>
      <Header />
      <div className="teacher-wrapper">
        <div className="teacher-header">
          <div className="teacher-profile">
            <img src={profile} alt="Professor" />
          </div>
          <div className="teacher-details">
            <h1 className="name">{teacher.nome}</h1>
            <span className="semester">2023.2</span>
            {teacher.disciplina.map((disciplina, index) => (
              <span key={index} className="teacher-subject">
                {formatarNomeMateria(disciplina)}
              </span>
            ))}
          </div>
          <div className="teacher-rating">
            <RatingGraphic teacherId={teacher._id} />
            <span className="avaliations-number">
              {avaliacoes.length} avaliações
            </span>
          </div>
        </div>

        {loading ? (
          <div className="loading-reviews">
            <div className="loading-spinner"></div>
          </div>
        ) : (
          <>
            {avaliacoes.length > 0 && (
              <div className="reviews-label">
                <h2>Todas as avaliações</h2>
                <div
                  className="review-button"
                  onClick={mostrarOcultarFormulario}
                >
                  <button>Avaliar</button>
                  <IoMdAdd className="review-icon" />
                </div>
              </div>
            )}
            <ReviewForm
              mostrarFormulario={mostrarFormulario}
              mostrarOcultarFormulario={mostrarOcultarFormulario}
              userid={userId}
              teacherid={teacher._id}
            ></ReviewForm>
            {avaliacoes.length > 0 && (
              <>
                {avaliacoes.map((avaliacao, index) => (
                  <Review
                    key={index}
                    avaliacaoId={avaliacao._id}
                    nota={avaliacao.nota}
                    texto={avaliacao.texto}
                    data={avaliacao.data}
                    userId={avaliacao.usuarioId}
                  ></Review>
                ))}
              </>
            )}
            {avaliacoes.length === 0 && !mostrarFormulario && (
              <div className="no-review">
                <h2>Este professor ainda não possui nenhuma avaliação!</h2>
                <img src={noResults}></img>
                <button
                  className="first-review-button"
                  onClick={mostrarOcultarFormulario}
                >
                  Seja o primerio a avaliar
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Professor;
