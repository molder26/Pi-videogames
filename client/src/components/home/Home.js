import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getVideoGames } from "../../actions";
import Card from "../card/Card";
import Spinner from "../spinner/Spinner";
import "./Home.css";
import NavBar from "../navBar/NavBar";
import Paginated from "../paginated/Paginated";
import NotFound from "../notFound/NotFound";

export default function Home() {
    const dispatch = useDispatch();
    const { filteredVideoGames, allVideoGames } = useSelector((state) => state);
    const [pagina, setPagina] = useState(0);

    const itemsPorPagina = 15;
    const offset = pagina * itemsPorPagina;
    const limit = offset + itemsPorPagina;

    useEffect(() => {
        if (allVideoGames.length === 0) {
            dispatch(getGenres());
            dispatch(getVideoGames());
        }
    }, [dispatch, allVideoGames.length]);

    if (typeof filteredVideoGames === "string") {
        return  (
            <div className="notFound">
                <NavBar setPagina={setPagina} />
                <NotFound />
            </div>
        )
    } else {
        const currentGames = filteredVideoGames.slice(offset, limit);

        return (
            <div className="home">
                <NavBar setPagina={setPagina} />
                {currentGames.length > 0 ? null : <Spinner />}
                {/* {currentGames.length > 0 ? <NavBar /> : <Spinner />} */}
                <div className="cards">
                    <div className="grid">
                        {currentGames.length > 0 &&
                            currentGames.map((game) => (
                                <div className="grid-item" key={game.id}>
                                    <Card game={game} />
                                </div>
                            ))}
                    </div>
                </div>
                {currentGames.length > 0 && (
                    <Paginated
                        setPagina={setPagina}
                        pagina={pagina}
                        totalItems={filteredVideoGames.length}
                        itemsPorPagina={itemsPorPagina}
                    />
                )}
            </div>
        );
    }
}
