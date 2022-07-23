import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import styles from "./NavBar.module.css";

export default function NavBar() {
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
                <option value="">-- Filter Genre --</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
            </select>

            <select className={styles.select} name="origen" id="origen-select">
                <option value="">-- Filter Origen --</option>
                <option value="cat">API</option>
                <option value="cat">Created</option>
            </select>

            <SearchBar />
        </div>
    );
}
