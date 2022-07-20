import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideoGames } from "../../actions";
import SearchBar from "../searchBar/SearchBar";
import Card from "../card/Card";
import Spinner from "../spinner/Spinner";
import "./Home.css";

export default function Home() {
    const dispatch = useDispatch();
    const { allVideoGames } = useSelector((state) => state);

    useEffect(() => {
        dispatch(getVideoGames());
    }, []);

    return (
        <div className="home">
            {allVideoGames.length > 0 ? <SearchBar /> : <Spinner />}
            <div className="grid">
                {allVideoGames 
                    ? allVideoGames.map((game) => (
                        <div className="grid-item" key={game.id}>
                            <Card game={game} />
                        </div>
                    ))
                    : <Spinner />
                }
                <div>Paginador</div>
            </div>
        </div>
    );
}
