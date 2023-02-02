import React from "react";
import "../styles/Footer.css"
import Logo from "../assets/voo-de-aviao.png"
import { FaInstagram, FaFacebook, FaTwitterSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <div>
            <section className="container-footer">
                <div className="logo">
                    <div className="icon-logo" style={{ width: "40px" }}><img src={Logo} /></div>
                    <h2>Tour</h2>
                </div>
                <div className="redes">
                    <h3>Redes Sociais</h3>
                    <div className="icons-redes">
                        <FaInstagram className="icon" />
                        <FaFacebook className="icon" />
                        <FaTwitterSquare className="icon" />
                    </div>
                </div>
                <div className="newsletter">
                    <h3>Escreva-se na nossa newsletter para dicas de novas viagens.</h3>
                    <input type="text" id="email" />
                    <button>Inscreva-se</button>
                </div>

                <p className="autor">Desenvolvido por <a href="https://karlamilenna.netlify.app/" target="_blank" rel="noopener noreferrer">Karla Milenna</a></p>
            </section>
        </div>
    )
}