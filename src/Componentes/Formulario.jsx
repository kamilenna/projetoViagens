import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
export default function Formulario() {
    return (
        <div>
            <section className="formulario">
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
    )
}