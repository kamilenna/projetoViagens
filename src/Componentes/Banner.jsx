import React from "react";
//import "../styles/Banner.css"
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import Journey from "../assets/Journey.png"

export default function Banner() {
    return (
        <div>
            <section>
                <h1>Explore o mundo!</h1>
                <h3>É hora de viajar, conhecer novos lugares, viver novas experiências.</h3>
                <div>
                    <img src={Journey} alt="" />
                </div>
                <form>
                    <label for="ilocal"><FaMapMarkerAlt /> Localização</label>
                    <input type="text" id="ilocal" />
                    <label for="idata"><FaCalendarAlt /> Data</label>
                    <input type="date" id="idata" />
                    <button>Buscar</button>
                </form>
            </section>
        </div>
    )
}