import React from "react";
import "../styles/Servicos.css"
import GuiaTuristico from "../assets/guia-turistico.png"
import PrecoBaixo from "../assets/preco-baixo.png"
import Suporte from "../assets/suporte-tecnico.png"

// <a href="https://www.flaticon.com/br/icones-gratis/guia-turistico" title="guia turístico ícones">Guia turístico ícones criados por Flat Icons - Flaticon</a>

// <a href="https://www.flaticon.com/br/icones-gratis/preco-baixo" title="preco-baixo ícones">Preco-baixo ícones criados por Andy Horvath - Flaticon</a>

// <a href="https://www.flaticon.com/br/icones-gratis/apoio" title="apoio ícones">Apoio ícones criados por Freepik - Flaticon</a>

export default function Servicos() {
    return (
        <div className="container-servicos">
            <h2 className="subtitulo">Nossos serviços</h2>
            <section>
                <div className="servico">
                    <div className="icon">
                        <img src={GuiaTuristico} alt="Guia turístico ícones criados por Flat Icons - Flaticon" />
                    </div>
                    <div className="info">
                        <h6>Guia turistico</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="servico">
                    <div className="icon">
                        <img src={PrecoBaixo} alt="Preco-baixo ícones criados por Andy Horvath - Flaticon" />
                    </div>
                    <div className="info">
                        <h6>Preços acessíveis</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="servico">
                    <div className="icon">
                        <img src={Suporte} alt="Apoio ícones criados por Freepik - Flaticon" />
                    </div>
                    <div className="info">
                        <h6>Suporte</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}