import React, { useState, useEffect } from "react";
import axios from "axios";
import instance from "../../services/instance";
//components
import ReviewQuestions from "../ReviewQuestions";
//styles
import { FaStar } from "react-icons/fa";
import "./styles.css";

function ReviewForm({
  mostrarFormulario,
  mostrarOcultarFormulario,
  userid,
  teacherid,
}) {
  const [comentario, setComentario] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [notaFinal, setNotaFinal] = useState(0);
  const [error, setError] = useState("");

  const [notas, setNotas] = useState({
    question1: { nota: 0 },
    question2: { nota: 0 },
    question3: { nota: 0 },
    question4: { nota: 0 },
    question5: { nota: 0 },
  });

  useEffect(() => {
    // Defina avaliacao de volta para 0 quando mostrarFormulario muda
    if (!mostrarFormulario) {
      setNotaFinal(0);
      setEnviado(false);
      setError(""); // Reseta o estado de envio ao fechar o formulário
    }
  }, [mostrarFormulario]);

  const handleQuestionSelect = (nota, rating) => {
    setNotas((prevRatings) => ({
      ...prevRatings,
      [nota]: { ...prevRatings[nota], nota: rating },
    }));

    //calcular a nota final
    let media = 0;

    Object.keys(notas).forEach((key) => {
      media += notas[key].nota + 1;
    });

    media = media / 5;
    setNotaFinal(media);
  };

  const handleAvaliar = async (e) => {
    e.preventDefault();

    const perguntasSemResposta = Object.keys(notas).filter(
      (key) => notas[key].nota === 0
    );

    if (perguntasSemResposta.length === 0 && !enviando) {
      const data = {
        professorId: teacherid,
        usuarioId: userid,
        texto: comentario,
        nota: notaFinal,
      };

      console.log(data);

      try {
        const response = await instance.post("/comentarios", data);

        if (response.data.success) {
          mostrarOcultarFormulario();
          window.location.reload();
        } else {
          console.error("Erro ao adicionar comentário:", response.data.error);
        }
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    } else {
      setError("Por favor, preencha todos os campos.");
    }
  };

  const handleAvaliarAnonimamente = async (e) => {
    e.preventDefault();

    const perguntasSemResposta = Object.keys(notas).filter(
      (key) => notas[key].nota === 0
    );

    if (perguntasSemResposta.length === 0 && !enviando) {
      const data = {
        professorId: teacherid,
        texto: comentario,
        nota: notaFinal,
      };

      try {
        const response = await instance.post("/comentario/anonimo", data);

        if (response.data.success) {
          mostrarOcultarFormulario();
          window.location.reload();
        } else {
          console.error("Erro ao adicionar comentário:", response.data.error);
        }
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    } else {
      setError("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div>
      {mostrarFormulario && (
        <div className="form-wrapper">
          <h1>Preencha sua avaliação</h1>

          <h3>Como você descreveria a clareza e eficácia da comunicação do professor durante as aulas?</h3>
          <ReviewQuestions
            onSelect={(rating) => handleQuestionSelect("question1", rating)}
          />

          <h3>O professor demonstra domínio do conteúdo lecionado?</h3>
          <ReviewQuestions
            onSelect={(rating) => handleQuestionSelect("question2", rating)}
          />

          <h3>Como você avaliaria a capacidade do professor em motivar os alunos e criar um ambiente de aprendizado positivo?</h3>
          <ReviewQuestions
            onSelect={(rating) => handleQuestionSelect("question3", rating)}
          />

          <h3>O professor fornece feedback construtivo e está disponível para ajudar os alunos fora do horário de aula?</h3>
          <ReviewQuestions
            onSelect={(rating) => handleQuestionSelect("question4", rating)}
          />

          <h3>Como você percebe a abordagem do professor em relação à diversidade de aprendizado e inclusão na sala de aula?</h3>
          <ReviewQuestions
            onSelect={(rating) => handleQuestionSelect("question5", rating)}
          />

          <textarea
            name="opnion"
            cols="30"
            rows="6"
            placeholder="Deixe um comentário sobre esse professor..."
            onChange={(e) => setComentario(e.target.value)}
          ></textarea>

          <p
            className={`error-message ${error ? "shake" : ""}`}
            style={{ display: error ? "block" : "none" }}
          >
            {error}
          </p>

          <div className="button-group">
            <button className="submit review" onClick={handleAvaliar}>
              Publicar
            </button>

            <button
              className="submit review-anonymous"
              onClick={handleAvaliarAnonimamente}
            >
              Publicar anônimamente
            </button>

            <button
              className="submit cancel"
              onClick={mostrarOcultarFormulario}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReviewForm;

/*
  
  const handleStarClick = (idx) => {
    setAvaliacao(idx + 1);
  };
  

 <div className="rating">
              <input type="number" name="rating" value={avaliacao} hidden></input>
              {[...Array(5)].map((_, idx) => (
                <FaStar
                  key={idx}
                  className={`star ${idx < avaliacao ? 'active' : ''}`}
                  onClick={() => handleStarClick(idx)}
                  style={{ '--i': idx }}
                ></FaStar>
              ))}
            </div>
*/
