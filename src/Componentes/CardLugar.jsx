import React from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

export default function CardLugar(props) {
    return (
        <div>
            <section>
                <div className="card-lugar">
                    <div className="imagem-lugar">
                        <img src={props.img} alt={props.alt} />
                    </div>
                    <div className="descricao">
                        <h6>{props.nome}</h6>
                        <p><FaMapMarkerAlt /> {props.localizacao}</p>
                        <div>
                            <p className="preco">{props.preco}</p>
                            <p className="estrelas"><FaStar style={{ color: "#F9C22E" }} /> {props.estrelas}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}