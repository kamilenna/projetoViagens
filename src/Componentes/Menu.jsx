import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Menu.css"
import Logo from "../assets/voo-de-aviao.png"

export default function Menu() {
    const showNavbar = () => {
        let navbar = document.querySelector(".nav-bar")
        navbar.classList.toggle("open")
    }
    return (
        <div>
            <header>
                <div className="main-menu">
                    <nav className="menu">
                        <div className="logo">
                            <div className="icon-logo" style={{ width: "40px" }}><img src={Logo} /></div>
                            <h2>Tour</h2>
                        </div>
                        <div className="menu-list">
                            <ul>
                                <li className="menu-item"><a href="#" className="menu-link">Serviços</a></li>
                                <li className="menu-item"><a href="#" className="menu-link">Popular</a></li>
                                <li className="menu-item"><a href="#" className="menu-link">Contato</a></li>
                            </ul>
                        </div>

                        <div className="btn-register">
                            <button className="btn-login"><a href="#" >Login</a></button>
                            <button className="btn-sign-up"><a href="#" >Cadastre-se</a></button>
                        </div>
                    </nav>

                    <div className="logo-mobile">
                        <div className="icon-logo" style={{ width: "35px" }}><img src={Logo} /></div>
                        <h3>Tour</h3>
                    </div>
                    <div className="mobile-menu-icon">
                        <a href="#" onClick={showNavbar}><FaBars /></a>
                    </div>
                </div>
                <nav className="nav-bar">
                    <div className="mobile-menu-icon">
                        <a href="#" onClick={showNavbar}><FaTimes /></a>
                    </div>
                    <div className="nav-list">
                        <ul>
                            <li className="nav-item"><a href="#" className="nav-link">Serviços</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Popular</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Contato</a></li>
                        </ul>
                    </div>

                    <div className="btn-register">
                        <button className="btn-login"><a href="#" >Login</a></button>
                        <button className="btn-sign-up"><a href="#" >Cadastre-se</a></button>
                    </div>
                </nav>
            </header>
        </div>
    )
}