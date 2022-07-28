import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import styles from "./NavBar.module.css";

export default function NavBar() {
    const { allGenres } = useSelector((state) => state);

    return (
        <div className={styles.navbar}>
            <Link to="/home" style={{ textDecoration: "none" }}>
                <p className={styles.title} data-text="VideoGames">
                    VideoGames
                </p>
            </Link>
            <Link to="/home" style={{ textDecoration: "none" }}>
                <p className={styles.optionBar}>New Game</p>
            </Link>
            <select className={styles.select} name="order" id="order-select">
                <option value="">-- Order By --</option>
                <option value="abc-asc">A-Z</option>
                <option value="abc-desc">Z-A</option>
                <option value="rating-asc">Rating +</option>
                <option value="rating-desc">Rating -</option>
            </select>

            <select className={styles.select} name="genre" id="genre-select">
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
                <option value="cat">API</option>
                <option value="cat">Created</option>
            </select>

            <SearchBar />
        </div>
    );
}
