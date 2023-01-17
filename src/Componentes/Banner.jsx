import React from "react";
import "../styles/Banner.css"
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import Journey from "../assets/Journey.png"

export default function Banner() {
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
                    </div>
                </div>
                <section className="formulario">
                    <form>
                        <div className="perguntas">
                            <div className="pgt-local">
                                <label for="ilocal"><FaMapMarkerAlt /> Localização</label>
                                <input type="text" id="ilocal" placeholder="Para onde deseja viajar?" />
                            </div>

                            <div className="pgt-data">
                                <label for="idata"><FaCalendarAlt /> Data</label>
                                <input type="date" id="idata" />
                            </div>
                        </div>
                        <button>Buscar</button>
                    </form>
                </section>
            </section>
        </div>
    )
}