import React from "react";
import { Splide } from '@splidejs/react-splide';
import "../styles/Depoimentos.css"
import Carrossel from "../Componentes/Carrossel.jsx"

export default function Depoimentos() {

    const depoimentos = [{
        id: 1,
        Foto: "https://images.unsplash.com/photo-1596813362035-3edcff0c2487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        nomeDoUsuario: "Ana Paula",
        nota: 4.5,
        comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae bibendum elit. Morbi non risus a quam posuere dapibus. Proin pellentesque tortor eu metus maximus gravida. Duis bibendum tempus velit ac consectetur."
    },
    {
        id: 2,
        Foto: "https://images.pexels.com/photos/1006202/pexels-photo-1006202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        nomeDoUsuario: "Maria Luiza",
        nota: 4.2,
        comentario: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi consequatur velit animi fugiat officia asperiores fuga, quas, incidunt voluptatibus tempore debitis sint blanditiis a! Velit quo adipisci nulla repellat illo?"
    },
    {
        id: 3,
        Foto: "https://images.pexels.com/photos/14520051/pexels-photo-14520051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        nomeDoUsuario: "Luiz Felipe",
        nota: 4.3,
        comentario: "Aenean suscipit malesuada tincidunt. Quisque bibendum vulputate sagittis. Proin volutpat ipsum ut metus accumsan dictum. Maecenas finibus ut tellus at volutpat. In hac habitasse platea dictumst."
    },
    ]

    return (
        <div>
            <section className="container-depoimentos">
                <h2 className="subtitulo">Destinos populares</h2>

                <Splide aria-label="My Favorite Images" className="slide-container" options={{
                    gap: '1rem',
                }}>
                    {depoimentos.map((d) => <Carrossel key={d.id} foto={d.Foto} nomeDoUsuario={d.nomeDoUsuario} nota={d.nota} comentario={d.comentario} />)}

                    <div className="splide__arrows" />
                </Splide>
            </section>
        </div>
    )
}