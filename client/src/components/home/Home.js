import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getVideoGames } from "../../actions";
import Card from "../card/Card";
import Spinner from "../spinner/Spinner";
import "./Home.css";
import NavBar from "../navBar/NavBar";
import Paginated from "../paginated/Paginated";

export default function Home() {
    const dispatch = useDispatch();
    const { allVideoGames } = useSelector((state) => state);
    const [pagina, setPagina] = useState(0);
    
    const itemsPorPagina = 15;
    const offset = pagina * itemsPorPagina;
    const limit = offset + itemsPorPagina;

    useEffect(() => {
        dispatch(getGenres());
        dispatch(getVideoGames());
    }, [dispatch]);

    const currentGames = allVideoGames.slice(offset, limit);

    return (
        <div className="home">
            {currentGames.length > 0 ? <NavBar /> : <Spinner />}
            <div className="grid">
                {currentGames.length > 0 &&
                    currentGames.map((game) => (
                        <div className="grid-item" key={game.id}>
                            <Card game={game} />
                        </div>
                    ))}
            </div>
            {currentGames.length > 0 && (
                <Paginated
                    setPagina={setPagina}
                    pagina={pagina}
                    totalItems={allVideoGames.length}
                    itemsPorPagina={itemsPorPagina}
                />
            )}
        </div>
    );
}
