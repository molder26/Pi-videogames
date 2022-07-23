import React, { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
    const [search, setSearch] = useState("");

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const handleClick = (event) => {
        event.preventDefault();
        console.log("handleClick 👉️", search);
        setSearch("");
    };

    return (
        <div className={styles.searchBar}>
            <input
                type="text"
                id="searchBox"
                name="searchBox"
                placeholder="Search"
                onChange={handleChange}
                value={search}
                autoComplete="off"
                className={styles.inputDecorated}
            />

            {/* <button onClick={handleClick}>Buscar</button> */}
        </div>
    );
}
