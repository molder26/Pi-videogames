import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changePage, filterVideoGames, orderVideoGames, origenFilterVideoGames } from "../../actions";
import SearchBar from "../searchBar/SearchBar";
import styles from "./NavBar.module.css";

export default function NavBar() {
    const dispatch = useDispatch();
    const { allGenres, filterState, origenState, orderState } = useSelector((state) => state);
    const [orderBy, setOrderBy] = useState(orderState);
    const [filterBy, setFilterBy] = useState(filterState);
    const [origenBy, setOrigenBy] = useState(origenState);


    const handleChangeOrder = (e) => {
        setOrderBy(e.target.value);
        dispatch(origenFilterVideoGames(origenState));
        dispatch(filterVideoGames(filterBy));
        dispatch(orderVideoGames(e.target.value));
        dispatch(changePage(0));
    }

    const handleChangeFilter = (e) => {
        setFilterBy(e.target.value);
        dispatch(origenFilterVideoGames(origenState));
        dispatch(filterVideoGames(e.target.value));
        dispatch(orderVideoGames(orderBy));
        dispatch(changePage(0));
    }

    const handleChangeOrigen = (e) => {
        setOrigenBy(e.target.value);
        dispatch(origenFilterVideoGames(e.target.value));
        dispatch(filterVideoGames(filterBy));
        dispatch(orderVideoGames(orderBy));
        dispatch(changePage(0));
    }

    return (
        <div className={styles.navbar}>
            <Link to="/home" style={{ textDecoration: "none" }} className={styles.link}>
                <p className={styles.title} data-text="VideoGames">
                    VideoGames
                </p>
            </Link>
            <Link to="/newgame" className={styles.optionBar} style={{ textDecoration: "none" }}>New Game
            </Link>
            <select className={styles.select} value={orderBy} name="order" id="order-select" onChange={handleChangeOrder}>
                <option value="">-- Order By --</option>
                <option value="abc-asc">A-Z</option>
                <option value="abc-desc">Z-A</option>
                <option value="rating-asc">Rating +</option>
                <option value="rating-desc">Rating -</option>
            </select>

            <select className={styles.select} value={filterBy} name="genre" id="genre-select" onChange={handleChangeFilter}>
                <option value="">-- Genre --</option>
                {allGenres &&
                    allGenres.map((g) => (
                        <option key={g.name} value={g.name}>
                            {g.name}
                        </option>
                    ))}
            </select>

            <select className={styles.select} name="origen" id="origen-select" value={origenBy} onChange={handleChangeOrigen}>
                <option value="">-- Source --</option>
                <option value="api">API WEB</option>
                <option value="db">DB</option>
            </select>

            <SearchBar setFilterBy={setFilterBy} setOrderBy={setOrderBy}/>
        </div>
    );
}
