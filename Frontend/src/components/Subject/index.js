import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import instance from '../../services/instance';
//styles
import "../SubjectsCaurosel/styles.css";

function formatarNomeMateria(nome) {
    const palavras = nome.split(' ');
    palavras.shift();
    palavras.shift();
    const nomeFormatado = palavras.map(
        (palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1)
    ).join(' ');
    return nomeFormatado;
} 

function Subject({ subject }) {
    const navigate = useNavigate();
    const [professores, setProfessores] = useState([]);

    const handleClick = async () => {
        try {
            const professorPromises = subject.professorId.map(async (professorId) => {
            const response = await instance.get(`/professores/${professorId}`);
            return response.data;
          });
    
          const professoresData = await Promise.all(professorPromises);
          setProfessores(professoresData);
    
          navigate('/professoresmaterias', { state: { subject: subject, professores: professoresData} });
        } catch (error) {
          console.error('Error fetching professors:', error);
        }
      };

    return (
        <div className="subject-container" onClick={handleClick}>
            <span className="subject-name">{formatarNomeMateria(subject.materia)}</span>
        </div>
    );
}

export default Subject;
