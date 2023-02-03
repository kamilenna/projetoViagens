import React from "react";
import "../styles/Banner.css"
import Journey from "../assets/Journey.png"
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

export default function Banner() {

    const alternarModal = () => {
        const modal = document.querySelector(".modal")
        modal.classList.toggle("aberto")
    }
    return (
        <div>
            <section className="banner-inicial">
                <div className="apresentacao">
                    <div className="img-inicial">
                        <img src={Journey} alt="" />
                    </div>
                    <div className="mensagem">
                        <h1>Explore o mundo!</h1>
                        <p>É hora de viajar, conhecer novos lugares, viver novas experiências.</p>
                        <button className="btn-planner" onClick={alternarModal}>Planeje sua viagem</button>
                    </div>
                </div>
                <div className="modal">
                    <div className="conteudo-modal">

                        <section className="formulario">
                            <button className="fechar-modal" onClick={alternarModal}>X</button>
                            <form>
                                <div className="perguntas">
                                    <div className="pgt-local">
                                        <label><FaMapMarkerAlt /> Localização</label>
                                        <input type="text" id="ilocal" placeholder="Para onde deseja viajar?" />
                                    </div>

                                    <div className="pgt-data">
                                        <label><FaCalendarAlt /> Data</label>
                                        <input type="date" id="idata" />
                                    </div>
                                </div>
                                <button>Buscar</button>
                            </form>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    )
}