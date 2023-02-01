import React from "react";
import "../styles/Populares.css"
import CardLugar from "./CardLugar";


export default function Populares() {
    const destinosPopulares = [
        {
            img: "https://images.unsplash.com/photo-1634221558053-3a617b5201d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
            alt: "Foto de Younho Choo do Castelo da Disney na Unsplash",
            nome: "Disney",
            localizacao: "Florida, Estados Unidos",
            preco: "R$ 3.500,00",
            estrelas: 4.5
        },
        {
            img: "https://images.pexels.com/photos/13911606/pexels-photo-13911606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "Foto do Cristo Redentor de Luan Gonçalves",
            nome: "Rio de Janeiro",
            localizacao: "Brasil",
            preco: "R$ 1.200,00",
            estrelas: 4.2
        },
        {
            img: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "Foto da Torre Eiffel de Thorsten technoman",
            nome: "Paris",
            localizacao: "França",
            preco: "R$ 3.000,00",
            estrelas: 4.5
        },
        {
            img: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "Foto do Big Ben em Londres de Dominika Gregušová",
            nome: "Londres",
            localizacao: "Reino Unido",
            preco: "R$ 4.050,00",
            estrelas: 4.3
        },
        {
            img: "https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "Foto do Coliseu em roma do Pixabay",
            nome: "Roma",
            localizacao: "Itália",
            preco: "R$ 2.500,00",
            estrelas: 4.1
        },
        {
            img: "https://images.pexels.com/photos/1750754/pexels-photo-1750754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "Foto da Placa colorida de Toronto no Canadá de Vincent Albos",
            nome: "Toronto",
            localizacao: "Canadá",
            preco: "R$ 3.100,00",
            estrelas: 4.5
        }
    ]
    return (
        <div className="container-populares">
            <h2 className="subtitulo">Destinos populares</h2>
            <section>
                {destinosPopulares.map((d) => <CardLugar key={d.nome} img={d.img} alt={d.alt} nome={d.nome} localizacao={d.localizacao} preco={d.preco} estrelas={d.estrelas} />)}
            </section>
        </div>
    )
}