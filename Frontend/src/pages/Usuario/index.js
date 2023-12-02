import React, { useEffect } from "react";
import { useUserContext } from "../../context/UserContext";
import instance from "../../services/instance";
//styles
import './styles.css';
//components
import Header from "../../components/Header";
import Review from "../../components/Review";

function Usuario() {
    const [reviews, setReviews] = React.useState([]);
    const { userId } = useUserContext();

    useEffect(() => {
        instance.get(`/comentarios/usuario/${userId}`)
            .then(response => {
                setReviews(response.data);
            })
            .catch(error => {
                console.error('Error fetching user reviews:', error);
            });
    }, [userId]);

    return (
        <>
            <Header/>
            <div className="user-wrapper">
                <h1>Minhas avaliações</h1>
                <div className="linha-divisoria"></div>
                { reviews.length === 0 && (
                    <div className="no-reviews">
                        <h2>Você não possui avaliações.</h2>
                    </div>
                )}
                {  reviews.length > 0 && (
                     reviews.map((avaliacao, index) => (
                        <Review
                            key={index}
                            avaliacaoId={avaliacao._id} 
                            nota={avaliacao.nota}
                            texto={avaliacao.texto}
                            data={avaliacao.data}
                            userId={avaliacao.usuarioId}
                            deleteOption={true}
                        ></Review>
                    ))
                )}

               
            </div>
        </>
    );
}  

export default Usuario;