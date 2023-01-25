import React from "react";
import "../styles/Banner.css"
import Journey from "../assets/Journey.png"
//import Formulario from "./Formulario";

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
                        <button className="btn-planner">Planeje sua viagem</button>
                    </div>
                </div>
                {/*<Formulario />*/}
            </section>
        </div>
    )
}