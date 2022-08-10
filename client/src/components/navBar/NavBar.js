import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillSunFill } from 'react-icons/bs';
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import {
    changePage,
    filterVideoGames,
    orderVideoGames,
    origenFilterVideoGames,
} from "../../actions";
import SearchBar from "../searchBar/SearchBar";
import styles from "./NavBar.module.css";

export default function NavBar() {
    const dispatch = useDispatch();
    const { allGenres, filterState, origenState, orderState } =
        useSelector((state) => state);
    const [orderBy, setOrderBy] = useState(orderState);
    const [filterBy, setFilterBy] = useState(filterState);
    const [origenBy, setOrigenBy] = useState(origenState);

    let themeSaved = window.localStorage.getItem("theme");
    const [theme, setTheme] = useState(themeSaved || "dark");

    const setSelects = (order = "", filter = "", origen = "") => {
        setOrderBy(order);
        setFilterBy(filter);
        setOrigenBy(origen);
        dispatch(origenFilterVideoGames(origen));
        dispatch(filterVideoGames(filter));
        dispatch(orderVideoGames(order));
        dispatch(changePage(0));
    };

    const handleChangeOrder = (e) => {
        setSelects(e.target.value, filterBy, origenBy);
    };

    const handleChangeFilter = (e) => {
        setSelects(orderBy, e.target.value, origenBy);
    };

    const handleChangeOrigen = (e) => {
        setSelects(orderBy, filterBy, e.target.value);
    };

    const handleCleanFilters = () => {
        setSelects();
    };

    const handleToggleTheme = () => {
        window.localStorage.setItem("theme", theme === "light" ? "dark" : "light");
        setTheme(theme === "light" ? "dark" : "light");
        document.body.classList.toggle("light");
    };

    if (theme === "light") document.body.classList.add("light");

    return (
        <div name="navBarContainer" className={styles.navbar}>
            <Link
                to="/home"
                style={{ textDecoration: "none" }}
                className={styles.link}
            >
                <p className={styles.title} data-text="VideoGames">
                    VideoGames
                </p>
            </Link>
            <Link
                to="/newgame"
                className={styles.optionBar}
                style={{ textDecoration: "none" }}
            >
                New Game
            </Link>
            <select
                className={styles.select}
                value={orderBy}
                name="order"
                id="order-select"
                onChange={handleChangeOrder}
            >
                <option value="">-- Order By --</option>
                <option value="abc-asc">A-Z</option>
                <option value="abc-desc">Z-A</option>
                <option value="rating-asc">Rating +</option>
                <option value="rating-desc">Rating -</option>
            </select>

            <select
                className={styles.select}
                value={filterBy}
                name="genre"
                id="genre-select"
                onChange={handleChangeFilter}
            >
                <option value="">-- Genre --</option>
                {allGenres &&
                    allGenres.map((g) => (
                        <option key={g.name} value={g.name}>
                            {g.name}
                        </option>
                    ))}
            </select>

            <select
                className={styles.select}
                name="origen"
                id="origen-select"
                value={origenBy}
                onChange={handleChangeOrigen}
            >
                <option value="">-- Source --</option>
                <option value="api">API WEB</option>
                <option value="db">DB</option>
            </select>

            <button onClick={handleCleanFilters} className={styles.btn}>
                Clean Filters
            </button>

            <SearchBar setFilterBy={setFilterBy} setOrderBy={setOrderBy} />

            <button onClick={handleToggleTheme} className={styles.btnLightDark}>
                {
                    theme === "light"
                    ? <BsFillSunFill />
                    : <MdDarkMode />
                    
                }
            </button>
            
        </div>
    );
}
