import React from "react";
import "./Card.css";

export default function Card({ game }) {
    return (
        <div>
            <img src={game.img} alt={game.name} className="card-img" />
            <div className="card-content">
                <h3 className="card-header">{game.name}</h3>
                <p className="card-text">{game.genres}</p>
                {/* <button className="card-btn">Ver <span>&rarr;</span></button> */}
            </div>
        </div>
    );
}

//Todo:
//ubicar el boton al final