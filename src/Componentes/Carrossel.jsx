import React from "react";
import { FaStar } from "react-icons/fa";
import { SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "../styles/Depoimentos.css"

export default function Depoimentos(props) {

    return (
        <SplideSlide>
            <div className="depoimento">
                <div className="infosUser">
                    <div className="foto"><img src={props.foto} alt="" /></div>
                    <div style={{ marginLeft: "1rem" }}>
                        <h3>{props.nomeDoUsuario}</h3>
                        <p><FaStar style={{ color: "#F9C22E" }} />{props.nota}</p>
                    </div>
                </div>
                <div className="comentario">
                    <p>{props.comentario}</p>
                </div>
            </div>
        </SplideSlide>
    )
}