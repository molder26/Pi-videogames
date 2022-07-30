import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterVideoGames, orderVideoGames } from "../../actions";
import SearchBar from "../searchBar/SearchBar";
import styles from "./NavBar.module.css";

export default function NavBar({setPagina}) {
    const { allGenres } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleChangeOrder = (e) => {
        dispatch(orderVideoGames(e.target.value));
        setPagina(0);
    }

    const handleChangeFilter = (e) => {
        dispatch(filterVideoGames(e.target.value));
        setPagina(0);
    }

    return (
        <div className={styles.navbar}>
            <Link to="/home" style={{ textDecoration: "none" }} className={styles.link}>
                <p className={styles.title} data-text="VideoGames">
                    VideoGames
                </p>
            </Link>
            <Link to="/home" style={{ textDecoration: "none" }}>
                <p className={styles.optionBar}>New Game</p>
            </Link>
            <select className={styles.select} name="order" id="order-select" onChange={handleChangeOrder}>
                <option value="reset">-- Order By --</option>
                <option value="abc-asc">A-Z</option>
                <option value="abc-desc">Z-A</option>
                <option value="rating-asc">Rating +</option>
                <option value="rating-desc">Rating -</option>
            </select>

            <select className={styles.select} name="genre" id="genre-select" onChange={handleChangeFilter}>
                <option value="">-- Genre --</option>
                {allGenres &&
                    allGenres.map((g) => (
                        <option key={g.name} value={g.name}>
                            {g.name}
                        </option>
                    ))}
            </select>

            <select className={styles.select} name="origen" id="origen-select">
                <option value="">-- Source --</option>
                <option value="api">API</option>
                <option value="db">Created</option>
            </select>

            <SearchBar />
        </div>
    );
}
