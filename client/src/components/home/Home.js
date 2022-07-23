import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getVideoGames } from "../../actions";
import Card from "../card/Card";
import Spinner from "../spinner/Spinner";
import "./Home.css";
import NavBar from "../navBar/NavBar";

export default function Home() {
    const dispatch = useDispatch();
    const { allVideoGames } = useSelector((state) => state);

    useEffect(() => {
        dispatch(getGenres());
        dispatch(getVideoGames());
    }, [dispatch]);

    return (
        <div className="home">
            {allVideoGames.length > 0 ? <NavBar /> : <Spinner />}
            <div className="grid">
                {allVideoGames 
                    && allVideoGames.map((game) => (
                        <div className="grid-item" key={game.id}>
                            <Card game={game} />
                        </div>
                    ))
                }
                <div>Paginador</div>
            </div>
        </div>
    );
}
